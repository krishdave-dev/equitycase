'use client'
import React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger
} from "@/components/ui/menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = {
  label: string;
  url: string;
};
//Without login 
const menuItems: MenuItem[] = [
  { label: "Home", url: "/" },
  { label: "Strategies", url: "/strategies" },
  { label: "Strategy Builder", url: "/strategy-builder" },
  { label: "About Us", url: "/about-us" },
];

export const NavbarItems = ({navItemsColor}:{navItemsColor:string}) => {

  const pathname = usePathname();

  return (
    <Menubar className={`${navItemsColor} z-40  font-helvetica-neue-roman  font-[400] border-none shadow-none rounded-[81px] flex justify-center gap-19 w-232 h-19`}>
      {menuItems.map((item, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger className="text-2xl hover:text-primary-green-2" asChild>
            <Link href={item.url} >{item.label}</Link>

          </MenubarTrigger>
        </MenubarMenu>
      ))}
    </Menubar>
  );
};
