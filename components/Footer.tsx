import React, { useState, useEffect } from "react";


const Footer = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });

  function scroll() {
    const scroll = window.pageYOffset;
    if (scroll === 0 && isTop === false) {
      setIsTop(true);
    } else if (scroll > 0 && isTop === true) {
      setIsTop(false);
    }
  }

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <footer className={`w-full block bg-[#1B1B22]/50 backdrop-blur-sm ${isTop ? 'hidden':'bottom-0 fixed'} left-0`}>
      <button className="flex md:w-[5%] w-[13%] mx-auto cursor-pointer" onClick={scrollTop}>
      <img
        src="/imgs/svgs/WhiteIcon.svg"
        draggable={false}
        className="mx-auto w-full"
        
      />
      </button>
    </footer>
  );
};

export default Footer;
