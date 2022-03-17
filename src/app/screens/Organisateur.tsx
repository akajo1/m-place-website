import React from 'react'
import { BsChevronLeft, BsPhoneFill, BsTelephoneFill } from 'react-icons/bs'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { image } from '../assets'
import SImage from '../components/atoms/SImage'
import { colors } from '../styles/colors'

type Props = {}

export default function Organisateur({}: Props) {
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
      <h1 style={{marginBottom:20}}>Equipe Commerciale </h1>
<p style={{textAlign:'left',marginBottom:13}}>
Vous êtes organisateur ? Contactez notre équipe commerciale et nos experts pour en savoir plus sur les solutions M-PLACE.EVENTS
</p>
<div style={{textAlign:'left',marginBottom:13,display:'flex',alignItems:'center'}}>
<FaMapMarkerAlt size={22} color={colors.second} style={{marginRight:5}}/> <div className="">
  <p> Immeuble Anciennes Galeries Présidentielles, Deuxième niveau, Local 2 M13, Kinshasa – Gombe. </p>
</div>
</div>

<div style={{textAlign:'left',marginBottom:13,display:'flex',alignItems:'center'}}>
<BsTelephoneFill size={22} style={{marginRight:5,color:colors.second}}/> 
<div className="">
  <p> <span>+243 850 953 135</span> <br/> <span>+243 816 712 981</span> </p>
</div>
</div>
<p style={{textAlign:'left',marginBottom:13,cursor:'pointer',display:'flex',alignItems:'center'}} onClick={()=> document.location='mailto:bonjour@m-place.events'}>
<FaEnvelope style={{marginRight:5,color:colors.second}}/>bonjour@m-place.events
</p>


      </div>
    </div>
    </>
  )
}