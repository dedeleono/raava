import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import { BiSearch, BiCollection } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { IoInformationSharp } from "react-icons/io5";
import { RiHomeFill } from "react-icons/ri";
import Link from "next/link";
import raavaW from "../public/imgs/svgs/RAAVA-White.svg";
import raavaB from "../public/imgs/svgs/RaavaBlack.svg";
import raavaC from "../public/imgs/svgs/RaavaColor.svg";
import raavaIconColor from "../public/imgs/svgs/colorIcon.svg";
import { useRouter } from "next/router";

const navigationItems = [
  {
    id: "collections",
    title: "what we do",
    href: "/collections",
    icon: <BiCollection />,
  },
  {
    id: "about",
    title: "why us?",
    href: "/about",
    icon: <BsBag />,
  },
  {
    id: "contact",
    title: "contact",
    href: "/contact",
    icon: <IoInformationSharp />,
  },
];

const Navigation = ({ activeId }: { activeId: string }) => {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });

  function scroll() {
    const scroll = window.pageYOffset;
    if (scroll === 0 && isTop === false) {
      setIsTop(true);
    } else if (scroll > 0 && isTop === true) {
      setIsTop(false);
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`md:py-8 fixed py-4 text-white right-0 left-0 top-0 z-10 flex items-center justify-between gap-3 bg-transparent px-4 transition-all md:gap-4 md:px-6 `}
    >
      <Link href="/">
        <div className="flex flex-col items-center justify-center mt-6 md:mt-2">
        <img
          src={raavaIconColor.src}
          className="md:w-[80px] w-[50px] scale-[2.1] md:scale-[1.5] cursor-pointer"
        />
        <span className="font-[BodWars] text-[#93E1ED] md:text-3xl text-2xl cursor-pointer" >
          raava
        </span>
        </div>
      </Link>

      <button
        className="block p-2 text-xl text-white cursor-pointer ml-auto"
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateX: "-100%" }}
            animate={{ translateX: "0%" }}
            exit={{ translateX: "-100%" }}
            className="fixed inset-0 top-0 left-0 flex flex-col items-center gap-12 bg-[#1B1B22]/70 backdrop-blur-md p-4 w-64"
          >
            <div className="flex w-full items-center justify-end gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded text-white text-2xl"
              >
                <VscChromeClose />
              </button>
            </div>

            <div className="flex flex-col items-end gap-4 text-white w-full">
              <button className="flex items-center gap-3">
                Search
                <BiSearch className="text-xl" />
              </button>
              <button className="flex items-center gap-3">
                Browse Our Store
                <RiShoppingCartLine className="text-xl" />
              </button>
              <div className="my-8 border-t border-t-white/10 w-[98%] mx-auto"></div>

              <div className="overflow-y-auto py-5 px-3 w-full">
                <ul className="space-y-2">
                  {navigationItems.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.href}>
                          <button
                            type="button"
                            className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="dropdown-pages"
                            data-collapse-toggle="dropdown-pages"
                          >
                            {item.icon}
                            <span className="flex-1 ml-3 text-center whitespace-nowrap">
                              {item.title}
                            </span>
                          </button>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full flex bg-gray-500/20 backdrop-blur-sm">
                <a
                  href="#"
                  className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <FiInstagram className="text-2xl" />
                </a>
                <button
                  onClick={scrollTop}
                  data-tooltip-target="tooltip-settings"
                  className="inline-flex items-center max-w-[3.5rem] justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <img
                    src={raavaIconColor.src}
                    className="w-full bg-transparent scale-[2.0]"
                  />
                </button>
                <a
                  href="#"
                  data-tooltip-target="tooltip-settings"
                  className="inline-flex items-center justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <RiHomeFill className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
