"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Plus } from "lucide-react";

export default function AccentsPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
        title="Dashboard"
        breadcrumb="Dashboard > Accents"
        btnLink="/accents/add"
        btnText="Add Accents"
        icon={Plus}
      />
    </div>
  );
}
