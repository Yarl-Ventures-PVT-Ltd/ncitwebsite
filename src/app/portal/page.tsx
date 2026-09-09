import MaintenanceScreen from "@/components/ui/maintenance-screen";

export const metadata = {
  title: 'Member Portal | NCIT',
  description: 'Login to the Northern Chamber of Information Technology member portal.',
};

export default function PortalPage() {
  return (
    <MaintenanceScreen 
      title="Member Portal Update" 
      description="We are currently upgrading our member portal to provide you with enhanced features and a better user experience. Please check back soon." 
    />
  );
}
