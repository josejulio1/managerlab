import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import SocialNetworkIcon from "../SocialNetworkIcon";
import FooterItem from "./FooterItem";

export default function Footer() {
    const actualYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--bg-color)] p-4 mt-48">
            <section className="max-w-7xl m-auto flex flex-col gap-8 py-16">
                <article className="flex justify-between items-center md:gap-12 max-md:gap-4 max-md:flex-col">
                    <Image
                        src="/img/logo.png"
                        alt="Logo ManagerLab"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '50%', height: 'auto' }}
                    />
                    <h2 className="md:text-[40px] max-md:text-[30px] text-white max-md:text-center">Now you can focus in your business</h2>
                </article>
                <section className="flex justify-end md:gap-28 max-md:gap-12 max-md:flex-col max-md:items-center">
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
                        <p>hello@managerlab.net</p>
                    </FooterItem>
                    <FooterItem
                        title="Social Networks"
                    >
                        <div className="flex flex-wrap gap-2 w-40 max-md:justify-center">
                            <SocialNetworkIcon
                                icon={<FaInstagram />}
                                href="https://instagram.com/evaferiam"
                            />
                            <SocialNetworkIcon
                                icon={<FaLinkedin />}
                                href="https://linkedin.com/in/eva-feria"
                            />
                        </div>
                    </FooterItem>
                </section>
                <article className="border-t border-white/15 pt-8">
                    <p className="text-[var(--color-surface)] text-sm max-md:text-center">© {actualYear} <span className="text-white">ManagerLab</span>. All Right Reserved</p>
                </article>
            </section>
        </footer>
    );
}