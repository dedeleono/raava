import { motion as m } from "framer-motion";
import { container, item } from "../utilities/animation";
import Desc from '../components/Desc'
import img9 from "../public/imgs/1.png";

export default function Home() {
  const d = new Date();

  return (
    <>
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 0.1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      style={{ backgroundImage: `url("${img9.src}")` }}
      className=" absolute top-0 left-0 w-full min-h-screen h-full lg:px-48 px-16 bg-top bg-cover bg-no-repeat"
    >
      <div className="absolute w-full min-h-full bg-black/50 left-0 z-[-1]" />
      <main>
        <div className="my-96 p-1 text-white overflow-hidden ">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl text-center lg:text-right lg:text-5xl font-BH italic font-thin"
            style={{ textShadow: "0.5px 0.5px 0.1px #121618" }}
          >
            Style & Comfort
          </m.h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between w-full pt-3">
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="font-latoBold text-left lg:text-6xl text-4xl w-full mt-5 md:mt-0"
          >
            <div className=" overflow-hidden text-white my-3">
              <m.h2
                className="text-xs font-Montserrat font-normal text-[#93E1ED]/70"
                variants={item}
              >
                more than a
              </m.h2>
            </div>
            <div className=" overflow-hidden font-[MetroThin] text-white md:text-7xl text-4xl">
              <m.h2 variants={item}>Furniture Store</m.h2>
            </div>
          </m.div>
          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-right lg:text-2xl text-base md:m-0 mt-10"
          >
            <div className=" overflow-hidden font-[Metrothin] text-white mt-5">
              <m.span
                animate={{ y: 0 }}
                initial={{ y: "100%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-sm my-5 text-right font-[MetroThin] lg:text-base flex"
              >
                We believe that sharing is at the heart of our
                community. Whether it's sharing knowledge, experiences, or
                resources. <br></br><br></br>Join us in fostering a culture of collaboration and support.
              </m.span>
            </div>
          </m.div>
        </div>
      </main>
      <div className="w-full items-center justify-center mx-auto text-center my-60">
          <h1 className="md:text-7xl text-5xl font-[BodWars] text-[#93E1ED]/70">raava</h1>
          <span className="text-sm font-[MetroThin] text-center">Hand crafted opportunities</span>
        </div>
      <Desc/>
    </m.div>
    
    </>
  );
}
