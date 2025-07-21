import PageHeader from "@/components/pageHeader/PageHeader";

export default function ProductPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader title="Dashboard" breadcrumb="Dashboard > Products" btn="Add Product" />
      {/* Rest of your page content */}
    </div>
  );
}