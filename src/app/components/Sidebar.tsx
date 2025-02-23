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
  Egg,
  Sparkle,
  Settings,
  ChevronUp,
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
  // const { setTheme } = useTheme();
  // Menu items.
  const primaryDose = [
    {
      title: "God’s Existence",
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
      title: "Ihsaan",
      url: "/religion/ihsaan",
      icon: HandHeart,
    },
    {
      title: "Imaan",
      url: "/religion/imaan",
      icon: Leaf,
    },
  ];

  const selfHelp = [
    {
      title: "Diagnose your Imaan",
      url: "/diagnosis",
      icon: ShieldCheck,
    },
    {
      title: "Quick Recovery of Imaan",
      url: "/quick-recovery",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Learn Salah",
      url: "/learn-salah",
      icon: Egg,
    },
    {
      title: "Learn Quran",
      url: "/learn-quran",
      icon: Book,
    },
    {
      title: "Learn Arabic",
      url: "/learn-arabic",
      icon: Sparkle,
    },
  ];
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
              <span className="tracking-wide text-lg m-0">Doses of Imaan</span>
            </div>
            <ModeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Primary Dose</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {primaryDose.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Religion Dose</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {religionDose.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Self-Help</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {selfHelp.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
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
                <DropdownMenuItem>
                  <span>Privacy & Policy</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>About Us</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Contact Us</span>
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
