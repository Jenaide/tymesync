import { FeatureCard } from "@/components/hooks/featureCard";
import { Building, Clock, Users } from "lucide-react";



export function Features(){
    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Powerful Features for Effortless Scheduling
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={<Clock className="h-12 w-12 text-primary" />}
                    title="24/7 Online Booking"
                    description="Allow clients to book appointments anytime, anywhere, reducing scheduling conflicts and missed opportunities."
                />
                <FeatureCard
                    icon={<Users className="h-12 w-12 text-primary" />}
                    title="Team Scheduling"
                    description="Easily manage multiple team members' schedules, assign appointments, and balance workloads efficiently."
                />
                <FeatureCard
                    icon={<Building className="h-12 w-12 text-primary" />}
                    title="Multi-Location Support"
                    description="Manage appointments across multiple locations or branches with location-specific availability and services."
                />
                </div>
            </div>
        </section>
    )
}