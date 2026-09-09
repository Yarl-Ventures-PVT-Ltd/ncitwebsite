import MaintenanceScreen from "@/components/ui/maintenance-screen";

export const metadata = {
  alternates: { canonical: "/portal" },
  title: "Member Portal",
  description: 'Login to the Northern Chamber of Information Technology member portal.',
  // A login page has nothing to rank for. noindex keeps it out of results while
  // still allowing the crawl, which is what makes the directive readable at all:
  // a robots.txt block would hide this tag and leave the bare URL indexable.
  robots: { index: false, follow: true },
};

export default function PortalPage() {
  return (
    <MaintenanceScreen 
      title="Member Portal Update" 
      description="We are currently upgrading our member portal to provide you with enhanced features and a better user experience. Please check back soon." 
    />
  );
}
