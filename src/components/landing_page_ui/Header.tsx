"use client"
import { motion } from "framer-motion";
import { CalendarDays, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export function Header(){

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Features', href: '#features' },
        { name: 'Benefits', href: '#benefits' },
        { name: 'Pricing', href: '#pricing' },
    ]

    return (
        <motion.header
            className={`px-4 lg:px-6 h-16 flex items-center fixed w-full z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-white/20 dark:bg-gray-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
            <div className="container mx-auto flex items-center justify-between">
                <Link className="flex items-center justify-center" href="/">
                <CalendarDays className="h-6 w-6 text-primary" />
                <span className="ml-2 font-sans text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    TimeSync
                </span>
                </Link>
                <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl font-sans font-semibold hover:text-primary transition-colors relative group"
                    >
                    {item.name}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                ))}
                </nav>
                <div className="hidden md:block">
                <Button size="sm" className="bg-primary font-sans hover:bg-primary/90 text-white">
                    <Link href={"/auth/login"}>Get Started</Link>
                </Button>
                </div>
                <button
                className="md:hidden text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <motion.div
                className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                >
                <nav className="flex flex-col space-y-4 px-4">
                    {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.name}
                    </Link>
                    ))}
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-white w-full">
                    Get Started
                    </Button>
                </nav>
                </motion.div>
            )}
        </motion.header>
    )
}