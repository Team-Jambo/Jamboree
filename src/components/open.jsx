import React from 'react'
import {eleven, eventeight, eventfive, eventfour, eventnine, eventone, eventsix, eventte, eventthree, eventtwo,  } from "../../../assets"

const open = () => {
  return (
    <div className='grid grid-cols-4 gap-5 justify-center border-r-4 w-100'>
        <img src={twelve} alt="{name}" />
        <img src={eventfour} alt="{name}" />
        <img src={eventthree} alt="{name}" />
        <img src={eventeight} alt="{name}" />
        <img src={eventfive} alt="{name}" />
        <img src={eventone} alt="{name}" />
        <img src={eventnine} alt="{name}" />
        <img src={eleven} alt="{name}" />
        <img src={eventtwo} alt="{name}" />
        <img src={eventsix} alt="{name}" />
    </div>
  )
}

export default open