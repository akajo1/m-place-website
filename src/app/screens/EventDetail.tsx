import React from 'react'
import SImage from '../components/atoms/SImage';
import {BsChevronLeft} from 'react-icons/bs'
import { colors } from '../styles/colors';
import {BiCalendarEvent, BiUser} from 'react-icons/bi';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BiMapAlt} from 'react-icons/bi';
import {GiTicket} from 'react-icons/gi';
import {useNavigate} from 'react-router-dom';
type Props = {}

export default function EventDetail({}: Props) {
    const navigate= useNavigate()
  return (
   <div className="eventDetail">
       <div style={{position:'absolute',width:80,height:80,borderRadius:40,backgroundColor:'#000000ce',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'700',top:20,left:20,cursor:'pointer'}} onClick={()=> navigate(-1)}>
           <BsChevronLeft  color={colors.white} size={24}/>
       </div>
       <SImage
            url={{
                url:'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg',
                style:{
                    width:'100%',
                    height:'60vh',
                    objectFit:'cover'
                }
            }}
       />
       <div style={{padding:'20px 10px'}}>
       <h2 style={{color:colors.white,fontWeight:'700'}}>Yamaha Drums Shown</h2>
       <h4 style={{padding:'5px 10px',borderRadius:20,backgroundColor:colors.second,width:100,textAlign:'center',marginTop:15}}>Details</h4>
       <ul style={{color:colors.white,marginTop:20}}>
           <li style={{listStyle:'none',marginBottom:10}}><BiCalendarEvent/> Date : <span style={{fontWeight:'700',fontSize:20,marginLeft:10}}>20/2/20222</span></li>
           <li style={{listStyle:'none',marginBottom:10}}><AiOutlineClockCircle/> Heure : <span style={{fontWeight:'700',fontSize:20,marginLeft:10}}>11 h</span> </li>
           <li style={{listStyle:'none',marginBottom:10}}><BiMapAlt/> Lieu : <span style={{fontWeight:'700',fontSize:20,marginLeft:10}}>Ngaliema / botour</span> </li>
           <li style={{listStyle:'none',marginBottom:10}}><BiUser/> Organisateur : <span style={{fontWeight:'700',fontSize:20,marginLeft:10}}>akajoDev</span></li>
           <li style={{listStyle:'none',marginBottom:10}}><GiTicket/> Billet : <span style={{fontWeight:'700',fontSize:20,marginLeft:10}}>10 $</span></li>
       </ul>
       <div style={{display:'flex',justifyContent:'space-evenly'}}>
       <p style={{padding:'5px 10px',borderRadius:20,backgroundColor:colors.second,width:180,textAlign:'center',marginTop:15,fontWeight:'700'}}>Acheter le billet</p>
       <p style={{padding:'5px 10px',borderRadius:20,backgroundColor:colors.second,width:180,textAlign:'center',marginTop:15,fontWeight:'700'}}>Contactez-nous</p>
        
       </div>
       </div>
   </div>
  )
}