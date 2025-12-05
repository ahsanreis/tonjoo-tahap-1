"use client";

import React, { useEffect, useRef, useState } from "react";
import { megaMenuData } from "@/components/megaMenuData";
import useClickOutside from "@/components/hooks/useClickOutside";

export default function Header() {
  const navItems = [
    { name: "Beranda", href: "#", dropdown: false },
    { name: "Belanja", href: "#", dropdown: true },
    { name: "Bundle 1", href: "#", dropdown: true },
    { name: "Bundle 2", href: "#", dropdown: true },
    { name: "Promo", href: "#", dropdown: false },
    { name: "Blog", href: "#", dropdown: false },
  ];

  const [open, setOpen] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);

  useClickOutside(containerRef, () => setOpen(null));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    }
  }, [open]);

  const toggle = (name: string) => {
    setOpen((prev) => (prev === name ? null : name));
  };

  return (
    <nav ref={containerRef} className="relative w-full border-b border-zinc-200 bg-theme-primary px-2 sm:px-4 py-2 dark:border-zinc-800 dark:bg-theme-primary">
      <div className="mx-auto flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center space-x-2 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="text-xl sm:text-3xl font-bold text-white">mino.</div>
        </div>

        <div className="space-x-2 sm:space-x-4 flex items-center flex-shrink-0">
          <a href="#" className="text-white hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="p-2 sm:p-4 flex justify-center overflow-x-auto">
        <ul className="flex space-x-2 sm:space-x-4 flex-nowrap text-xs sm:text-base">
          {navItems.map((item) => (
            <li key={item.name} className="relative flex-shrink-0">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (item.dropdown) toggle(item.name);
                }}
                aria-expanded={open === item.name}
                aria-haspopup={item.dropdown ? "menu" : undefined}
                className="text-white hover:text-white whitespace-nowrap px-3 py-1 rounded-md"
              >
                <span className="select-none">{item.name.toUpperCase()}</span>
                {item.dropdown && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline size-3 sm:size-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open && megaMenuData[open] && (
        <div className="absolute left-0 right-0 top-full z-50">
          <div className="border-t border-zinc-200 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 dark:border-zinc-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <h3 className="text-sm font-semibold mb-3">KATEGORI</h3>
                <ul className="space-y-2 text-sm">
                  {megaMenuData[open].left.map((l: string, i: number) => (
                    <li key={l}>
                      <a ref={i === 0 ? firstMenuItemRef : undefined} href="#" role="menuitem" className="block hover:underline">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-6 border-l border-r border-zinc-100 px-4 dark:border-zinc-800">
                <h3 className="text-sm font-semibold mb-3">PRODUK POPULER</h3>
                <div className="grid grid-cols-2 gap-4">
                  {megaMenuData[open].middle.map((m: string) => (
                    <a key={m} href="#" className="text-sm hover:underline">
                      {m}
                    </a>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 flex items-center justify-center">
                <div className="w-40 h-40 bg-transparent border-transparent flex items-center justify-center overflow-hidden">
                  <img src={megaMenuData[open].image} alt={`${open} preview`} className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
