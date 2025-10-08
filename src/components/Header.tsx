'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";

interface Path {
    name: string
    href: string
}

const paths: Path[] = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Services',
        href: '/services'
    },
    {
        name: 'Blog',
        href: '/blogs'
    }
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="max-w-7xl m-auto flex justify-between items-center sticky top-0 bg-[var(--theme-color)] p-4 rounded-b-4xl z-10 md:gap-4">
            <section className="flex items-center w-full md:gap-8 max-md:gap-4 max-md:flex-col">
                <Link href="/">
                    <Image
                        src="/img/logo.png"
                        alt="Logo ManagerLab"
                        width={250}
                        height={60}
                    />
                </Link>
                <nav className="border border-white/30 rounded-3xl p-1 flex gap-2">
                    {
                        paths.map(({ name, href }) => (
                            <Link
                                key={name}
                                href={href}
                                className={`px-4 py-1 rounded-3xl text-sm font-normal text-white transition hover:bg-[var(--main-color)] ${pathname === href ? 'bg-white/10' : ''}`}
                            >
                                {name}
                            </Link>
                        ))
                    }
                </nav>
            </section>
            {
                pathname !== '/contact' && (
                    <Link href="/contact" className="text-sm font-medium flex gap-2 items-center bg-white px-5 py-1 rounded-3xl shrink-0 max-md:fixed max-md:bottom-8 max-md:left-6/12 max-md:-translate-6/12">
                        <p>Contact Us</p>
                        <GoArrowUpRight size={25} />
                    </Link>
                )
            }
        </header>
    );
}