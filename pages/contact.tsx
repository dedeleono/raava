import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../utilities/animation";

const Contact = () => {
  return (
    <>
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <div className="my-80 p-1 font-archivo overflow-hidden ">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-9xl text-6xl lg:text-right text-center"
        >
          Let's Talk
        </m.h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me:</h4>
        </div>
        <div className="font-latoBold  lg:text-6xl text-2xl underline">
          <m.ul variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link href="https://twitter.com">Twitter </Link>
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link href="https://instagram.com">Instagram</Link>
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link href="https://dribbble.com"> Dribbble</Link>
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link href="https://gmail.com"> Email</Link>
              </m.li>
            </div>
          </m.ul>
        </div>
      </div>
      <div className="min-h-screen w-full flex items-center justify-center">
      hello
    </div>
    </m.div>
    </>
  );
}

export default Contact;