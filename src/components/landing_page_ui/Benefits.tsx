import { BenefitColumn } from "@/components/hooks/benefitsColumn";
import { Building, UserCheck } from "lucide-react";

export function Benefits(){
    return (
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Benefits for Everyone
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <BenefitColumn
                title="For Companies"
                icon={<Building className="h-12 w-12 text-primary" />}
                benefits={[
                  "Increase productivity by reducing manual scheduling tasks",
                  "Improve resource allocation and team management",
                  "Reduce no-shows with automated reminders"
                ]}
              />
              <BenefitColumn
                title="For Clients"
                icon={<UserCheck className="h-12 w-12 text-primary" />}
                benefits={[
                  "Convenient 24/7 self-service booking",
                  "Easy rescheduling and cancellation options",
                  "Receive timely reminders about appointments"
                ]}
              />
            </div>
          </div>
        </section>
    )
}