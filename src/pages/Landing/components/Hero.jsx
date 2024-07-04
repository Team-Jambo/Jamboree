import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { sliderfour, sliderone, sliderten, slidertwo } from '../../../assets';



const Hero = () => {
  return (

    <div className="h-full w-full relative">


      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sliderten} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidertwo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderfour} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderone} />
        </SwiperSlide>
      </Swiper>
      <div className='absolute top-0 left-0 h-full w-full z-40 flex flex-col justify-center items-center text-white gap-y-5' >
        <h1 className='font-bold text-8xl text-center'>Your trusted partners in event creation <br /></h1>
          <h3 className='text-4xl text: decoration-slate-50 italic '>Get the world talking about your events</h3>
        <button className='text-black bg-white rounded-3xl w-40 h-10 font-extrabold mt-7'>Create an Event</button>
      </div>
    </div>


  );
}

export default Hero