import K from '../../../constants/slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { diana, kofi, stone } from '../../../assets';

const Reviews = () => {


    return (
        <section className="section">
            <div className='title text-4xl pt-20 pb-4 justify-center'>
                <h2 className=''>Top Reviews</h2>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='size-25 rounded-full justify-center'>
                        <img src={kofi} />
                        <h2>Kofi Kinaata</h2>
                        <p>"Since using Jamboree, my bookings have skyrocketed. It's so easy to manage inquiries, confirm gigs, and send out promotional materials—all from one place. The calendar feature keeps me on track, and the reminders ensure I never miss a beat. I can't imagine managing my music career without it!"</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='size-25 rounded-full justify-center'>
                        <img src={diana} />
                        <h2>Diana Hamilton</h2>
                        <p>"Being on the road from UK to Ghana means I need to stay organized without the hassle.  Jamboree helps me put up all my events and sends reminders, communicate. It's like having a publicity lead on my phone. Definitely the best investment for any music band wanting to streamline their operations."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='size-25 rounded-full justify-center'>
                        <img src={stone} />
                        <h2>StoneBwoy</h2>
                        <p>"Jamboree.. Dem be solid like Bhim! I hear good things from my management team, seems most tickets from our concerts or purchased from their site, we "</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
}

export default Reviews