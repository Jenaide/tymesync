"use client"
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection(){
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto">
                <div className="flex flex-col items-center space-y-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2"
                >
                    <h1 className="text-4xl font-sans font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Streamline Your Scheduling with TymeSync
                    </h1>
                    <p className="font-sans mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-2xl/relaxed xl:text-3xl/relaxed dark:text-gray-300">
                    Effortlessly manage appointments, boost productivity, and enhance client satisfaction.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-x-4"
                >
                    <Button size="lg" className="bg-primary font-sans hover:bg-primary/90 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="font-sans border-primary text-primary hover:bg-primary/10">
                    Learn More
                    </Button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}