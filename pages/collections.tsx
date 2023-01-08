import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../utilities/animation";
import Gallery from '../components/Gallery'
import img9 from '../public/imgs/han.jpg'
import img1 from '../public/imgs/pana.jpg'
import Carousel from '../components/Carousel'
import Services from '../components/CollectionsAndServices'

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
        className="text-gray-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16 bg-cover bg-right"
        style={{backgroundImage:`url("${img9.src}")`}}
      >
        <div className="absolute w-full min-h-full bg-black/50 left-0 z-[-1]"/>
        <main>
          <div className="my-96 p-1 overflow-hidden text-white italic">
            <m.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-3xl text-center lg:text-right lg:text-5xl font-BH italic font-thin"
              style={{textShadow: '0.5px 0.5px 0.1px #121618'}}
            >
              Hand - Crafted Desgins
            </m.h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 w-full justify-between items-center">
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="font-latoBold text-left lg:text-6xl text-4xl"
          >
            <div className=" overflow-hidden text-white my-3">
              <m.h2 className="text-xs font-Montserrat font-normal text-[#93E1ED]/70" variants={item}>made in</m.h2>
            </div>
            <div className=" overflow-hidden font-[MetroThin] text-white md:text-7xl text-6xl">
              <m.h2 variants={item}>Guatemala</m.h2>
            </div>
          </m.div>
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-right lg:text-2xl text-base md:m-0 mt-10"
          >
            {/* <img className="w-full rounded-md" src={img1.src}/> */}
            <Carousel/>
          </m.div>
        </div>
        </main>
        <Services/>
      </m.div>
    </>
  );
};

export default Collections;
