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
import raava from "../public/imgs/raavaH-Color.svg";
import raavaIconColor from "../public/imgs/colorIcon.svg";

const Navigation = () => {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
        <img src={raava.src} className="w-[130px] scale-[2.1] cursor-pointer" />
      </Link>

      <div className=" md:flex hidden md:flex-row items-center gap-3 md:gap-4 font-Montserrat lowercase">
        <Link href="/collections">
          <div className="relative flex items-center gap-2 mx-4 cursor-pointer">
            <p className="hidden sm:block">Collections</p>
          </div>
        </Link>

        <Link href="/prodcuts">
          <div className="relative flex items-center gap-2 mx-4 cursor-pointer">
            <p className="hidden sm:block">Products</p>
          </div>
        </Link>
        <Link href="/contact">
          <div className="relative flex items-center gap-2 mx-4 cursor-pointer">
            <p className="hidden sm:block">About</p>
          </div>
        </Link>
      </div>
      <div className="md:flex flex-row items-center justify-center hidden">
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
        className="block p-2 text-2xl cursor-pointer ml-auto md:hidden"
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
            <div className="flex w-full items-center justify-between gap-3">
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
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-row w-full items-center justify-center">
                  <Link href="/collections">
                    <div className="w-full flex flex-col border-none px-3 py-5 bg-[#0367A6] text-white rounded-md items-center gap-2 cursor-pointer font-Montserrat lowercase mx-1">
                      <BiCollection />
                      <p className="flex">Collections</p>
                    </div>
                  </Link>

                  <Link href="/prodcuts">
                    <div className="w-full flex flex-col border-none px-3 py-5 bg-[#0367A6] text-white rounded-md items-center gap-2 mx-1 cursor-pointer font-Montserrat lowercase ">
                      <BsBag />
                      <p className="flex">Products</p>
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div className="w-full flex flex-col border-none px-3 py-5 bg-[#0367A6] text-white rounded-md items-center gap-2 cursor-pointer font-Montserrat lowercase mx-1">
                      <IoInformationSharp />
                      <p className="flex">About</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-8 border-t border-t-white/10 w-[98%] mx-auto"></div>
              <Link href="/" className="block md:hidden">
                <img src={raavaIconColor.src} className="w-[100px] mx-auto scale-[1.9] mt-16 cursor-pointer"/>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
