'use client';
import Sidenav from '@/app/ui/dashboard/sidenav';
import {Stack} from "@mui/material";
import * as React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <Stack spacing={2}>
                    <Sidenav handleToggle={toggleDrawer}/>
                </Stack>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}