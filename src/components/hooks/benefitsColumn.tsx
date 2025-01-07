"use client"
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";


interface BenefitColumnProps{
    icon: React.ReactNode;
    title: string;
    benefits: string[];
}
export function BenefitColumn({ title, icon, benefits }: BenefitColumnProps) {
    return (
      <div className="flex flex-col items-center space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="p-3 rounded-full bg-primary/10">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <ul className="space-y-4 w-full">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    )
  }