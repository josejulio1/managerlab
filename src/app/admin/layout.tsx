'use client';

import { ReactNode } from "react";
import Panel from "./components/panel/Panel";
import Toast from "../components/toast/Toast";
import ButtonHidePanel from "./components/panel/ButtonHidePanel";
import { AdminProvider } from "@/context/admin.context";

interface Props {
    children: ReactNode[]
}

export default function AdminLayout({ children }: Props) {
    return (
        <AdminProvider>
            <Toast />
            <main className="flex h-dvh p-2">
                <Panel />
                <section className="p-4 w-full max-w-6xl mx-auto flex flex-col gap-4">
                    {children}
                </section>
            </main>
            <ButtonHidePanel />
        </AdminProvider>
    );
}