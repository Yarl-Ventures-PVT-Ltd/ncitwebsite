"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EventsOpportunities() {
  const events = [
    {
      id: 1,
      title: "Northern Tech Investment Summit 2026",
      date: "Oct 12, 2026",
      time: "09:00 AM - 05:00 PM",
      location: "Jaffna Public Library Auditorium",
      type: "Conference",
      color: "from-ncit-blue to-ncit-purple"
    },
    {
      id: 2,
      title: "Startup Incubation Pitch Day",
      date: "Nov 05, 2026",
      time: "02:00 PM - 06:00 PM",
      location: "NCIT Innovation Hub, Kilinochchi",
      type: "Startup",
      color: "from-ncit-purple to-ncit-pink"
    },
    {
      id: 3,
      title: "Cloud Architecture Masterclass",
      date: "Nov 20, 2026",
      time: "10:00 AM - 01:00 PM",
      location: "Virtual / Online",
      type: "Workshop",
      color: "from-ncit-teal to-ncit-blue"
    }
  ];

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-ncit-ink mb-4 font-heading tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-xl text-ncit-ink/70 max-w-2xl font-light">
              Connect, learn, and grow at NCIT&apos;s ecosystem events across the Northern Province.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/events">
              <Button variant="outline" className="glass rounded-full px-6 font-semibold text-ncit-ink">
                View All Events <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-[2rem] p-8 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${event.color} shadow-sm`}>
                  {event.type}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-ncit-ink mb-6 leading-tight group-hover:text-ncit-blue transition-colors">
                {event.title}
              </h3>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-3 text-sm text-ncit-ink/60 font-medium">
                  <Calendar className="w-4 h-4 text-ncit-blue" /> {event.date}
                </div>
                <div className="flex items-center gap-3 text-sm text-ncit-ink/60 font-medium">
                  <Clock className="w-4 h-4 text-ncit-blue" /> {event.time}
                </div>
                <div className="flex items-center gap-3 text-sm text-ncit-ink/60 font-medium">
                  <MapPin className="w-4 h-4 text-ncit-blue" /> {event.location}
                </div>
              </div>

              <Link href={`/events/${event.id}`}>
                <Button className="w-full bg-ncit-ink hover:bg-ncit-blue text-white rounded-xl shadow-md transition-colors h-12">
                  Register Now
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
