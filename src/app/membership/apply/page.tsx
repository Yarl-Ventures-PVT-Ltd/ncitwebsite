import MaintenanceScreen from "@/components/ui/maintenance-screen";

export const metadata = {
  alternates: { canonical: "/membership/apply" },
  title: "Apply for Membership",
  description: 'Apply for Northern Chamber of Information Technology membership.',
};

export default function ApplyPage() {
  return (
    <MaintenanceScreen 
      title="Application System Update" 
      description="We are currently upgrading our membership application portal to streamline the onboarding process. Please check back soon or contact us directly if you need immediate assistance." 
    />
  );
}
