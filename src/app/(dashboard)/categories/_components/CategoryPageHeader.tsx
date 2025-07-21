import PageHeader from "@/components/pageHeader/PageHeader";

export default function CategoryPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader title="Dashboard" breadcrumb="Dashboard > Categories" btn="Add Category" />
      {/* Rest of your page content */}
    </div>
  );
}