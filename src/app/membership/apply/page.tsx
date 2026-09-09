import MaintenanceScreen from "@/components/ui/maintenance-screen";

export const metadata = {
  alternates: { canonical: "/membership/apply" },
  title: "Apply for Membership",
  description: 'Apply to join NCIT as a company, professional, startup or student member. See the categories, fees and eligibility before you send an application.',
};

export default function ApplyPage() {
  return (
    <MaintenanceScreen 
      title="Application System Update" 
      description="We are currently upgrading our membership application portal to streamline the onboarding process. Please check back soon or contact us directly if you need immediate assistance." 
    />
  );
}
