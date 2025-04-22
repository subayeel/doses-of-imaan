/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Dot,
  Book,
  Tally1,
  User,
  HandHeart,
  TreePalm,
  Leaf,
  ChartNoAxesCombined,
  ShieldCheck,
  Settings,
  ChevronUp,
  MessageCircle,
  Home,
  Feather,
  Brain,
  Egg,
  Sparkle,
  WholeWord,
  MessageCircleWarning,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const SidebarComponent = () => {
  const [currentPath, setCurrentPath] = useState("");
  // Set the current path when component mounts
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Menu items.
  const primaryDose = [
    {
      title: "God's Existence",
      url: "/primary/god",
      icon: Dot,
    },
    {
      title: "Oneness of God",
      url: "/primary/oneness",
      icon: Tally1,
    },
    {
      title: "Revelation from God",
      url: "/primary/revelation",
      icon: MessageCircle,
    },
    {
      title: "Quran",
      url: "/primary/quran",
      icon: Book,
    },
    {
      title: "Prophethood",
      url: "/primary/prophethood",
      icon: User,
    },
  ];

  const religionDose = [
    {
      title: "Islam",
      url: "/religion/islam",
      icon: TreePalm,
    },
    {
      title: "Imaan",
      url: "/religion/imaan",
      icon: Leaf,
    },
    {
      title: "Ihsaan",
      url: "/religion/ihsaan",
      icon: HandHeart,
    },
  ];

  const selfHelp = [
    {
      title: "Diagnose your Imaan",
      url: "/self-help/diagnosis",
      icon: ShieldCheck,
    },
    {
      title: "Quick Recovery of Imaan",
      url: "/self-help/quick-recovery",
      icon: ChartNoAxesCombined,
    },

    {
      title: "Stories of Reverts",
      url: "/revert-stories",
      icon: Feather,
    },

    {
      title: "Dissolve your Bias",
      url: "/dissolving-bias",
      icon: Brain,
    },

    {
      title: "Learn Salah",
      url: "/self-help/learn-salah",
      icon: Egg,
    },
    {
      title: "Keywords",
      url: "/self-help/keywords",
      icon: WholeWord,
    },
    {
      title: "Modern Problems",
      url: "/self-help/modern-problem",
      icon: MessageCircleWarning,
    },
    {
      title: "Learn Quran",
      url: "/self-help/learn-quran",
      icon: Book,
    },
    {
      title: "Hifz Quran Guide",
      url: "/self-help/hifz",
      icon: Book,
    },
    {
      title: "Learn Arabic",
      url: "/self-help/learn-arabic",
      icon: Sparkle,
    },
  ];

  // Function to determine if a link is currently active
  const isActive = (url: string) => {
    return currentPath === url;
  };

  // Custom menu item component with active state highlighting
  interface MenuItemProps {
    item: {
      title: string;
      url: string;
      icon: React.ComponentType;
    };
  }

  const MenuItemWithActiveState: React.FC<MenuItemProps> = ({ item }) => {
    const active = isActive(item.url);
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          className={
            active
              ? "relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-sm bg-primary/10"
              : ""
          }
        >
          <a href={item.url}>
            <item.icon />
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex gap-4 items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Brand logo"
                width={32}
                height={32}
                className="object-contain"
              />{" "}
            </Link>
            <div className="text-core flex flex-col font-semibold text-lg leading-3">
              <span className="tracking-wide text-lg m-0">Spiritual Doses</span>
            </div>
            <ModeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={
                    isActive("/")
                      ? "relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-r-sm bg-muted"
                      : ""
                  }
                >
                  <a href="/">
                    <Home size={16} />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Primary Dose</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {primaryDose.map((item) => (
                <MenuItemWithActiveState key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Religion Dose</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {religionDose.map((item) => (
                <MenuItemWithActiveState key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Self-Help</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {selfHelp.map((item) => (
                <MenuItemWithActiveState key={item.title} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Settings /> Settings
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/privacy-policy">Privacy & Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/about-us">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/contact-us">Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarComponent;
