import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../utilities/animation";
import img9 from '../public/imgs/huehue.jpg';
import raavaW from "../public/imgs//svgs/RAAVA-White.svg";

const About = () => {
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
        className="text-gray-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16 bg-cover bg-left"
        style={{backgroundImage:`url("${img9.src}")`}}
      >
        <div className="absolute w-full min-h-full bg-black/30 left-0 z-[-1]"/>
        <main>
          <div className="my-96 p-1 overflow-hidden font-Montserrat font-thin text-white italic">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-3xl text-center lg:text-right lg:text-5xl lowercase flex flex-row items-top justify-end"
              style={{textShadow: '0.5px 0.5px 0.1px #121618'}}
            >
              Why <span className="inline-block items-center"><embed src={raavaW.src} className='w-full scale-125'></embed></span>
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
              <m.h2 className="text-xs font-Montserrat font-thin" variants={item}>why we do what we do?</m.h2>
            </div>
            <div className=" overflow-hidden font-Roboto font-light">
              <m.h2 variants={item}>Who we are?</m.h2>
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
        <div className="min-h-screen w-full flex items-center justify-center">
          hello
        </div>
      </m.div>
    </>
  );
};

export default About;
