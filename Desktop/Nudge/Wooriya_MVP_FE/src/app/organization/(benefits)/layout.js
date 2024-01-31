"use client";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/navbar/Navbar";
export default function OrganizationLayout(props) {
    return (
        <div style={{padding: '2rem 14.5vw'}}>
            <Navbar />
            <Sidebar />
            <div style={{ marginTop: "6.125rem", marginLeft: "13vw" }}>
                {props.children}
            </div>
        </div>
    );
}
