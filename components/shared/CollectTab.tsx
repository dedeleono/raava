import img from '../../public/imgs/1.png'

const Grid = () => {
  return (
    
      <div className="container px-6 mx-auto">
        {/* <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Our Designs
        </h1> */}

        <div className="grid grid-cols-1 gap-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <img
              className="object-cover w-full rounded-lg h-96 "
              src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
              alt=""
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
              Best website collections
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              Website
            </p>
          </div>

          <div>
            <img
              className="object-cover w-full rounded-lg h-96 "
              src={img.src}
              alt=""
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
              Office
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              Ui kit
            </p>
          </div>

          <div>
            <img
              className="object-cover w-full rounded-lg h-96 "
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
              Ton’s of mobile mockup
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              Mockups
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Grid;
