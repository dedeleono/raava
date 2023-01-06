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
import Link from "next/link";
import raavaW from "../public/imgs/RAAVA-White.svg";
import raavaB from "../public/imgs/RaavaBlack.svg";
import raavaC from "../public/imgs/RaavaColor.svg";
import raavaIconColor from "../public/imgs/colorIcon.svg";
import { useRouter } from "next/router";

const navigationItems = [
  {
    id: "collections",
    title: "collections",
    href: "/collections",
    icon: <BiCollection />,
  },
  {
    id: "about",
    title: "about",
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

const Navigation = ({ activeId }:{activeId:string}) => {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function scroll() {
    const scroll = window.pageYOffset;
    if (scroll === 0 && isTop === false) {
      setIsTop(true);
    } else if (scroll > 0 && isTop === true) {
      setIsTop(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });

  return (
    <div
      className={`fixed right-0 left-0 top-0 z-10 flex items-center justify-between gap-3 bg-transparent px-4 transition-all md:gap-4 md:px-6 ${
        isTop ? "py-6 md:py-8" : "bg-[#1B1B22] py-4 text-white"
      }`}
    >
      <Link href="/" className="block">
        <img
          src={raavaC.src}
          className="md:w-[100px] w-[50px] scale-[2.1] md:scale-[1.8] cursor-pointer"
        />
      </Link>

      <div className=" md:flex hidden md:flex-row items-center gap-3 md:gap-4 font-Roboto font-normal lowercase">
        {navigationItems.map((item, index) => {
          return (
            <Link href={item.href} key={index}>
              <div
                className={`relative flex items-center gap-2 mx-4 cursor-pointer ${
                  activeId === item.href ? "text-yellow-500" : "text-white"
                }`}
              >
                <p className="hidden sm:block">{item.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div
        className={`md:flex flex-row items-center justify-center hidden ${
          isTop ? "text-white" : ""
        }`}
      >
        <div itemType="button" className="cursor-pointer flex mx-2">
          <FiInstagram className="text-xl" />
        </div>
        <div itemType="button" className="cursor-pointer flex mx-2">
          <BiSearch className="text-xl" />
        </div>
        <div itemType="button" className="cursor-pointer flex mx-2">
          <RiShoppingCartLine className="text-xl" />
        </div>
      </div>

      <button
        className="block p-2 text-xl text-white cursor-pointer ml-auto md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0%" }}
            exit={{ translateY: "-100%" }}
            className="fixed inset-0 flex flex-col items-end gap-12 bg-[#1B1B22] p-4 md:hidden w-full"
          >
            <div className="flex w-full items-center justify-end gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded text-white p-2 text-2xl"
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

              <div className="grid grid-cols-3 space-x-2 w-full items-center justify-center">
                {navigationItems.map((item, index) => {
                  return (
                    <Link href={item.href} key={index}>
                      <div
                        className={`w-full flex flex-col border-none px-3 py-5 ${
                          activeId === item.href
                            ? "bg-[#02B9F4]"
                            : "bg-[#0367A6]"
                        } text-white rounded-md items-center gap-2 cursor-pointer font-Montserrat lowercase`}
                      >
                        {item.icon}
                        <p className="flex">{item.title}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-t-white/10 w-[98%] mx-auto"></div>
              <div className="w-full items-center justify-center">
                <Link href="/" className="block md:hidden">
                  <img
                    src={raavaIconColor.src}
                    className="w-[100px] mx-auto scale-[1.9] mt-16 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
