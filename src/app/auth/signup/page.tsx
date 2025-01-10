import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import GoogleLogo from "@/../public/google_logo2.png";
import Image from "next/image";

export default function SignIn(){
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 to-pink-50 p-4 antialiased">
            <Link href={"/"} className="inline-flex font-sans items-center text-sm text-muted-foreground transition-colors hover:text-primary">
                <ArrowLeft className="mr2 h-4 w-4" />
                Back
            </Link>

            <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center">
                <div className="w-full max-w-md space-y-8">
                    <div className="space-y-2 text-center">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <h1 className="font-sans text-xl">Welcome to TymeSync</h1>
                        <p className=" text-lg font-sans">Sign up to your account to continue</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Input type="email"  placeholder="name@example.com" className="h-11 rounded-full  bg-white/50 backdrop-blur-sm "/>
                            <Button className="h-11 w-full rounded-full font-sans">Sign up with Email</Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-muted"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-gradient-to-br from-purple-50 to-pink-50 px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <Button variant={"outline"} className="h-11 w-full text-lg font-sans rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/60">
                            <Image src={GoogleLogo} alt="google logo" className="size-6 mr-2" />
                            Google
                        </Button>

                        <div className="mt-4 text-center text-sm font-sans">
                            Have an account?{' '}
                            <Link href={""} className="underline font-sans underline-offset-4 hover:text-primary">Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}