"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Edit2 } from "lucide-react";

export default function EditProductPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
        title="Dashboard"
        breadcrumb="Dashboard > Categories > Edit Product"
        btnLink="/dashboard/category/add"
        btnText="Edit Category"
        icon={Edit2}
      />
    </div>
  );
}
