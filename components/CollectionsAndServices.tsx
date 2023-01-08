import React, { useState, useEffect } from "react";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { GiWoodAxe } from "react-icons/gi";
import Grid from "../components/shared/CollectTab";
import Services from "../components/shared/servicesTab";

const Collections = () => {
  const [isCollection, setIsCollection] = useState(0);

  useEffect(() => {
    setIsCollection(0);
  }, []);

  return (
    <div className="container text-white py-24 mx-auto flex flex-wrap flex-col ">
      <div className="flex mx-auto flex-row mb-20 w-auto">
        <button
          onClick={() => setIsCollection(0)}
          className={`sm:px-6 py-3 w-1/2 font-[BodWars] mx-1 sm:w-auto justify-center  border-b-2 title-font font-medium text-xs md:text-sm flex items-center leading-none ${
            isCollection === 0
              ? "border-[#93E1ED] text-[#93E1ED]"
              : "border-[#93E1ED]/50 text-[#93E1ED]/70"
          } tracking-wider`}
        >
          <BsFillGrid1X2Fill className="md:mr-3 mr-2" />
          Collections
        </button>
        <button
          onClick={() => setIsCollection(1)}
          className={`sm:px-6 py-3 w-1/2 font-[BodWars] mx-1 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium text-xs md:text-base flex items-center leading-none ${
            isCollection === 1
              ? "border-[#93E1ED] text-[#93E1ED]"
              : "border-[#93E1ED]/30 text-[#93E1ED]/60"
          } tracking-wider`}
        >
          <GiWoodAxe className="mr-3" />
          Services
        </button>
      </div>
      {isCollection ? <Services /> : <Grid />}
    </div>
  );
};

export default Collections;
