import Link from "next/link";

export function Footer(){
    return (
        <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 TymeSync. All rights reserved.</p>
                </div>
                <nav className="flex gap-4 sm:gap-6">
                <Link className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-400" href="#">
                    Terms of Service
                </Link>
                <Link className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-400" href="#">
                    Privacy Policy
                </Link>
                <Link className="text-sm text-gray-600 hover:text-primary transition-colors dark:text-gray-400" href="#">
                    Contact Us
                </Link>
                </nav>
            </div>
            </div>
      </footer>
    )
}