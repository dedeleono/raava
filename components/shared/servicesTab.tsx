import Image from 'next/image';
import img from '../../public/imgs/wedding.jpeg'
import img1 from '../../public/imgs/interior.jpg'

const servicesTab = () => {
  return (
    <div className="w-full px-5 md:py-24 py-18 mx-auto">
      <div className="flex items-center w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="md:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0">
          <Image src={img.src} width={400} height={250} alt={''} className='rounded-md'/>
          
        </div>
        <div className="flex-grow text-left">
          <h2 className="text-gray-100 text-lg title-font font-medium mb-2">
            Illumination Services
          </h2>
          <p className="leading-relaxed text-base">
          We help you bring your vision to life with our high-quality event furniture perfectly tailored to match the theme of your occasion.
          </p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
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
      <div className="flex items-center mx-auto pb-10 mb-10 md:flex-row flex-col-reverse">
        <div className="flex-grow text-left">
          <h2 className="text-gray-100 text-lg title-font font-medium mb-2">
            Interior Design
          </h2>
          <p className="leading-relaxed text-base">
            We specialize in designing and furnishing spaces that perfectly reflect your unique style and personality.
          </p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
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
        <div className="md:ml-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0">
        <Image src={img1.src} width={400} height={250} alt={''} className='rounded-md'/>
        </div>
      </div>
      
      <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Contract a Service
      </button>
    </div>
  );
};

export default servicesTab;
