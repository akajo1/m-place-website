import React from 'react'
import { ImQrcode } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import { billetType } from '../../config'
import { colors } from '../../styles/colors'

type Props = {
    billet:billetType
}

export default function BilletItem({billet}: Props) {
    const navigate = useNavigate()
  return (
    <div style={{display:'flex',backgroundColor:colors.darkLight,padding:'10px',borderRadius:30,alignItems:'center',cursor:'pointer'}} onClick={()=> navigate('/code/'+billet.token)}>
    <div style={{backgroundColor:colors.black,width:60, height:60,borderRadius:30,display:'flex',justifyContent:'center',alignItems:'center',marginRight:15}}>
      <ImQrcode color={colors.white} size={24}/>
    </div>
    <div>
      <h3 style={{color:colors.white}}>{billet.evenement}</h3>
      <h5 style={{color:'#ccc'}}>prévu pour le {billet.date} à {billet.heure}</h5>
      <h3 style={{color:colors.second}}>{billet.prix}$ USD</h3>
    </div>
  </div>
  )
}