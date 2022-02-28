import React from 'react'
import SImage from '../components/atoms/SImage';
import {BsChevronLeft} from 'react-icons/bs'
import { colors } from '../styles/colors';
import {useNavigate} from 'react-router-dom'
type Props = {}

export default function ArticleDetail({}: Props) {
    const navigate = useNavigate()
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
       <h1 style={{color:colors.white,fontWeight:'700',marginBottom:15}}>Yamaha Drums Shown</h1>
     
    <p style={{color:colors.white}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae libero ut similique cum a vero, inventore qui! Delectus vel, corporis doloremque explicabo, quisquam praesentium pariatur error ipsum assumenda reiciendis quibusdam?</p>
       </div>
   </div>
  )
}