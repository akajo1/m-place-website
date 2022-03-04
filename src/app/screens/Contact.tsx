import React from 'react'
import { BsChevronLeft, BsPhoneFill, BsTelephoneFill } from 'react-icons/bs'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { image } from '../assets'
import SImage from '../components/atoms/SImage'
import { colors } from '../styles/colors'

type Props = {}

export default function Contact({}: Props) {
  const navigate = useNavigate()
  return (
    <>
    <div style={{width:'100%',height:300,backgroundColor:colors.second,display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#00000016',borderRadius:'100%'}}>
     <SImage
        url={{
          url:image.logo,
          style:{
            width:150
          }
        }}
      />
     </div>
    </div>
    <div style={{padding:'20px 30px'}}>
      <div
        style={{
          
          width: 40,
          height: 80,
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          top: 20,
          
          cursor: "pointer",
          zIndex: 3,
        }}
        onClick={() => navigate(-1)}
      >
        <BsChevronLeft color={colors.second} size={34} />
      </div>
     <div style={{color:colors.white}}>
     <h1 style={{marginBottom:20}}>Vous avez besoin d’aide ?</h1> 
     <p style={{marginBottom:10}}>
     Discutez avec nos conseillers experts
De  9h à 19h du lundi au vendredi<br/><br/>
<span style={{fontWeight:'700',fontSize:22}}>+243 </span>
Participants & Acheteurs<br/><br/>
<i><b>Vous avez réservé un évènement par l’intermédiaire de m-place.events et avez besoin d’aide ?</b> </i><br/><br/>
<span style={{fontSize:18,fontWeight:'700'}}>Contactez-nous</span> <br/>
<span onClick={()=> document.location='mailto:bonjour@m-place.events'} style={{color:colors.second,cursor:'pointer'}}>bonjour@m-place.events</span> 
     </p>
    


     </div>


    </div>
    </>
  )
}