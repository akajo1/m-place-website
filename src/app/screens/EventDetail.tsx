import React, { useEffect, useState } from 'react'
import SImage from '../components/atoms/SImage';
import {BsChevronLeft} from 'react-icons/bs'
import { colors } from '../styles/colors';
import {BiCalendarEvent, BiUser} from 'react-icons/bi';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BiMapAlt} from 'react-icons/bi';
import {GiTicket} from 'react-icons/gi';
import {useNavigate, useParams} from 'react-router-dom';
import { getBillett, getEvent } from '../config/api';
import { baseImage, baseUrl, billetTType, eventType } from '../config';
import LazyAnimate from '../components/molecules/LazyAnimate';
import Helmet from '../components/molecules/Helmet';

type Props = {}


export default function EventDetail({}: Props) {
    const navigate= useNavigate();
    const {token}= useParams()
    const [event,setEvent]= useState<eventType>()
    const [load,setLoad]= useState(true)
    const user= localStorage.getItem('mplace-user')
    const [billets,setBillets]= useState<billetTType[]>([])
    useEffect(()=>{
        (async ()=>{
            setLoad(true)
            if(token !== undefined){
                await getEvent(token).
                then((response)=>{
                    getBillett(response.data.id)
                    .then((reponse)=>{
                      if(reponse.data !=null){
                        setBillets(reponse.data)
                      }
                    })
                    
                    setEvent(response.data)
                    setLoad(false)
                })
            }
            
           
        })()
    },[])
   
  return (
   <div className="eventDetail">
       <Helmet title={event?.titre!} description={event?.description!} image={event?.cover!}/>
       { load && <LazyAnimate/>}
       <div style={{position:'absolute',width:80,height:80,borderRadius:40,backgroundColor:'#000000ce',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'700',top:20,left:20,cursor:'pointer'}} onClick={()=> navigate(-1)}>
           <BsChevronLeft  color={colors.white} size={24}/>
       </div>
       <SImage
            url={{
                url:''+event?.cover,
                style:{
                    width:'100%',
                    height:'300px',
                    objectFit:'cover',
                    borderBottomLeftRadius:40,
                    borderBottomRightRadius:40
                }
            }}
       />
       <div style={{padding:'20px 10px'}}>
       <h2 style={{color:colors.white,fontWeight:'700'}}>{event?.titre}</h2>
       <h4 style={{padding:'5px 10px',borderRadius:20,backgroundColor:colors.second,width:100,textAlign:'center',marginTop:15}}>Details</h4>
       <ul style={{color:colors.white,marginTop:20}}>
           <li style={{listStyle:'none',marginBottom:10}}><BiCalendarEvent/> Date : <span style={{fontWeight:'700',fontSize:20,marginLeft:10}}>{event?.date}</span></li>
           <li style={{listStyle:'none',marginBottom:10}}><AiOutlineClockCircle/> Heure : <span style={{fontWeight:'700',fontSize:20,marginLeft:10}}>{event?.heure}</span> </li>
           <li style={{listStyle:'none',marginBottom:10}}><BiMapAlt/> Lieu : <span style={{fontWeight:'700',fontSize:20,marginLeft:10}}>{event?.lieu}</span> </li>
           <li style={{listStyle:'none',marginBottom:10}}><BiUser/> Organisateur : <span style={{fontWeight:'700',fontSize:20,marginLeft:10}}>{event?.organisateur}</span></li>
           <li style={{listStyle:'none',marginBottom:10}}>
               <GiTicket/> Billet <br/>
               {
                  (billets && billets.length>0) ? billets.map((item)=> <><span style={{fontWeight:'700',fontSize:20,marginLeft:10,color:'#fff'}}>{item.prix}$ USD({item.tarifs}) </span><br/></>) :'test'
               }
               </li>
       </ul>
       <div style={{display:'flex',justifyContent:'space-evenly',marginBottom:30}}>
       <p style={{padding:'10px',borderRadius:20,backgroundColor:colors.second,width:140,textAlign:'center',marginTop:15,fontWeight:'700',cursor:'pointer',fontSize:14}} onClick={()=> (user === null) ? navigate('/login') : navigate('/pay/'+user+'/'+event?.token_event) }>Acheter le billet</p>
       <p style={{padding:'10px',borderRadius:20,backgroundColor:colors.second,width:140,textAlign:'center',marginTop:15,fontWeight:'700',cursor:'pointer',fontSize:14}} onClick={()=> document.location=''}>Contactez-nous</p>
        
       </div>
       </div>
   </div>
  )
}