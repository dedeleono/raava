import { motion as m } from "framer-motion";
import { container, item } from "../utilities/animation";
import img9 from '../public/imgs/1.png'

export default function Home() {
  const d = new Date();

  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 0.1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      style={{backgroundImage:`url("${img9.src}")`}}
      className=" absolute top-0 left-0 w-full h-full lg:px-48 px-16 bg-top bg-cover bg-no-repeat"
    >
      <div className="absolute w-full min-h-full bg-black/50 left-0 z-[-1]"/>
      <main>
        <div className="my-96 p-1 font-Montserrat font-thin text-white overflow-hidden ">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl text-center lg:text-right lg:text-5xl font-[MetroReg] italic"
            style={{textShadow: '0.5px 0.5px 0.1px #121618'}}
          >
            Style & Comfort
          </m.h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className=" text-left lg:text-6xl text-4xl text-white"
          >
            <div className=" overflow-hidden my-3">
              <m.h2 className="text-xs font-Montserrat font-thin" variants={item}>more than a</m.h2>
            </div>
            <div className=" overflow-hidden font-[MetroThin] font-light">
              <m.h2 variants={item}>Furniture Company</m.h2>
            </div>
          </m.div>
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-right lg:text-2xl text-base md:m-0 mt-10"
          >
            <div className="overflow-hidden py-1">
              <m.h3 variants={item}>This pickle gonna make you smile.</m.h3>
            </div>
            <div className="overflow-hidden py-1">
              <m.h3 variants={item}>Scottish designs to make you happy.</m.h3>
            </div>
            <div className="overflow-hidden py-1">
              <m.h3 variants={item}>Click contact for cool transition.</m.h3>
            </div>
          </m.div>
        </div>
      </main>
      <div className="min-h-full w-full flex items-center justify-center">
      hello
    </div>
    </m.div>
  );
}
