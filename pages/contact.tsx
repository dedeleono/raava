import { useState } from "react";
import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../utilities/animation";
import img9 from '../public/imgs/2.png';

const Contact = () => {

  const [isFilled, setIsFilled] = useState(false);

  return (
    <>
      <m.div
        animate={{ y: "0%" }}
        exit={{ opacity: 0.1 }}
        initial={{ y: "100%" }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}
        className="text-gray-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16 bg-cover"
        style={{backgroundImage:`url("${img9.src}")`}}
      >
        <div className="absolute w-full min-h-full bg-black/50 left-0 z-[-1]"/>
        <main>
          <div className="my-96 p-1 overflow-hidden text-white">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-3xl text-center lg:text-right lg:text-5xl font-BH italic font-thin"
              style={{ textShadow: "0.5px 0.5px 0.1px #121618" }}
            >
              Let us hear your ideas
            </m.h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <m.div
              variants={container}
              initial="hidden"
              animate="show"
              className="font-latoBold text-left lg:text-6xl text-4xl"
            >
              <div className=" overflow-hidden my-3">
                <m.h2
                  className="text-xs font-Montserrat font-extralight text-white"
                  variants={item}
                >
                  get in touch
                </m.h2>
              </div>
              <div className=" overflow-hidden font-[MetroThin] md:text-6xl text-5xl text-white">
                <m.h2 variants={item}>Talk with us</m.h2>
              </div>
            </m.div>
            
          </div>
        </main>
        <div className="min-h-full md:mt-10 mt-6 w-full flex items-center justify-center">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-[0.7rem] mb-2 font-[BodWars]"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
                {/* <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-[0.7rem] mb-2 font-[BodWars]"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-[0.7rem] mb-2 font-[BodWars]"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
                {/* <p className="text-gray-600 text-xs italic">
                  Some tips - as long as needed
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-[0.7rem] mb-2 font-[BodWars]"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
                {/* <p className="text-gray-600 text-xs italic">
                  Re-size can be disabled by set by resize-none / resize-y /
                  resize-x / resize
                </p> */}
              </div>
            </div>
            
              <div className="w-full flex">
                <button
                  className="shadow bg-[#93E1ED]/70 md:w-full w-[90%] mx-auto hover:bg-[#93E1ED]/90 hover:text-gray-700 focus:shadow-outline focus:outline-none text-white font-[MetroMed] lowercase py-2 px-4 rounded-md"
                  type="button"
                >
                  Send
                </button>
              </div>
              {/* <div className="md:w-2/3"></div> */}
            
          </form>
        </div>
      </m.div>
    </>
  );
};

export default Contact;
