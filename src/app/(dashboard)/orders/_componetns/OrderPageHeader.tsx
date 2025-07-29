"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Plus } from "lucide-react";

export default function OrderPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
        title="Dashboard"
        breadcrumb="Dashboard > Orders"
        // btnLink="/orders/add"
        btnText="Add Accents"
        icon={Plus}
      />
    </div>
  );
}
