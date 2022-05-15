import React, { useEffect, useState } from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import SImage from '../components/atoms/SImage'
import { colors } from '../styles/colors'
import {ImQrcode} from 'react-icons/im'
import { getBillets, getUser } from '../config/api'
import { billetType, userType } from '../config'
import BilletItem from '../components/molecules/BilletItem'
import WhatsappFloating from '../components/atoms/WhatsappFloating'
type Props = {}

export default function Profil({ }: Props) {
  const navigate = useNavigate()
  const user = localStorage.getItem('mplace-user');
  const [info,setInfo]= useState<userType>()
  const [billets,setBillets]= useState<billetType[]>()
const logout = ()=>{
  localStorage.removeItem('mplace-user')
  navigate('/')
}
  useEffect(()=>{
    if(user === null) { navigate('/')}
  },[])
  useEffect(()=>{
    (
      async ()=>{
        if(user){
          await getUser(user)
          .then((response)=>{
            const reponse = response.data;
            setInfo(reponse)

            getBillets(reponse.id)
            .then((responses)=>{
              const reponses = responses.data;
              setBillets(reponses)
             
            })
          })
        }else {
          localStorage.removeItem('mplace-user')
          navigate('/login')
        }
      }
    )();
  },[billets])
  
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <SImage
        url={{
          url: 'https://www.wallpapertip.com/wmimgs/54-548131_cool-wallpaper-hd.jpg',
          style: { width: '100%', height: '45vh', objectFit: 'cover', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }
        }}
        style={{
          position: 'relative',
          top: 0,
          backgroundColor: colors.second,
          paddingBottom: 5,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          top: 20,
          left: 20,
          cursor: "pointer",
          zIndex: 3,
        }}
        onClick={() => navigate(-1)}
      >
        <BsChevronLeft color={colors.white} size={34} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 40px', alignItems: 'center', position: 'absolute', width: '100%', top: 0, height: '45vh' }}>
        <div className="">
          <h1 style={{
            color: colors.white,
            fontWeight: '700'
          }}>
            {info?.nom}
          </h1>
          <h5 style={{ color: colors.white, fontSize: 18, marginTop: 5 }}>{info?.tel}</h5>
          <button style={{ backgroundColor: colors.danger, color: colors.white, border: 'none', height: 30, width: 120, borderRadius: 20, marginTop: 20, cursor: 'pointer' }} onClick={()=> logout()}>Se deconnecter</button>
        </div>
        <SImage
          url={{
            url: 'https://www.wallpapertip.com/wmimgs/54-548131_cool-wallpaper-hd.jpg',
            style: { width: 140, height: 140, objectFit: 'cover', borderRadius: 70 }
          }}
          style={{
            position: 'relative',
            top: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.second,
            borderRadius: '100%',
            width: 150,
            height: 150
          }}
        />
      </div>

     <div style={{padding:'20px'}}>
     <h1 style={{color:colors.white}}>Mes billets</h1>
      <h4 style={{color:colors.second,marginBottom:30}}>Evenement</h4>
     {/* { <div style={{backgroundColor:colors.success,padding:10,borderRadius:20,marginBottom:10}}>
        
        La durée maximale de réception de vos billets achetés est de 24 heures. 
  
  Si ce délai est passé et que vous ne recevez toujours pas vos billets, votre argent vous sera restitué. <br/>
  
  En cas d'echec de paiement, le temps de restitution d'argent est de 24 heures après examen.
  
        </div>} */}
        <div style={{backgroundColor:colors.white,padding:10,borderRadius:20,marginBottom:10}}>
        Notre Service Client est disponible 24/7, juste en cliquant sur le bouton whatsapp flottant .
  
  </div>
    {
      billets?.map((item,index)=> <BilletItem billet={item} key={index}/>)
    }
     </div>
     <WhatsappFloating bottom='5%'/>
    </div>
  )
}