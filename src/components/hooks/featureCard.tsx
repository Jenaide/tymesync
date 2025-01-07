import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeaturedCardProps{
    icon: React.ReactNode;
    title: string;
    description: string
  }
  
export function FeatureCard({ icon, title, description }: FeaturedCardProps) {
    return (
      <Card className="overflow-hidden transition-all hover:shadow-lg group">
        <CardHeader className="p-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              {icon}
            </div>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
        </CardContent>
      </Card>
    )
  }