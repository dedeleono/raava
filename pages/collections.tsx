import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../utilities/animation";
import Gallery from '../components/Gallery'

const Collections = () => {
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
        className="text-gray-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16"
      >
        <main>
          <div className="my-96 p-1 overflow-hidden font-Montserrat font-thin text-white/80">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-6xl text-center lg:text-right lg:text-8xl "
              style={{textShadow: '1px 1px 0.5px #121618'}}
            >
              Hand - Crafted Desgins
            </m.h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="font-latoBold text-left lg:text-6xl text-2xl"
          >
            <div className=" overflow-hidden">
              <m.h2 className="text-sm font-Montserrat font-thin" variants={item}>made in</m.h2>
            </div>
            <div className=" overflow-hidden font-Roboto font-normal">
              <m.h2 variants={item}>Guatemala</m.h2>
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
        <Gallery/>
      </m.div>
    </>
  );
};

export default Collections;
