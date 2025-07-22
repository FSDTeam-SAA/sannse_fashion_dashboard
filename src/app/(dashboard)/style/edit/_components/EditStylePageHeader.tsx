"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Plus } from "lucide-react";

export default function EditStylePageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
        title="Dashboard"
        breadcrumb="Dashboard > Style > Edit Style"
        btnLink="/style/add"
        btnText="Add Style"
        icon={Plus}
      />
    </div>
  );
}
