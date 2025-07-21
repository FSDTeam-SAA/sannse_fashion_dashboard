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
  User,
  Settings,
  LogOut,
  Mails,
  Reply,
  // Bell,
} from "lucide-react";
import Image from "next/image";
import logoImage from "@/public/images/logo.svg";
// import { signOut } from "next-auth/react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Practice Areas", href: "/practice-area", icon: Tag },
  { name: "Resource Types", href: "/resource-type", icon: Tag },
  { name: "Promo Code", href: "/promo-code", icon: Ticket },
  { name: "Resource List", href: "/resource-list", icon: List },
  { name: "Request Resource", href: "/request-resource", icon: FileText },
  // { name: "Message", href: "/message", icon: MessageSquare },
  { name: "My Sales", href: "/my-sales", icon: TrendingUp },
  {
    name: "Revenue from Seller",
    href: "/revenue-from-seller",
    icon: DollarSign,
  },
  { name: "Blog Management", href: "/blog-management", icon: FileText },
  { name: "Seller Profile", href: "/seller-profile", icon: User },
  { name: "User Profile", href: "/user-profile", icon: User },
  { name: "NewsLetter", href: "/news-letter", icon: Mails },
  { name: "Setting", href: "/setting", icon: Settings },
  { name: "Reply To Question", href: "/reply-to-question", icon: Reply },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen sticky bottom-0 top-0 w-[350px] flex-col bg-[#212121] z-50">
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
      <nav className="flex-1 space-y-2 px-3 py-4 overflow-hidden bg-black text-white">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                isActive
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
              )}
            >
              <div className="">
                <div>
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                </div>
                <div>
                  <span>{item.name}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </nav>
      {/* Logout */}
      <div className="p-3 cursor-pointer">
        <p className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-600 hover:text-white">
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </p>
      </div>
    </div>
  );
}
