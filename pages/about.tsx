import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../utilities/animation";
import img9 from "../public/imgs/huehue.jpg";
import img from "../public/imgs/image.png";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

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
        style={{ backgroundImage: `url("${img9.src}")` }}
      >
        <div className="absolute w-full min-h-full bg-black/50 left-0 z-[-1]" />
        <main>
          <div className="my-96 p-1 overflow-hidden text-white italic">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-3xl text-center lg:text-right font-BH italic font-thin lg:text-5xl lowercase flex flex-row items-top justify-end"
              style={{ textShadow: "0.5px 0.5px 0.1px #121618" }}
            >
              Why
              <span className="w-auto font-[BodWars] mt-10 lg:text-6xl text-4xl">
                raava
              </span>
            </m.h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-between">
            <m.div
              variants={container}
              initial="hidden"
              animate="show"
              className="font-latoBold text-left lg:text-6xl text-4xl"
            >
              <div className=" overflow-hidden my-3">
                <m.h2
                  className="text-xs font-Montserrat font-normal text-[#93E1ED]/70"
                  variants={item}
                >
                  why we do what we do?
                </m.h2>
              </div>
              <div className=" overflow-hidden font-[MetroLight] text-white md:text-7xl text-6xl">
                <m.h2 variants={item}>Who are we?</m.h2>
              </div>
              <div className=" overflow-hidden font-[Metrothin] text-white mt-5">
                <m.span
                  animate={{ y: 0 }}
                  initial={{ y: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-sm my-5 md:w-3/4 md:text-left text-right font-[MetroThin] lg:text-base lowercase flex"
                >
                  Our name, Raava, is inspired by the idea of adventure and
                  determination, and we infuse that spirit into every product we create
                </m.span>
              </div>
            </m.div>
            <m.div
              variants={container}
              initial="hidden"
              animate="show"
              className="text-right lg:text-2xl text-base md:m-0 mt-10 w-full"
            >
              <div className="w-full">
                <img src={img.src} className="w-full md:mt-0 mt-5"></img>
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
