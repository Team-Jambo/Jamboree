import { Heart } from 'lucide-react';
import React from 'react'


const EventsCard = ({ image, name }) => {
    return (


        <div className='relative rounded-[12px] shadow-2xl overflow-hidden hover:bg-violet-300 active:bg-violet-400 focus:outline-1 focus:ring ' >
            <div className='absolute bottom-20 right-3 rounded-[8px] flex justify-center items-center'>
                <Heart className=' border-neutral-800' />
            </div>

            <div className=" flex flex-row relative pb-20 gap-x-10 overflow-x-hidden">
                <img src={image} alt={name} className='w-full h-[300px] object-cover' />
                <p className="absolute left-2 bottom-10 text-black font-bold  ">{name}</p>
                <p></p>
            </div>

        </div>

    );

}

export default EventsCard