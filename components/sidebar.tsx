import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton
} from "@clerk/nextjs"
import {Loader} from'lucide-react'
import { SideBarItem } from "./sidebar-item";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href='learn'>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lingo</h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SideBarItem label="Learn" href='/learn' />
        <SideBarItem label="Leaderboard" href='/leaderboard' />
        <SideBarItem label="quests" href='/quests' />
        <SideBarItem label="shop" href='/shop' />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>

    </div>
  );
};
