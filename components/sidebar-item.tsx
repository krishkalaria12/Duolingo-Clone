'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
}

function SidebarItem({
    href, 
    iconSrc,
    label
}: Props) {

    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Button
            className="justify-start h-[52px]"
            variant={!active? "sidebar" : "sidebarOutline"}
        >
            <Link className="w-full flex items-center justify-start" href={href}>
                <Image src={iconSrc} alt={label} height={32} width={32} className="mr-5" />
                {label}
            </Link>
        </Button>
    )
}

export default SidebarItem