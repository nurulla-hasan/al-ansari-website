"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; 

const AboutPageButtons = () => {
    const [activeButton, setActiveButton] = useState("");

    useEffect(() => {
        const path = window.location.pathname;
        if (path.includes("/awards")) {
            setActiveButton("Awards");
        } else if (path.includes("/csr")) {
            setActiveButton("CSR");
        } else {
            setActiveButton("About Us"); 
        }
    }, []);

    const buttonClass = (buttonName) => `
        md:px-4 md:py-2 px-2 py-1 rounded-md font-medium md:text-sm text-xs transition-colors duration-200 cursor-pointer backdrop-blur-sm
        ${activeButton === buttonName
            ? "bg-btn-bg text-white"
            : "bg-transparent text-btn-bg border border-btn-bg"
        }
    `;

    return (
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Link
                href="/about"
                className={buttonClass("About Us")}
                onClick={() => setActiveButton("About Us")}
            >
                About Us
            </Link>

            <Link
                href="/about/awards"
                className={buttonClass("Awards")}
                onClick={() => setActiveButton("Awards")}
            >
                Awards
            </Link>

            <Link
                href="/about/csr"
                className={buttonClass("CSR")}
                onClick={() => setActiveButton("CSR")}
            >
                CSR
            </Link>
        </div>
    );
};

export default AboutPageButtons;