"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Plus } from "lucide-react";

export default function CategoryPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
        title="Dashboard"
        breadcrumb="Dashboard > Style > Add Style"
        btnLink="/style/add"
        btnText="Add Style"
        icon={Plus}
      />
    </div>
  );
}
