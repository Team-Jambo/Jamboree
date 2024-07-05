import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { africa, sliderfour, sliderone, sliderten, slidertree, slidertwo, whizz } from '../../../assets';
import {useNavigate} from "react-router-dom"



const Hero = () => {
  const navigate = useNavigate()
  return (

    <div className="h-full w-full">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
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
          <img src={africa} />
        </SwiperSlide>
      </Swiper>
      <div className='absolute top-0 left-0 h-full w-full z-40 flex flex-col justify-center items-center text-white gap-y-5' >
        <h1 className='font-bold text-7xl text-center pt-20'>Let your event reach the clouds<br /></h1>
        <h3 className='text-4xl text: decoration-slate-50 italic animate-[wiggle_1s_ease-in-out_infinite]'>GOOD time to GET the world talking your event</h3>
        <h5 className='text-lg text: decoration-slate-50 font-mono'>INDOOR CONCERTS | OUTDOOR CONCERTS | SHOWS | MUSICALES </h5>
        <button className='text-black hover: bg-violet-400  hover:bg-white active:bg-yellow-50 rounded-3xl w-40 h-10 font-bold mt-7 button ' onClick={() =>navigate("./contact")}>CREATE AN EVENT</button>
      </div>
    </div>
  );
};

export default Hero;
