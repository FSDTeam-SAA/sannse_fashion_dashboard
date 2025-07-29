"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Edit2 } from "lucide-react";

export default function EditFabricPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
        title="Dashboard"
        breadcrumb="Dashboard > Fabrics > Edit Fabrics"
        btnLink="/fabric/add"
        btnText="Edit Fabric"
        icon={Edit2}
      />
    </div>
  );
}
