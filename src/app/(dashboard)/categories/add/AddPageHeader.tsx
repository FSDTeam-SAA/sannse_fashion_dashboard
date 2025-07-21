import PageHeader from "@/components/pageHeader/PageHeader";

export default function AddPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader title="Dashboard" breadcrumb="Dashboard > Categories > Add Category " btn="Add Category" />
      {/* Rest of your page content */}
    </div>
  );
}