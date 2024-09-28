"use client";

import { usePathname } from "next/navigation";

const pages = [
    { name: "Home",    path: "/"},
    { name: "Live",    path: "/live-tracking", newPage: true},
];

export const NavBar = () => {
    const pathname = usePathname();

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Formula1</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {pages.map(
                        ({ name, path, newPage }) => (
                            <li key={name}>
                                <a href={path} 
                                    className={
                                        `block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 
                                        ${pathname === path ? 'text-white bg-blue-700 md:text-blue-700' : 'text-gray-700 dark:text-gray-400'}`
                                    } 
                                    aria-current={pathname === path ? 'page' : undefined}
                                    target={newPage ? "_blank" : undefined}
                                    >
                                        {name}
                                </a>
                            </li>
                        ))}
                </ul>
                </div>
            </div>
        </nav>
    )
}