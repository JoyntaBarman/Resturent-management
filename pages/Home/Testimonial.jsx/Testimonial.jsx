import { useEffect } from "react";
import useAxiosPublic from "../../../src/Hooks/useAxiosPublic";
import Heading from "../../../src/components/Heading/Heading";
import Review from "./Review";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  const axios = useAxiosPublic();

  useEffect(() => {
    axios.get("review").then((res) => setReview(res.data));
  }, []);

  return (
    <div className="lg: px-24 px-4">
      <Heading
        text={{ title: "Textimonials", subTitle: "what our client's say" }}
      ></Heading>

      <>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item, index) => (
            <SwiperSlide key={index}>
              <Review person={item} size={item.rating} index={index}></Review>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonial;
