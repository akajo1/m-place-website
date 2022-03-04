import React, { useEffect, useState } from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import BottomTab from '../components/organisms/BottomTab';
import EventList from '../components/organisms/EventList';
import PubOrg from '../components/organisms/PubOrg';
import { getEvents, getPubs } from '../config/api';
import { colors } from '../styles/colors';

type Props = {}

const Home = (props: Props) => {
  const [events,setEvents]= useState([])
  const [pubs,setPubs]= useState([])
  const error = localStorage.getItem('message')
  
    const getAllArticles = ()=>{
        getEvents().
        then((response)=>{
            const reponse = response.data
            setEvents(reponse);
            console.log(reponse)
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

   if(error !=null){
     setTimeout(()=>{
        localStorage.removeItem('message')
     },3000)
   }
  return (
    <div className=''>
      <HeaderBar/>
      <div className="container">
      {
               error !=null &&  <div style={{backgroundColor:colors.success,color:colors.white,padding:'10px 20px',borderRadius:20,width:'90%',margin:'0 auto',textAlign:'center'}}>{error}</div>
           }
      <PubOrg lists={pubs}/>
      <EventList lists={events}/>
      </div>
      <BottomTab active='/'/>
    </div>
  )
}
export default Home;