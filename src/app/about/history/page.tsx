import { Metadata } from "next";
import HistoryHero from "@/components/sections/about/history-hero";
import HistoryTimeline from "@/components/sections/about/timeline";
import PastBoards from "@/components/sections/about/past-boards";
import HistoricGallery from "@/components/sections/about/historic-gallery";

export const metadata: Metadata = {
  title: "History & Archive | NCIT",
  description: "Explore the history, past boards, and archive of the Northern Chamber of Information Technology since 2016.",
};

export default function HistoryPage() {
  return (
    <>
      <HistoryHero />
      <HistoryTimeline />
      <PastBoards />
      <HistoricGallery />
    </>
  );
}
