import PageHeader from "@/components/pageHeader/PageHeader";

export default function DashboardHeader() {
  return (
    <div className="mb-10">
      <PageHeader title="Dashboard" breadcrumb="Welcome back to your admin panel" btn="Add Category" />
      {/* Rest of your page content */}
    </div>
  );
}