// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Heading from '../Heading/Heading';
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useMenu from '../../Hooks/useMenu';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChifRecomand = () => {
  const [menuItems] = useMenu();
  const [slidesPreview, setSlidePreview] = useState(0);

  const handleResize = () => {
    if(innerWidth < 640){
      setSlidePreview(1);
    } else if( innerWidth > 640 && innerWidth < 768 ){
      setSlidePreview(2);
    } else {
      slidesPreview(3);
    }
  }

  useEffect(()=> {
    addEventListener('resize',handleResize);

    return ()=> removeEventListener('resize', handleResize);
  },[]);

  return (
    <div>
      <Heading
        text={{ subTitle: 'Should try', title: 'Chif recommends' }}
      ></Heading>

      <Swiper
        slidesPerView={slidesPreview}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={false}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper"
      >
        {menuItems.map((menuItem, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={menuItem.image}
                    alt={menuItem?.name}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title h-14 line-clamp-2">{menuItem.name}</h2>
                  <p className='line-clamp-2'>{menuItem.recipe.slice(0,100)}</p>
                  <div className="card-actions">
                    <Link to={'/order'} className="btn"> Go to order page</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ChifRecomand;
