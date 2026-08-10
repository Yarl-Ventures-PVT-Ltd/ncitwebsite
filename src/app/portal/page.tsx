import { Metadata } from "next";
import MaintenanceScreen from "@/components/ui/maintenance-screen";

export const metadata: Metadata = {
  title: "Member Portal | NCIT",
  description: "Access the NCIT Member Portal.",
};

export default function PortalPage() {
  return (
    <MaintenanceScreen 
      title="Member Portal Coming Soon" 
      description="We are building a new digital experience for our members. The portal will launch soon with new networking and resource features."
    />
  );
}
