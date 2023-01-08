import Image from "next/image";
import img from "../../public/imgs/wedding.jpeg";
import img1 from "../../public/imgs/interior.jpg";

const servicesTab = () => {
  return (
    <div className="w-full px-6 mx-auto">
      {/* <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white mb-20">
          What We Do
        </h1> */}
      <div className="flex items-center w-full mx-auto bg-gray-700/30 rounded-md justify-center mb-10 md:py-5 md:px-5 md:flex-row flex-col">
        <Image
          src={img.src}
          width={400}
          height={275}
          alt={""}
          className="rounded-md shadow-lg md:w-auto w-full"
        />

        <div className="flex-grow text-left md:py-5 py-10 md:px-5 mx-5">
          <h2 className="text-gray-100 text-2xl italic title-font font-medium mb-2 font-[MetroReg]">
          Illumination Services
          </h2>
          <p className="leading-relaxed text-sm font-Montserrat font-thin mt-7">
          We help you bring your vision to life with our high-quality event
            furniture perfectly tailored to match the theme of your occasion.
          </p>
          <a className="mt-3 text-[#efe4d2] inline-flex items-center cursor-pointer">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex items-center mx-auto md:py-5 md:px-5 mb-10 md:flex-row flex-col-reverse w-full bg-gray-700/30 rounded-md justify-center">
        <div className="flex-grow text-left py-10 md:mx-10 mx-5">
          <h2 className="text-gray-100 text-2xl italic title-font font-medium mb-2 font-[MetroReg]">
            Interior Design
          </h2>
          <p className="leading-relaxed text-sm font-Montserrat font-thin mt-7">
            We specialize in designing and furnishing spaces that perfectly
            reflect your unique style and personality.
          </p>
          <a className="mt-3 text-[#efe4d2] inline-flex items-center cursor-pointer">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        
          <Image
            src={img1.src}
            width={400}
            height={275}
            alt={""}
            className="rounded-md shadow-lg md:w-auto w-full"
          />
        
      </div>

      {/* <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Contract a Service
      </button> */}
    </div>
  );
};

export default servicesTab;
