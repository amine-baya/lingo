"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    label: string;
    iconSrc?: string;
    href: string
}

export const SideBarItem = ({
    label,
    iconSrc,
    href,
}: Props) => {
    const pathname = usePathname()
    const active = pathname === href
    return (
        <Button variant={active ? "sidebarOutline" : "sidebar"}
                className="justify-start h-[52px]"
                asChild
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}