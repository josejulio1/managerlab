'use client';

import Input from "@/components/form/items/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import { loginSchema } from "./schemas/login.schema";
import Form from "@/components/form/Form";
import { login } from "./actions/action";
import { toast } from "react-toastify";
import Toast from "../components/toast/Toast";

export default function LoginPage() {
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    return (
        <>
            <Toast />
            <section className="flex justify-center items-center h-[90dvh]">
                <section className="max-w-lg m-auto rounded-2xl flex flex-col gap-4">
                    <Image
                        className="p-4"
                        src="/img/logo.png"
                        alt="Logo ManagerLab"
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                    <section className="bg-[var(--bg-color)] rounded-2xl p-8 flex flex-col gap-4">
                        <h3 className="text-white text-4xl text-center font-medium max-lg:text-3xl">Admin Panel</h3>
                        <FormProvider {...form}>
                            <Form
                                submitButtonText="Login"
                                serverAction={login}
                                handlers={{
                                    onFailure: error => {
                                        toast.error(error);
                                    }
                                }}
                            >
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                />
                            </Form>
                        </FormProvider>
                    </section>
                </section>
            </section>
        </>
    );
}