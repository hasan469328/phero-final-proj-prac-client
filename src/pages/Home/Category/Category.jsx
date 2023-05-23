import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <SectionTitle heading='order online' subheading='---From 11:00am to 10:00pm---'></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img className="w-full" src={slider1} alt="" />
          <p className="text-4xl -mt-24 uppercase text-white text-center">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider2} alt="" />
          <p className="text-4xl -mt-24  uppercase text-white text-center">
            pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider3} alt="" />
          <p className="text-4xl -mt-24  uppercase text-white text-center">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider4} alt="" />
          <p className="text-4xl -mt-24  uppercase text-white text-center">
            dessert
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider5} alt="" />
          <p className="text-4xl -mt-24 uppercase text-white text-center">
            salad
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
