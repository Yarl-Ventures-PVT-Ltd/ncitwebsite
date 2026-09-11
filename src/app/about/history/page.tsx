import { Metadata } from "next";
import HistoryTimeline from "@/components/sections/about/timeline";
import PastBoards from "@/components/sections/about/past-boards";
import HistoricGallery from "@/components/sections/about/historic-gallery";
import PageHeader from "@/components/layout/page-header";

export const metadata: Metadata = {
  alternates: { canonical: "/about/history" },
  title: "History & Archive",
  description: "Explore the history, past boards, and archive of the Northern Chamber of Information Technology since 2016.",
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        title="A Decade of Building the Northern Technology Ecosystem."
        lede="The chamber’s archive records its growth, partnerships, startup activity, regional programmes and international engagement since 2016."
        crumbs={[{ name: "About", path: "/about" }, { name: "Our history", path: "/about/history" }]}
      />
      <HistoryTimeline />
      <PastBoards />
      <HistoricGallery />
    </>
  );
}
