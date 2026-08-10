import { Metadata } from "next";
import MaintenanceScreen from "@/components/ui/maintenance-screen";

export const metadata: Metadata = {
  title: "Apply for Membership | NCIT",
  description: "Complete your NCIT membership application online.",
};

export default function ApplyPage() {
  return (
    <MaintenanceScreen 
      title="Application Portal Coming Soon" 
      description="We are finalizing our new secure membership application system. In the meantime, please contact the Secretariat for application forms."
    />
  );
}
