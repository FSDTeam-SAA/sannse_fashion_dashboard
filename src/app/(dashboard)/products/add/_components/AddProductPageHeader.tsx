"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Plus } from "lucide-react";

export default function AddProductPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
              title="Dashboard"
              breadcrumb="Dashboard > Products"
              btnLink="/products/add"
              btnText="Add Product"
              icon={Plus}
            />
    </div>
  );
}
