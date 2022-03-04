import React,{useEffect,useState} from 'react'
import Qrcode from 'qrcode'
import { BsChevronLeft } from 'react-icons/bs'
import { colors } from '../styles/colors'
import { useNavigate } from 'react-router-dom'
type Props = {}

export default function Code({}: Props) {
  const [src,setSrc]= useState('');
  const navigate =useNavigate()
  useEffect(()=>{
    Qrcode.toDataURL('akajo').then((data)=>{
      setSrc(data)
    })
  },[])
  return (
   <div style={{backgroundColor:'#fff',width:'100%',height:'100vh'}}>
      <div style={{width:'100%',height:400,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{textAlign:'center'}}>
      <img src={src} style={{width:220}}/>
      <h4 style={{marginTop:-20}}>SCANNER LE CODE</h4>
      </div>
      </div>
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
        <BsChevronLeft color={colors.black} size={34} />
      </div>

      <div style={{width:'100%',textAlign:'center',marginBottom:30}}>
      <h4>TOKEN VALIDATION</h4>
      <h1>123456789ddgd</h1>
      </div>
      <div style={{width:'100%',textAlign:'center',marginBottom:30}}>
      <h4>EVENEMENT</h4>
      <h1>YAMAHA Dumbs Shoe</h1>
      <h5>AkajoDev</h5>
      </div>
   </div>
  )
}