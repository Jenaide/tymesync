"use client";

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import GoogleLogo from "@/../public/google_logo2.png";

export function GoogleAuthButton(){
    const {pending} = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled variant={"outline"} className="w-full">
                    <Loader2 className="size-4 animate-spin" />
                </Button>
            ) : (
                <Button variant={"outline"} className="h-11 w-full text-lg font-sans rounded-full bg-white/50 backdrop-blur-sm hover:bg-gray-200/20">
                    <Image src={GoogleLogo} alt="google logo" className="size-6 mr-2"/>
                    Sign in with Google
                </Button>
            )}    
        </>
    )
}