import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import SocialNetworkIcon from "../SocialNetworkIcon";
import FooterItem from "./FooterItem";
import Link from "next/link";

export default function Footer() {
    const actualYear = new Date().getFullYear();

    return (
        <footer className="bg-(--bg-color) p-4 mt-48">
            <section className="max-w-7xl m-auto flex flex-col gap-8 py-16">
                <article className="flex justify-between items-center lg:gap-10 max-lg:gap-4 max-lg:flex-col">
                    <Image
                        src="/img/logo-footer.png"
                        alt="Logo ManagerLab"
                        width={600}
                        height={300}
                    />
                    <h2 className="md:text-[40px] max-md:text-[30px] text-white max-md:text-center">Now you can focus in your business</h2>
                </article>
                <section className="flex justify-center lg:gap-28 max-lg:gap-12 max-lg:flex-col max-lg:items-center">
                    <FooterItem
                        title="MANAGERLAB OÜ"
                    >
                        <p className="max-lg:text-center">Registry code: 17301987 </p>
                    </FooterItem>
                    <FooterItem
                        title="Location"
                    >
                        <address>
                            <p>Harju maakond, Tallinn,</p>
                            <p>Lasnamäe linnaosa,</p>
                            <p>Lõõtsa tn 5, 11415,</p>
                            <p>Estonia</p>
                        </address>
                    </FooterItem>
                    <FooterItem
                        title="Inquiry"
                    >
                        <p className="max-lg:text-center">hello@managerlab.net</p>
                        <ul className="max-lg:text-center">
                            <li><Link href="/terms" className="underline">Terms & Conditions</Link></li>
                            <li><Link href="/refund-policy" className="underline">Refund & Cancellation Policy</Link></li>
                            <li><Link href="/privacy-policy" className="underline">Privacy Policy</Link></li>
                        </ul>
                        <article className="flex max-lg:flex-col justify-center items-center lg:gap-x-8 max-lg:gap-y-4 mt-4">
                            <Image
                                className="max-w-28 object-contain"
                                src="/img/visa.png"
                                alt="VISA Logo"
                                width={300}
                                height={40}
                            />
                            <Image
                                className="max-w-16"
                                src="/img/mastercard.svg"
                                alt="MasterCard Logo"
                                width={100}
                                height={40}
                            />
                        </article>
                    </FooterItem>
                    <FooterItem
                        title="Social Networks"
                    >
                        <div className="flex flex-wrap gap-2 w-40 max-md:justify-center">
                            <SocialNetworkIcon
                                icon={<FaInstagram />}
                                href="https://www.instagram.com/managerlab_ee"
                            />
                            <SocialNetworkIcon
                                icon={<FaLinkedin />}
                                href="https://www.linkedin.com/company/managerlabmarketing/about/?viewAsMember=true"
                            />
                        </div>
                    </FooterItem>
                </section>
                <article className="border-t border-white/15 pt-8">
                    <p className="text-[var(--color-surface)] text-sm max-md:text-center">© {actualYear} <span className="text-white">MANAGERLAB OÜ</span>. All rights reserved.</p>
                </article>
            </section>
        </footer>
    );
}