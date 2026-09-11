"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

import { cn } from "@/lib/utils";

export interface HeroSlide {
    src: string;
    alt: string;
    caption: string;
}

const INTERVAL_MS = 6000;

/**
 * Hero slideshow.
 *
 * Four photographs from the chamber's own archive, all at 1500px or wider,
 * crossfading. The still hero it replaced showed one image; these show the
 * range of what NCIT actually does, which is the point of putting a
 * photograph there at all.
 *
 * Auto-advancing content carries real accessibility obligations and they are
 * met here rather than assumed:
 *
 *   WCAG 2.2.2, Pause Stop Hide. Anything that moves automatically for more
 *   than five seconds needs a control to stop it. There is a visible pause
 *   button, it is a real button, and it reports its state.
 *
 *   Reduced motion. A reader who has asked for less motion gets the first
 *   slide and no rotation at all, not a faster rotation. The timer never
 *   starts, so nothing moves under them.
 *
 *   Focus and hover pause it, so the slide cannot change out from under
 *   someone reading a caption or tabbing through the dots.
 *
 *   Every slide keeps its own alt text. A generic "NCIT event" on all four
 *   would be worse than none, because a screen reader would announce the same
 *   thing four times and convey nothing.
 *
 * Only opacity is animated, so the browser can composite it on the GPU and the
 * transition costs nothing on the main thread. All four images are in the DOM
 * from the start; the first is priority and carries the largest contentful
 * paint, the rest load lazily.
 */
export default function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [reduced, setReduced] = useState(false);
    const hoveredRef = useRef(false);

    // Resolved after mount. Reading matchMedia during render would make the
    // server and the client disagree about what to draw.
    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        const apply = () => setReduced(query.matches);
        apply();
        query.addEventListener("change", apply);
        return () => query.removeEventListener("change", apply);
    }, []);

    const advance = useCallback(() => {
        setIndex((current) => (current + 1) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        if (reduced || paused || slides.length < 2) return;

        const timer = window.setInterval(() => {
            if (!hoveredRef.current) advance();
        }, INTERVAL_MS);

        return () => window.clearInterval(timer);
    }, [reduced, paused, advance, slides.length]);

    if (slides.length === 0) return null;

    const active = slides[index];
    const rotating = !reduced && !paused && slides.length > 1;

    return (
        <figure
            className="relative"
            onMouseEnter={() => { hoveredRef.current = true; }}
            onMouseLeave={() => { hoveredRef.current = false; }}
            onFocusCapture={() => { hoveredRef.current = true; }}
            onBlurCapture={() => { hoveredRef.current = false; }}
        >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-ncit-surface-2">
                {slides.map((slide, slideIndex) => (
                    <Image
                        key={slide.src}
                        src={slide.src}
                        alt={slideIndex === index ? slide.alt : ""}
                        aria-hidden={slideIndex === index ? undefined : true}
                        fill
                        priority={slideIndex === 0}
                        loading={slideIndex === 0 ? undefined : "lazy"}
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className={cn(
                            "object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none",
                            slideIndex === index ? "opacity-100" : "opacity-0",
                        )}
                    />
                ))}
            </div>

            <div className="mt-3 flex items-center justify-between gap-4">
                {/* The caption changes with the slide, so it is announced
                    politely rather than silently swapped. */}
                <figcaption className="ncit-meta min-w-0 truncate text-ncit-ink-3" aria-live="polite">
                    {active.caption}
                </figcaption>

                <div className="flex shrink-0 items-center gap-1">
                    {slides.length > 1 ? (
                        <>
                            <ul className="flex items-center gap-1">
                                {slides.map((slide, slideIndex) => (
                                    <li key={slide.src}>
                                        <button
                                            type="button"
                                            onClick={() => setIndex(slideIndex)}
                                            aria-current={slideIndex === index ? "true" : undefined}
                                            className="inline-flex h-6 w-6 items-center justify-center rounded-full"
                                        >
                                            <span
                                                className={cn(
                                                    "block h-1.5 rounded-full transition-all",
                                                    slideIndex === index
                                                        ? "w-5 bg-ncit-blue"
                                                        : "w-1.5 bg-ncit-line-strong",
                                                )}
                                            />
                                            <span className="sr-only">
                                                Show slide {slideIndex + 1} of {slides.length}: {slide.caption}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {/* Hidden while reduced motion is on: with nothing
                                rotating there is nothing to pause. */}
                            {reduced ? null : (
                                <button
                                    type="button"
                                    onClick={() => setPaused((value) => !value)}
                                    className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-md text-ncit-ink-3 transition-colors hover:bg-ncit-surface hover:text-ncit-ink"
                                >
                                    {rotating ? (
                                        <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                                    ) : (
                                        <Play className="h-3.5 w-3.5" aria-hidden="true" />
                                    )}
                                    <span className="sr-only">
                                        {rotating ? "Pause the slideshow" : "Play the slideshow"}
                                    </span>
                                </button>
                            )}
                        </>
                    ) : null}
                </div>
            </div>
        </figure>
    );
}
