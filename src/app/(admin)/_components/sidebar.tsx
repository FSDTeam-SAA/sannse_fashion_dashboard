"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const routes = [
  {
    id: 1,
    label: "Overview",
    href: "/",
  },
  {
    id: 2,
    label: "Categories",
    href: "/categories",
  },
  {
    id: 3,
    label: "Products",
    href: "/products",
  },
  {
    id: 4,
    label: "Orders",
    href: "/orders",
  },
  {
    id: 5,
    label: "Fabrics",
    href: "/fabrics",
  },
  {
    id: 6,
    label: "Disputes",
    href: "/disputes",
  },
  {
    id: 7,
    label: "Accents",
    href: "/accents",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 border-r bg-primary">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="border-none p-6 flex justify-center items-center">
          <div className="relative h-[80px] w-[80px]">
            <Image
              src="https://files.edgestore.dev/2pgl62wxp0dbg019/Dev/_public/276405a7-8be0-4e32-b05c-4d6dfb02d288.svg"
              alt="logo"
              fill
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-auto p-3">
          <ul className="space-y-2">
            {routes.map((route) => {
              const isActive =
                route.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(route.href);

              return (
                <li key={route.id}>
                  <Link
                    href={route.href}
                    className={`flex text-white/80 items-center gap-3 rounded-md px-3 font-light py-2
          ${
            isActive
              ? "bg-white/20 text-primary-foreground"
              : " hover:bg-white/10 hover:text-white/70"
          }
        `}
                  >
                    {/* <Icon className="h-5 w-5" /> */}
                    <span>{route.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className=" p-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full justify-start gap-3 bg-white/10 text-white/80 font-light hover:bg-white/20 hover:text-white">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to sign out?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  You will be logged out of your account and redirected to the
                  homepage. You can sign back in at any time.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={async () => {
                    // await signOut({ redirectTo: "/", redirect: true });
                  }}
                >
                  Sign Out
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
