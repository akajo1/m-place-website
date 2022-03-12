import React,{useEffect,useState} from 'react'
import Qrcode from 'qrcode'
import { BsChevronLeft } from 'react-icons/bs'
import { colors } from '../styles/colors'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../config'
import { getBilletInfo } from '../config/api'
import SImage from '../components/atoms/SImage'
import OnLoad from '../components/molecules/OnLoad'
import LazyAnimate from '../components/molecules/LazyAnimate'
type Props = {}
type Billet = {
  id: number,
  token: string,
  titre: string,
  organisateur: string,
  portrait: string,
  tarifs: string,
  prix: number,
  date: string,
  heure: string,
  ischeck: boolean
}
export default function Code({}: Props) {
  const {token}= useParams()
  const [src,setSrc]= useState('');
  const [billet,setBillet]= useState<Billet|null>(null);
  const [load,setLoad]= useState<Boolean>(true);
  const navigate =useNavigate()
  useEffect(()=>{
    setLoad(true)
    getBilletInfo(token!)
    .then(response=>{
      setLoad(false)
      const reponse = response.data
        if(reponse !=null){
          setBillet(reponse)
          Qrcode.toDataURL(reponse.token).then((data)=>{
            setSrc(data)
          })
        }
    })
  },[])
  
  return (
   <div style={{backgroundColor:'#fff',width:'100%',height:'100vh'}}>
     {load && <LazyAnimate/>}
     
      <div style={{width:'100%',minHeight:400,display:'flex',justifyContent:'center',alignItems:'center'}}>
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
      <h3>{billet?.token}</h3>
      </div>
      <div style={{width:'100%',textAlign:'center',marginBottom:30}}>
      <h4>EVENEMENT</h4>
      <h2>{billet?.titre}</h2>
      <h5>{billet?.organisateur}</h5>
      <div>
        <SImage
            url={{
              url:''+billet?.portrait,
              style:{
                width:200,
                height:50,
                objectFit:'cover',
                marginTop:30
              }
            }}
          />
      </div>
      </div>
   </div>
  )
}