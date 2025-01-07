import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function JoinUsSection(){
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-purple-600/10 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Ready to Streamline Your Scheduling?
                    </h2>
                    <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-2xl/relaxed dark:text-gray-300">
                    Join thousands of satisfied businesses and start optimizing your scheduling process today.
                    </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                    <form className="flex space-x-2">
                    <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                    <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                        Get Started
                    </Button>
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}