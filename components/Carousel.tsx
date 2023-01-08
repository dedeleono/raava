import Image from 'next/image';
import img1 from '../public/imgs/ag4.jpg'
import img2 from '../public/imgs/mask.jpg'
import img3 from '../public/imgs/ruin.jpg'

const Carousel = () => {
  return (
    <div className="carousel carousel-right w-full p-5 space-x-4 bg-transparent rounded-box">
      <div className="carousel-item w-full">
        <Image width={800} height={600} alt="" src={img1.src} className="rounded-box " />
      </div>
      <div className="carousel-item w-full">
      <Image width={800} height={600} alt="" src={img2.src} className="rounded-box " />
      </div>
      <div className="carousel-item w-full">
      <Image width={800} height={600} alt="" src={img3.src} className="rounded-box " />
      </div>
      
    </div>
  );
};

export default Carousel;
