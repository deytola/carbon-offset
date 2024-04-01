import * as React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../src/theme';
import {ApolloWrapper} from "./ApolloWrapper";
import {StoreProvider} from "@/app/StoreProvider";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Humane",
    description: "Heal the world",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <html lang="en">
            <body className={inter.className} style={{margin: 0, overflowY: 'hidden'}}>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <ApolloWrapper>
                        {children}
                    </ApolloWrapper>
                </ThemeProvider>
            </AppRouterCacheProvider>
            </body>
            </html>
        </StoreProvider>

    );
}
