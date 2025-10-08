import { Category } from "../../../generated/prisma";
import PurpleLink from "../PurpleLink";
import { Service } from "./Service";

interface Props {
    services: Category[]
}

export default function Services({ services }: Props) {
    return (
        <section className="bg-[var(--bg-color)] rounded-2xl p-8">
            <section className="max-w-7xl m-auto flex flex-col gap-12 items-center">
                <h3 className="text-white text-[60px] font-medium max-lg:text-center max-lg:text-5xl">Services</h3>
                <section className="w-full">
                    {
                        services.map(service => (
                            <Service
                                key={service.id}
                                service={service}
                            />
                        ))
                    }
                </section>
                <PurpleLink
                    text="Learn More"
                    href="/service-details"
                />
            </section>
        </section>
    );
}