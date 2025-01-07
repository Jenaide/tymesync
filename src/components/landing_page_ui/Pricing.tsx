import { PricingCard } from "@/components/hooks/pricingCard";

export function Pricing(){
    return (
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Choose Your Perfect Plan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingCard
                        title="Basic"
                        price="$29"
                        description="Perfect for small businesses"
                        features={[
                            "Up to 3 team members",
                            "100 monthly bookings",
                            "Email support",
                            "Basic analytics"
                        ]} icon={undefined}                />
                <PricingCard
                        title="Pro"
                        price="$79"
                        description="Ideal for growing teams"
                        features={[
                            "Up to 10 team members",
                            "Unlimited bookings",
                            "Priority support",
                            "Advanced analytics",
                            "Custom branding"
                        ]}
                        highlighted={true} icon={undefined}                />
                <PricingCard
                        title="Enterprise"
                        price="Custom"
                        description="For large organizations"
                        features={[
                            "Unlimited team members",
                            "Unlimited bookings",
                            "24/7 premium support",
                            "Custom integrations",
                            "Dedicated account manager"
                        ]} icon={undefined}                />
                </div>
            </div>
        </section>
    )
}