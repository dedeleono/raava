import { motion as m } from "framer-motion";
import { container, item } from "../utilities/animation";
import img9 from '../public/imgs/image-01.jpg'

export default function Home() {
  const d = new Date();

  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      style={{backgroundImage:`url("${img9.src}")`, opacity: 0.85}}
      className=" text-gray-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16 bg-top bg-cover bg-no-repeat"
    >
      <main>
        <div className="my-96 p-1 font-Montserrat font-thin text-white/80 overflow-hidden ">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-6xl text-center lg:text-left lg:text-8xl "
          >
            Style & Comfort
          </m.h1>
        </div>
        <div className="flex justify-between">
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="font-latoBold text-left lg:text-6xl text-2xl"
          >
            <div className=" overflow-hidden">
              <m.h2 variants={item}>Design</m.h2>
            </div>
            <div className=" overflow-hidden">
              <m.h2 variants={item}>Company</m.h2>
            </div>
            <div className=" overflow-hidden">
              <m.h2 variants={item}>{d.getFullYear()}</m.h2>
            </div>
          </m.div>
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-right lg:text-2xl text-base"
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
