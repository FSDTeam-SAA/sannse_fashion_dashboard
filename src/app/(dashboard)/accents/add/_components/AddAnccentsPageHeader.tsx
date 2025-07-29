"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Plus } from "lucide-react";

export default function AddAnccentsPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
        title="Dashboard"
        breadcrumb="Dashboard > Accents > Add Anccents"
        btnLink="/accents/add"
        btnText="Add Accents"
        icon={Plus}
      />
    </div>
  );
}
