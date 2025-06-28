"use client"

import { useForm } from "react-hook-form"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import PageLayout from "@/components/layout/PageLayout"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const onSubmit = (data) => {
        console.log("Newsletter subscription:", data.email)
        reset()
    }

    const informationLinks = [
        { name: "About Us", href: "/about" },
        { name: "Awards", href: "/awards" },
        { name: "CSR", href: "/csr" },
        { name: "Careers", href: "/careers" },
    ]

    const expertiseLinks = [
        { name: "People", href: "/people" },
        { name: "Sectors", href: "/sectors" },
        { name: "Insights", href: "/insights" },
    ]

    const contactLinks = [
        { name: "Latest News", href: "/news" },
        { name: "Upcoming Events", href: "/events" },
        { name: "Newsletters", href: "/newsletters" },
        { name: "Contact", href: "/contact" },
    ]

    const legalLinks = [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Fraud Alert", href: "/fraud-alert" },
        { name: "Disclaimer", href: "/disclaimer" },
    ]

    return (
        <footer className="relative">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/footer-bg.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/80 bg-opacity-80"></div>
            </div>

            <div className="relative z-10">
                {/* Newsletter Section */}
                <div className="py-8 md:py-16 max-w-7xl mx-auto">
                    <div className="max-w-7xl mx-auto ">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl lg:text-4xl font-semibold text-white font-poltawski">Subscribe to our Newsletter</h3>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto px-4 md:px-0">
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        placeholder="Your email"
                                        className="px-4 py-3 rounded-md bg-gray-200 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-80 transition-all duration-300"
                                    />
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-700"></div>
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto py-10 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-18 ">
                        {/* Logo and Social Media */}
                        <div className="flex flex-col justify-center items-start gap-6 px-5 md:px-0">
                            {/* div */}
                            <div className="ml-3">
                                <Image
                                    src="/assets/footer-logo.svg"
                                    alt="Al-Ansari & Associates Logo"
                                    className="object-cover"
                                    width={150}
                                    height={150}
                                />
                            </div>

                            <div>
                                <h4 className="text-white text-sm text-center font-medium mb-4">Find Us On</h4>
                                <div className="flex space-x-4">
                                    <Link
                                        href="#"
                                        className="w-8 h-8 border border-btn-bg rounded-full flex items-center justify-center hover:bg-btn-bg/50 transition-colors"
                                    >
                                        <Facebook className="w-4 h-4 text-btn-bg" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-8 h-8 border border-btn-bg rounded-full flex items-center justify-center hover:bg-btn-bg/50 transition-colors"
                                    >
                                        <Twitter className="w-4 h-4 text-btn-bg" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-8 h-8 border border-btn-bg rounded-full flex items-center justify-center hover:bg-btn-bg/50 transition-colors"
                                    >
                                        <Instagram className="w-4 h-4 text-btn-bg" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-8 h-8 border border-btn-bg rounded-full flex items-center justify-center hover:bg-btn-bg/50 transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4 text-btn-bg" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Information */}
                        <div className="px-5 md:px-0">
                            <h4 className="text-white font-semibold text-lg mb-4">Information</h4>
                            <ul className="space-y-3">
                                {informationLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Expertise */}
                        <div className="px-5 md:px-0">
                            <h4 className="text-white font-semibold text-lg mb-4">Our Expertise</h4>
                            <ul className="space-y-3">
                                {expertiseLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Update */}
                        <div className="px-5 md:px-0">
                            <h4 className="text-white font-semibold text-lg mb-4">Contact & Update</h4>
                            <ul className="space-y-3">
                                {contactLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700"></div>
                {/* Bottom Footer */}
                <div className="max-w-7xl mx-auto px-2 md:px-0">
                    <div className="py-5 md:py-10">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                            <div className="flex flex-wrap gap-6">
                                {legalLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="text-gray-400 text-sm">Copyright © 2025 Al-Ansari & Associates.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
