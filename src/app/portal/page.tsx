import type { Metadata } from "next";
import MaintenanceScreen from "@/components/ui/maintenance-screen";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Member Portal",
  socialTitle: "Member Portal",
  description: "The NCIT member portal for applications, invoices and member records. Sign in with the credentials issued by the chamber.",
  path: "/portal",
  noIndex: true,
});

export default function PortalPage() {
  return (
    <MaintenanceScreen 
      title="Member Portal Update" 
      description="We are currently upgrading our member portal to provide you with enhanced features and a better user experience. Please check back soon." 
    />
  );
}
