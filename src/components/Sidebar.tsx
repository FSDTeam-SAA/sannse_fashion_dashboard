"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Tag,
  Ticket,
  List,
  TrendingUp,
  DollarSign,
  FileText,
  LogOut,
  // Bell,
} from "lucide-react";
import Image from "next/image";
import logoImage from "@/public/images/logo.svg";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Categories", href: "/practice-area", icon: Tag },
  { name: "Product", href: "/resource-type", icon: Tag },
  { name: "Order", href: "/promo-code", icon: Ticket },
  { name: "Order", href: "/resource-list", icon: List },
  { name: "Fabric", href: "/request-resource", icon: FileText },
  // { name: "Message", href: "/message", icon: MessageSquare },
  { name: "Style", href: "/my-sales", icon: TrendingUp },
  {
    name: "Accents",
    href: "/revenue-from-seller",
    icon: DollarSign,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen sticky bottom-0 top-0 w-[150px] flex-col bg-[#212121] z-50">
      <div className="h-[80px] px-4 py-3">
        <Image
          src={logoImage}
          alt="Logo"
          width={200}
          height={80}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-3 px-3 overflow-hidden">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors border border-red-700",
                isActive
                  ? "text-yellow-400 hover:bg-slate-600 hover:text-white"
                  : "text-slate-300 hover:bg-slate-600 hover:text-white"
              )}
            >
              <div>
                <div className="flex items-center justify-center">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="mt-2">
                  <span className="font-normal text-base leading-[120%]">
                    {item.name}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 cursor-pointer">
        <p className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-600 hover:text-white">
          <div>
            <div className="flex items-center justify-center">
              <LogOut className="h-5 w-5" />
            </div>
            <div className="mt-2">
              <span className="font-normal text-base leading-[120%]">Log Out</span>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
