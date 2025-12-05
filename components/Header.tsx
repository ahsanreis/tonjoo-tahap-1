export default function Header() {
    const navItems = [
        { name: "Beranda", href: "#", dropdown: false },
        { name: "Belanja", href: "#", dropdown: true },
        { name: "Bundle 1", href: "#", dropdown: true },
        { name: "Bundle 2", href: "#", dropdown: true },
        { name: "Promo", href: "#", dropdown: false },
        { name: "Blog", href: "#", dropdown: false },
    ];
    return (
        <nav className="w-full border-b border-zinc-200 bg-theme-primary px-2 sm:px-4 py-2 dark:border-zinc-800 dark:bg-theme-primary">
            <div className="mx-auto flex items-center justify-between gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="text-xl sm:text-3xl font-bold">
                mino.
                </div>
            </div>
            <div className="space-x-2 sm:space-x-4 flex items-center flex-shrink-0">
                <a
                href="#"
                className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                </a>
                <a
                href="#"
                className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                </a>
            </div>
            </div>
            <div className="p-2 sm:p-4 flex justify-center overflow-x-auto">
            <ul className="flex space-x-2 sm:space-x-4 flex-nowrap text-xs sm:text-base">
                {navItems.map((item) => (
                <li key={item.name} className="relative flex-shrink-0">
                    <a
                    href={item.href}
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 whitespace-nowrap"
                    >
                    {item.name.toUpperCase()}
                    {item.dropdown && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="inline size-3 sm:size-4 ml-1"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                    )}
                    </a>
                </li>
                ))}
            </ul>
            </div>
        </nav>
    )
}