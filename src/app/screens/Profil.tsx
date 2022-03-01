import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import SImage from '../components/atoms/SImage'
import { colors } from '../styles/colors'
import {ImQrcode} from 'react-icons/im'
type Props = {}

export default function Profil({ }: Props) {
  const navigate = useNavigate()
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
            jospin AGAROWA
          </h1>
          <h5 style={{ color: colors.white, fontSize: 18, marginTop: 5 }}>0990753266</h5>
          <button style={{ backgroundColor: colors.danger, color: colors.white, border: 'none', height: 30, width: 120, borderRadius: 20, marginTop: 20, cursor: 'pointer' }}>Se deconnecter</button>
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
    <div style={{display:'flex',backgroundColor:colors.darkLight,padding:'10px',borderRadius:30,alignItems:'center',cursor:'pointer'}} onClick={()=> navigate('/code/1234')}>
      <div style={{backgroundColor:colors.black,width:60, height:60,borderRadius:30,display:'flex',justifyContent:'center',alignItems:'center',marginRight:15}}>
        <ImQrcode color={colors.white} size={24}/>
      </div>
      <div>
        <h3 style={{color:colors.white}}>Yamaha Drums Show</h3>
        <h5 style={{color:'#ccc'}}>prévu pour le 20/2/2022</h5>
        <h3 style={{color:colors.second}}>18$ USD</h3>
      </div>
    </div>
     </div>
    </div>
  )
}