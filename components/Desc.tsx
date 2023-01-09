import img from "../public/imgs/image-00.jpg";

const Desc = () => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="md:text-4xl text-3xl font-medium title-font text-gray-100 lg:w-1/3 lg:mb-0 mb-10 font-[MetroReg] italic">
              Hand Crafted Opportunities
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300 font-[MetroThin]">
              At RAAVA, we believe in the power of handmade craftsmanship.
              That&apos;s why we are proud to offer a range of unique and beautifully
              crafted products, all made by hand in Guatemala. Each piece is a
              one-of-a-kind creation, made with care and attention to detail by
              skilled local artisans. <br/><br/>When you shop with RAAVA, you are not only
              purchasing a high-quality product, but you are also supporting the
              opportunities and livelihoods of these talented craftspeople. Join
              us in celebrating the beauty and value of handmade goods, and help
              us build a brighter future for all of us.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/500x300"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/501x301"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/601x361"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Desc;
