import { bibi, eleven, eventeight, eventfive, eventfour, eventnine, eventone, eventsev, eventsix, eventte, eventthree, eventtwo, twelve, kiki, lala } from "../../../assets"
import EventsCard from "../../../components/EventsCard"


const Events = () => {
  return (
    <div className=" px-10 py-10">
      <div className="flex justify-center  text-4xl text-red-900 font-bold pt-10 pb-3 ">
        <h2>Search for All Events</h2>
      </div>

      <div className='grid grid-cols-4 gap-5 justify-center border-r-4 w-100'>
        <EventsCard image={eventone}
          name="KOFI KINAATA LIVE"
          date="25 AUG"
          price="Ghs50.00" />
        <EventsCard image={eventtwo}
          name="AWAKE EXPERIENCE"
          date="02 SEP"
          price="Ghs200.00" />
        <EventsCard image={eventthree}
          name="ASHAIMAN TO DA WORLD"
          date="15 DEC"
          price="Ghs30.00" />
        <EventsCard image={lala}
          name="THE EXPERIENCE"
          date="19 OCT"
          price="FREE" />
        <EventsCard image={eventfive}
          name="THE OUTPOURING"
          date="11 JUL"
          price="Free" />
        <EventsCard image={eventsix}
          name="SINACH LIVE IN CONCERT"
          date="25 JUL"
          price="Free" />
        <EventsCard image={eventsev}
          name="KIDS MUSIC FESTIVAL"
          date="19 NOV"
          price="Ghs100.00" />
        <EventsCard image={eventeight}
          name="THE VGMA AWARDS"
          date="03 JUN"
          price="Ghs500.00" />
        <EventsCard image={eventnine}
          name="UNITY LINK WORSHIP"
          date="09 AUG"
          price="Ghs200.00" />
        <EventsCard image={eventte}
          name="YADAH LIVE"
          date="02 AUG"
          price="Ghs80.00" />
        <EventsCard image={kiki}
          name="GOSPEL MUSIC EXHIBITION"
          date="25 DEC"
          price="Ghs50.00" />
        <EventsCard image={twelve}
          name="EXPERIENCE - UK"
          date="25 FEB"
          price="FREE" />
      </div>
    </div>
  )
}

export default Events