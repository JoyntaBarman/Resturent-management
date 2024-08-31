// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

// Product images
import img1 from '../../../src/assets/home/slide1.jpg';
import img2 from '../../../src/assets/home/slide2.jpg';
import img3 from '../../../src/assets/home/slide3.jpg';
import img4 from '../../../src/assets/home/slide4.jpg';
import img5 from '../../../src/assets/home/slide5.jpg';

import Heading from '../../../src/components/Heading/Heading';

const Products = () => {
  return (
    <>
    <Heading
        text={{ subTitle: 'from 11:00am to 10pm', title: 'order online' }}
      ></Heading>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide >
          <img className='w-full object-cover' src={img1} alt="" />
          <p className='text-center lg:text-3xl -mt-20 uppercase text-gray-200'>Salad</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover' src={img2} alt="" />
          <p className='text-center lg:text-3xl text-xl -mt-20 uppercase text-gray-200'>supe</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover' src={img3} alt="" />
          <p className='text-center lg:text-3xl text-xl -mt-20 uppercase text-gray-200'>pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover' src={img4} alt="" />
          <p className='text-center lg:text-3xl text-xl -mt-20 uppercase text-gray-200'>dessart</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover' src={img5} alt="" />
          <p className='text-center text-3xl -mt-20 uppercase text-gray-200'>Salad</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Products;
