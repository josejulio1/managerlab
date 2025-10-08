'use client';

import Header from "@/components/Header";
import Input from "../../components/form/items/Input";
import Footer from "@/components/footer/Footer";
import { FormProvider, useForm } from "react-hook-form";
import { contactFormSchema } from "./schemas/contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "@/components/form/items/TextArea";
import { sendTelegram } from "./actions/action";
import Form from "@/components/form/Form";
import SweetAlert from "@/lib/sweetalert";

export default function ContactPage() {
    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    });

    return (
        <>
            <Header />
            <main className="max-w-7xl m-auto lg:grid lg:grid-cols-2 lg:gap-48 lg:py-56 max-lg:py-12 max-lg:flex max-lg:flex-col max-lg:gap-12 max-lg items-center p-4">
                <section className="text-5xl flex flex-col gap-2 max-lg:text-center">
                    <article>
                        <h2 className="md:text-5xl max-md:text-[30px] text-white uppercase font-medium">Let&apos;s Connect!</h2>
                        <h2 className="md:text-5xl max-md:text-[30px] text-white uppercase font-extralight"><span className="font-medium">We&apos;re here</span> to help</h2>
                    </article>
                    <p className="text-base text-[var(--color-surface)]">If you want to work with us or just need some advice, we&apos;re always happy to help. Let&apos;s have a great conversation!</p>
                </section>
                <FormProvider {...form}>
                    <Form
                        submitButtonText="Send"
                        handleRouteBack={false}
                        serverAction={sendTelegram}
                        handlers={{
                            onSuccess: ({ title, content }) => {
                                SweetAlert({
                                    title,
                                    text: content,
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                });
                            },
                            onFailure: error => {
                                SweetAlert({
                                    title: 'Oops!',
                                    text: error,
                                    icon: 'error',
                                    confirmButtonText: 'Ok'
                                });
                            }
                        }}
                    >
                        <section className="flex md:gap-8 max-md:gap-4 max-md:flex-col">
                            <Input
                                type="text"
                                placeholder="Name"
                                name="name"
                                autoComplete="name"
                            />
                            <Input
                                type="email"
                                placeholder="Email"
                                name="email"
                                autoComplete="email"
                            />
                        </section>
                        <Input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            autoComplete="off"
                        />
                        <TextArea
                            name="message"
                            placeholder="Message"
                            rows={5}
                        />
                    </Form>
                </FormProvider>
            </main>
            <Footer />
        </>
    );
}