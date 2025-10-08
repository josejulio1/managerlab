'use client';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Customer } from "../../../generated/prisma";
import Image from "next/image";
import '@splidejs/splide/dist/css/splide.min.css';

interface Props {
    customers: Pick<Customer, 'id' | 'name' | 'image'>[]
}

export function CustomerImages({ customers }: Props) {
    return (
        <Splide
            options={{
                type: 'loop',
                perPage: 5,
                autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    rewind: true,
                    speed: .3
                },
                arrows: false,
                pagination: false,
                gap: 200,
                breakpoints: {
                    1200: {
                        perPage: 4
                    },
                    992: {
                        perPage: 3
                    },
                    768: {
                        perPage: 2
                    },
                    640: {
                        perPage: 1,
                        gap: 24,
                        fixedWidth: '100px'
                    }
                }
            }}
            extensions={{ AutoScroll }}
        >
            {
                customers.map(({ id, name, image }) => (
                    <SplideSlide key={id}>
                        <Image
                            src={`/api/uploads/customers/${image}`}
                            alt={name}
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </SplideSlide>
                ))
            }
        </Splide>
    );
}