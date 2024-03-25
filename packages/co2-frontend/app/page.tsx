"use client";
import * as React from 'react';
import LoginForm from "@/app/ui/auth/LoginForm";
import ReduxProvider from "@/store/redux-provider";

export default function Page() {
    return (
        <>
            <ReduxProvider>
                <LoginForm />
            </ReduxProvider>
        </>
    );
}