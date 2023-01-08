import img from '../../public/imgs/1.png'
import img1 from '../../public/imgs/home.png'
import img2 from '../../public/imgs/top.png'

const Grid = () => {
  return (
    
      <div className="container px-6 mx-auto">
        {/* <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Our Designs
        </h1> */}

        <div className="grid grid-cols-1 gap-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className='my-5'>
          <img
              className="object-cover w-full rounded-lg h-96 "
              src={img1.src}
              alt=""
            />
            <h2 className="mt-4 text-2xl font-semibold capitalize text-white font-[MetroMed] italic">
              Home
            </h2>
            <p className="mt-4 text-xs lowercase text-[#efe4d2]">
              #home #interiordesign #furnitre #comfort
            </p>
          </div>

          <div className='my-5'>
            <img
              className="object-cover w-full rounded-lg h-96 "
              src={img.src}
              alt=""
            />
            <h2 className="mt-4 text-2xl font-semibold capitalize text-white font-[MetroMed] italic">
              Office
            </h2>
            <p className="mt-4 text-xs lowercase text-[#efe4d2]">
              #office #comfort #illumintation
            </p>
          </div>

          <div className='my-5'>
          <img
              className="object-cover w-full rounded-lg h-96 "
              src={img2.src}
              alt=""
            />
            <h2 className="mt-4 text-2xl font-semibold capitalize text-white font-[MetroMed] italic">
              Designer
            </h2>
            <p className="mt-4 text-xs lowercase text-[#efe4d2]">
              #designerfurniture #furnituredesign #beautiful
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Grid;
