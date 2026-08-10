import { Metadata } from "next";
import MaintenanceScreen from "@/components/ui/maintenance-screen";

export const metadata: Metadata = {
  title: "Member Login | NCIT",
  description: "Login to the NCIT Member Portal.",
};

export default function LoginPage() {
  return (
    <MaintenanceScreen 
      title="Member Login Coming Soon" 
      description="We are building a new digital experience for our members. The portal will launch soon with new networking and resource features."
    />
  );
}
