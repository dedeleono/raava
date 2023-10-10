import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { IoGitNetworkOutline } from "react-icons/io5";
import { RiHomeFill } from "react-icons/ri";
import raavaIconColor from "../public/imgs/svgs/colorIcon.svg";
import { useRouter } from "next/router";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import Image from "next/image";
const navigationItems = [
  {
    id: "collections",
    title: "what we do",
    href: "/collections",
    icon: <IoGitNetworkOutline className="text-xl" />,
  },
  {
    id: "about",
    title: "why us?",
    href: "/about",
    icon: <BsFillPeopleFill className="text-xl" />,
  },
  {
    id: "contact",
    title: "contact",
    href: "/contact",
    icon: <MdOutlinePermContactCalendar className="text-xl" />,
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
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`absolute text-white right-0 left-0 w-full top-0 z-10 flex items-center justify-between gap-3 bg-transparent px-4 transition-all lg:gap-4 lg:px-6`}
    >
      <Link href="/">
        <div className="flex flex-col items-center justify-center backdrop-blur-sm space-y-[-10px]">
          <Image
            alt=""
            width={130}
            height={130}
            src={raavaIconColor.src}
            className=" cursor-pointer"
          />
          <span className="font-[BodWars] text-[#93E1ED] block lg:text-lg text-sm cursor-pointer">
            raava
          </span>
        </div>
      </Link>

      <div className="md:flex flex-row items-center justify-between w-full hidden">
        <ul className="flex flex-row w-auto ml-24">
          {navigationItems.map((navLink, index) => {
            return (
              <Link href={navLink.href}>
                <motion.li
                  whileHover={{
                    scale: 1.1,
                    color: "#93E1ED",
                    transition: { duration: 0.1 },
                  }}
                  key={index}
                  className="capitalize text-sm font-black leading-5 tracking-widest text-white font-[MetroReg] cursor-pointer px-10"
                >
                  {navLink.title}
                </motion.li>
              </Link>
            );
          })}
        </ul>
        <div className="grid grid-cols-1 w-[25%]">
          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: "#58878e",
              color: "#93E1ED",
              transition: { duration: 0.3 },
            }}
            type="button"
            className="col-span-1 cursor-pointer hidden rounded-full py-2 w-auto xl:whitespace-nowrap bg-[#93E1ED] border border-transparent text-[#58878e] font-black font-montserrat uppercase tracking-wide text-xs mr-2"
          >
            Create Account
          </motion.button>
          <motion.button
            whileHover={{
              color: "#93E1ED",
              border: "1px solid #93E1ED",
              transition: { duration: 0.3 },
              scale: 1.03,
            }}
            className="col-span-1 cursor-pointer rounded-full py-2 w-auto border border-[#58878e] text-[#58878e] font-black font-[BodWars] uppercase tracking-wide text-xs ml-2"
          >
            Sign In
          </motion.button>
        </div>
      </div>

      <button
        className="pt-2 text-xl text-white cursor-pointer md:hidden ml-auto "
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateX: "100%" }}
            animate={{ translateX: "0%" }}
            exit={{ translateX: "-100%" }}
            style={{
              inset: "0 0 0 0",
            }}
            className="fixed min-h-screen md:hidden flex flex-col items-center gap-12 bg-[#1B1B22]/80 backdrop-blur-md p-4 w-full"
          >
            <div className="flex w-full items-center justify-end gap-3 my-5">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded text-white text-2xl "
              >
                <VscChromeClose className="" />
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

              <div className="overflow-y-auto lg:py-5 py-12 px-3 w-full">
                <ul className="space-y-2">
                  {navigationItems.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.href}>
                          <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            whileHover={{
                              backgroundColor: "rgba(147, 225, 237, 0.8)",
                              color: "black",
                              transition: { duration: 0.3 },
                            }}
                            className={`flex items-center px-2 py-3 my-2 w-full text-base font-normal text-white rounded-md group ${
                              activeId === item.href
                                ? "bg-[#93E1ED]/80 text-black"
                                : ""
                            }`}
                          >
                            {item.icon}
                            <span className="flex-1 ml-3 text-center whitespace-nowrap">
                              {item.title}
                            </span>
                          </motion.button>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full flex bg-gray-500/20 backdrop-blur-sm">
                <motion.button
                  whileHover={{
                    color: "#93E1ED",
                    border: "1px solid #93E1ED",
                    transition: { duration: 0.3 },
                    scale: 1.03,
                  }}
                  className="col-span-1 cursor-pointer rounded-md p-2 w-auto border border-[#58878e] text-[#58878e] font-black font-[BodWars] uppercase tracking-wide text-xs ml-2"
                >
                  Sign In
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
