"use client";

import React from "react";
import {
  DollarSign,
  ShoppingCart,
  Users,
  ShoppingBag,
} from "lucide-react";

type Stat = {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
};

export default function DashboardCard() {
  const stats: Stat[] = [
    {
      title: "Total Revenue",
      value: "$51,250",
      change: "+10%",
      icon: <DollarSign className="w-6 h-6" />,
      color: "text-green-500",
    },
    {
      title: "Total Order",
      value: "51,250",
      change: "+10%",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "text-blue-500",
    },
    {
      title: "Total Customers",
      value: "2,550",
      change: "+10%",
      icon: <Users className="w-6 h-6" />,
      color: "text-gray-500",
    },
    {
      title: "Account",
      value: "25",
      change: "+10%",
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl border border-[#FAB8BC] flex flex-col items-start"
        >
          <div className="flex items-center gap-3">
            <div className={`${stat.color}`}>{stat.icon}</div>
            <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
          </div>
          <p className="text-[32px] font-semibold leading-[120%] mt-3">{stat.value}</p>
          <p className="text-xs text-green-500 mt-1">
            {stat.change} in last 100 days
          </p>
        </div>
      ))}
    </div>
  );
}
