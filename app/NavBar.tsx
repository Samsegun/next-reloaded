"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const NavBar = () => {
    const { status, data: session } = useSession();

    return (
        <nav className='bg-blue-500 text-white'>
            <ul className='flex flex-1 p-4 justify-between'>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/admin"}>Admin</Link>
                </li>
                <li>
                    <Link href={"/users"}>Users</Link>
                </li>
                <li>
                    <Link href={"/products"}>Products</Link>
                </li>

                {status === "loading" && (
                    <li className='loading loading-ring'></li>
                )}
                {status === "authenticated" && <li>{session.user?.name}</li>}
                {status === "unauthenticated" && (
                    <li>
                        <Link href={"/api/auth/signin"}>Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
