"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";

const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    path: "/#features",
  },
  {
    id: 3,
    title: "How It Works",
    path: "/how-it-works",
  },
  {
    id: 4,
    title: "Experts",
    path: "/experts",
  },
  {
    id: 5,
    title: "Pricing",
    path: "/#pricing",
  },
  {
    id: 6,
    title: "About",
    path: "/about",
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white py-4! shadow-sm transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="max-w-c-1390 relative mx-auto items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/logo-dark.png"
              alt="Mezzo Aid Logo"
              width={119.03}
              height={30}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/logo-light.png"
              alt="Mezzo Aid Logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            />
          </a>

          {/* Hamburger Toggle BTN */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-black delay-0 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "w-full! delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "w-full! delay-400" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "w-full! delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute top-0 left-2.5 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "h-0! delay-0" : "h-full"
                  }`}
                ></span>
                <span
                  className={`absolute top-2.5 left-0 block h-0.5 w-full rounded-sm bg-black delay-400 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "h-0! delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Nav Menu Start */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar shadow-solid-5 dark:bg-blacksection visible! mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem) => (
                <li key={menuItem.id}>
                  <Link
                    href={menuItem.path}
                    className={
                      pathUrl === menuItem.path
                        ? "text-[#5B1B8D] hover:text-[#7B2CBF]"
                        : "hover:text-[#5B1B8D]"
                    }
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <ThemeToggler />

            <Link
              href="https://app.mezzoaid.com/login"
              className="text-regular text-waterloo font-medium hover:text-[#5B1B8D]"
            >
              Login
            </Link>

            <Link
              href="https://app.mezzoaid.com/signup/entrepreneur"
              className="text-regular flex items-center justify-center rounded-full bg-[#5B1B8D] px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-[#7B2CBF]"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
