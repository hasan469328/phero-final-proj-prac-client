import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mb-20">
      <section>
        <SectionTitle
          heading={"TESTIMONIALS"}
          subheading={"---What Our Clients Say---"}
        ></SectionTitle>
      </section>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col justify-center items-center text-center px-24 py-12">
              <Rating className="mb-20" style={{ maxWidth: 220 }} value={review.rating} readOnly />
              <FaQuoteLeft className="mb-10 text-7xl"/>
              <p className="text-[#444444] text-xl mb-2">{review.details}</p>
              <p className="text-[#CD9003] text-3xl">{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
