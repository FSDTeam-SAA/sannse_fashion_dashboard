"use client";

import PageHeader from "@/components/pageHeader/PageHeader";
import { Edit2 } from "lucide-react";

export default function EditAccentPageHeader() {
  return (
    <div className="mb-10">
      <PageHeader
        title="Dashboard"
        breadcrumb="Dashboard > Accents > Edit Anccents"
        btnLink="/accents/edit"
        btnText="Edit Accents"
        icon={Edit2}
      />
    </div>
  );
}
