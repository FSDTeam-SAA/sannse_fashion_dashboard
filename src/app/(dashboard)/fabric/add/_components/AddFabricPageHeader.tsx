"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Plus } from "lucide-react";

export default function AddFabricPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
              title="Dashboard"
              breadcrumb="Dashboard > Categories > Add Category"
              btnLink="/fabric/add"
              btnText="Add Fabric"
              icon={Plus}
            />
    </div>
  );
}
