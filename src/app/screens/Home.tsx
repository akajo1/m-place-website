import React, { useEffect, useState } from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import BottomTab from '../components/organisms/BottomTab';
import EventList from '../components/organisms/EventList';
import PubOrg from '../components/organisms/PubOrg';
import { getEvents, getPubs } from '../config/api';

type Props = {}

const Home = (props: Props) => {
  const [events,setEvents]= useState([])
  const [pubs,setPubs]= useState([])
    const getAllArticles = ()=>{
        getEvents().
        then((response)=>{
            const reponse = response.data
            setEvents(reponse);
        })
    }
    const getAllPublicite = ()=>{
      getPubs().
      then((response)=>{
          const reponse = response.data
          setPubs(reponse);
      })
  }
    useEffect(()=>{
       (async ()=>{
        await getAllArticles()
       })()
    },[])
    useEffect(()=>{
      (async ()=>{
       await getAllPublicite()
      })()
   },[])
  return (
    <div className=''>
      <HeaderBar/>
      <div className="container">
      <PubOrg lists={pubs}/>
      <EventList lists={events}/>
      </div>
      <BottomTab active='/'/>
    </div>
  )
}
export default Home;