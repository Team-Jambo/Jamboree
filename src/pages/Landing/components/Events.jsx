import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { bibi, eleven, eventeight, eventfive, eventfour, eventnine, eventone, eventsev, eventsix, eventte, eventthree, eventtwo, twelve, kiki, lala } from "../../../assets"
import EventsCard from "../../../components/EventsCard"
import axios from "axios"



const Events = () => {
  // define navigation
  const navigate = useNavigate()
  // define a state used to store the data (in this case events)
  const [events, setEvents] = useState([])

  // define a function to fetch data (in this case events)
  const getEvents = async () => {
    try{
    const response = await axios.get('https://jambo-run-2.onrender.com/events');
    if (response.status === 200) {
      setEvents(response.data);
      console.log(response.data)
    } else {
      setEvents([]);
    }

    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    }

    }

  // get the event  using the function above
  useEffect(() => {
    getEvents();

  }, []);

  return (
    <div className=" px-10 py-10">
      <div className="flex justify-center text-4xl text-red-900 font-bold pt-10 pb-3 ">
        <h2>Top Events</h2>
      </div>

      <div className='grid grid-cols-4 gap-5 justify-center border-r-4 w-100'>

        {events.length > 0 ? (
        events.map((event) => (
          <EventsCard
            image={`https://savefiles.org/${event.imageUrl}?shareable_link=259`}
            name={event.name}
            date={event.date}
            price={event.ticketPrice} 
            />
        ))
        ) : (
        <p>No events available</p>  
        )}
      </div>

      <div className="flex justify-center">
        <button className=" text-white hover: bg-red-900  hover:bg-black active:bg-yellow-50 rounded-3xl w-40 h-10 font-bold mt-7 button " onClick={() => navigate("./events")}>VIEW MORE</button>
      </div>
    </div>
  )
}

export default Events