"use client";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout(props) {
    return (
        <html lang="en">
            <body style={{ margin: "-8px" }}>
                <QueryClientProvider client={queryClient}>
                    <Navbar />
                    <div className="contentWrapper">{props.children}</div>
                    <Footer />
                </QueryClientProvider>
                <SpeedInsights />
            </body>
        </html>
    );
}
