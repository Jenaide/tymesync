import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface PricingCardProps{
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    price: string;
    highlighted?: boolean;
  }
  
export function PricingCard({ title, price, description, features, highlighted = false }: PricingCardProps) {
    return (
        <Card className={`overflow-hidden transition-all ${
            highlighted ? 'border-primary shadow-lg scale-105' : 'hover:shadow-md'
        }`}>
            <CardHeader className={`p-6 ${highlighted ? 'bg-primary text-white' : ''}`}>
            <CardTitle className={`text-2xl font-bold ${highlighted ? 'text-white' : 'text-primary'}`}>
                {title}
            </CardTitle>
            <div className={`text-4xl font-bold mt-2 ${
                highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
            }`}>
                {price}
                {price !== "Custom" && <span className="text-lg font-normal">/month</span>}
            </div>
            <p className={`text-sm mt-2 ${
                highlighted ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
            }`}>
                {description}
            </p>
            </CardHeader>
            <CardContent className="p-6">
            <ul className="space-y-4">
                {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
                ))}
            </ul>
            <Button className={`w-full mt-6 ${
                highlighted
                ? 'bg-white text-primary hover:bg-gray-100'
                : 'bg-primary text-white hover:bg-primary/90'
            }`}>
                Choose Plan
            </Button>
            </CardContent>
        </Card>
    )
  }