import Image from "next/image";
import Link from 'next/link';
import {
    getKindeServerSession,
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default function Navbar() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = getUser();

    return (
        <nav className="flex justify-between items-center py-4 md:py-6 w-full px-4 bg-transparent">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                    <DropletsIcon className="h-6 w-6" />
                    <span className="font-serif font-bold text-xl tracking-[-1px]">Jeevan Saathi</span>
            </Link>
            <div className="flex gap-2 md:gap-4 items-center">
                {!isAuthenticated() ? (
                    <>
                        <LoginLink className=" text-white font-extrabold text-sm md:text-base px-3 md:px-4 py-1 md:py-2 rounded">Sign in</LoginLink>
                        <RegisterLink className=" text-white text-sm font-extrabold md:text-base px-3 md:px-4 py-1 md:py-2 rounded">Sign up</RegisterLink>
                    </>
                ) : (
                    <div className="flex items-center gap-2 md:gap-4 font-normal">
                        {user?.picture ? (
                            <Image
                                className="rounded-full"
                                src={user?.picture}
                                width={40}
                                height={40}
                                alt="user profile avatar"
                            />
                        ) : (
                            <div className="bg-black text-white rounded-full p-2 md:p-4 text-center">
                                {user?.given_name?.[0]}
                                {user?.family_name?.[0]}
                            </div>
                        )}
                        <div className="text-sm md:text-base">
                            <p className="text-base md:text-xl">
                                {user?.given_name} {user?.family_name}
                            </p>
                            <LogoutLink className="text-black dark:text-white text-sm md:text-base">Log out</LogoutLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

const DropletsIcon = ({ className }: { className: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.172L5.05 10.122c-2.34 2.34-2.34 6.142 0 8.482 2.34 2.34 6.142 2.34 8.482 0 2.34-2.34 2.34-6.142 0-8.482L12 3.172z"
        />
    </svg>
);

