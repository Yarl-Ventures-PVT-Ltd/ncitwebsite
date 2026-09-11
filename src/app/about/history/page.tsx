import { Metadata } from "next";
import HistoryTimeline from "@/components/sections/about/timeline";
import PastBoards from "@/components/sections/about/past-boards";
import HistoricGallery from "@/components/sections/about/historic-gallery";
import PageHeader from "@/components/layout/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "History and Archive",
  socialTitle: "History and Archive",
  description: "The chamber's record since its inauguration in Jaffna in February 2016: milestones, past boards, publications and photographs.",
  path: "/about/history",
});

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
