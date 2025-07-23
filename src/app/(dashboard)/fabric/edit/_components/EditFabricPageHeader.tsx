"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Plus } from "lucide-react";

export default function EditFabricPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
        title="Dashboard"
        breadcrumb="Dashboard > Fabrics > Edit Category"
        btnLink="/fabric/add"
        btnText="Add Fabric"
        icon={Plus}
      />
    </div>
  );
}
