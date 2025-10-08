'use client';

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <section className="max-w-7xl m-auto xl:grid xl:grid-cols-2 xl:h-[820px] items-center">
            <motion.article
                className="flex flex-col gap-4 max-xl:text-center max-xl:h-[38dvh] max-xl:pt-36"
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: .5 }
                }}
            >
                <h1 className="text-white text-[64px] font-medium text-base/tight max-md:text-[30px]">Grow your creative brand with a team that gets you</h1>
                <p className="md:text-base max-md:text-sm text-[var(--color-surface)]">We&apos;ll handle the strategy so you can focus on creating</p>
            </motion.article>
            <Image
                className="max-xl:hidden"
                src="/img/manager3.png"
                alt="Manager"
                width={1000}
                height={0}
            />
        </section>
    );
}