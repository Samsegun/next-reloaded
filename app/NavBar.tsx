import Link from "next/link";
import React from "react";

const NavBar = () => {
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
            </ul>
        </nav>
    );
};

export default NavBar;
