'use client';

import { FaCheck } from "react-icons/fa";
import CustomerValorationCard from "./CustomerValorationCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { CustomerValorationDto } from "@/app/adapters/customer-valoration.adapter";

interface Props {
    customersValorations: CustomerValorationDto[]
}

export default function CustomerValorations({ customersValorations }: Props) {
    return (
        <section className="max-w-7xl m-auto flex flex-col gap-8 w-full">
            <article className="flex flex-col gap-2">    
                <h3 className="text-white md:text-[40px] font-medium max-md:text-2xl max-md:text-center">We believe in your success 👇</h3>
                <div className="flex items-center gap-2 max-md:justify-center">
                    <div className="bg-[var(--bg-color)] rounded-full p-2">
                        <FaCheck size={12} color="#FFFFFF" />
                    </div>
                    <p className="text-white">What clients say?</p>
                </div>
            </article>
            <Splide
                options={{
                    type: 'loop',
                    perPage: 2,
                    perMove: 1,
                    autoplay: true,
                    interval: 6000,
                    speed: 1000,
                    arrows: false,
                    pagination: false,
                    gap: 24,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    breakpoints: {
                        768: {
                            perPage: 1
                        }
                    }
                }}
            >
                {
                    customersValorations.map(customerValoration => (
                        <SplideSlide key={customerValoration.id}>
                            <CustomerValorationCard
                                customerValoration={customerValoration}
                            />
                        </SplideSlide>
                    ))
                }
            </Splide>
        </section>
    );
}