'use client';

import PurpleLink from "@/components/PurpleLink";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Description() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-200px' });

    return (
        <section className="max-w-7xl m-auto lg:grid lg:grid-cols-[1fr_2fr] items-center text-white gap-48">
            <Image
                ref={ref}
                className="object-contain max-lg:hidden"
                src="/img/manager.png"
                alt="ManagerLab"
                width={0}
                height={0}
                sizes="100vw"
            />
            <motion.article
                ref={ref}
                className="flex flex-col items-start gap-4 max-lg:items-center"
                initial={{ opacity: 0, y: -100 }}
                animate={
                    isInView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: { duration: .5, delay: .2 }
                        }
                        : {}
                }
            >
                <h2
                    className="text-[40px]/14 font-medium max-lg:text-2xl/8 max-lg:text-center"
                >
                    What started as a passion for artists growth has evolved into helping established creative brands amplify their reach and impact through marketing that is as bold as their vision. We believe in the balance between strategy and creativity. Our approach is personalized, because we understand that not every brand is the same.
                </h2>
                <PurpleLink
                    text="More about us"
                    href="/about"
                />
            </motion.article>
        </section>
    );
}