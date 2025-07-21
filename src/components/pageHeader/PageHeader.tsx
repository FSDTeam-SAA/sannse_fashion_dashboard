"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type PageHeaderProps = {
  title?: string;
  breadcrumb?: string;
  btn?: React.ReactNode;
};

export default function PageHeader({
  title = "Categories",
  breadcrumb = "Dashboard > Categories",
  btn,
}: PageHeaderProps) {
  return (
    <header className="w-full text-gray-800 py-2 px-4 flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-[32px] font-semibold leading-[120%]">{title}</h1>
        <p className="text-[20px] font-normal leading-[120%]">{breadcrumb}</p>
      </div>
      {btn && (
        <Button className="bg-red-600 text-base leading-[120%] font-medium hover:bg-red-700 text-white px-8 h-[52px] rounded-md">
          {btn}
        </Button>
      )}
    </header>
  );
}
