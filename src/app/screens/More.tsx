import React from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import BottomTab from '../components/organisms/BottomTab';
import { colors } from '../styles/colors';
import {BsTelephoneFill, BsWhatsapp,BsYoutube} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {FaEnvelope, FaFacebook, FaMapMarkerAlt} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
type Props = {}

const More = (props: Props) => {
    const navigate= useNavigate()
  return (
    <div className=''>
      <HeaderBar/>
<div className="more">
<h1 style={{ color: colors.second, fontWeight: "700" ,marginBottom:15,marginTop:'10%'}}>Vous voulez en savoir plus ?</h1>
<ul className="listMenu">
    <li onClick={()=> navigate('/about')}>A Propos de Nous</li>
    <li onClick={()=> navigate('/organisateur')}>Devenir Organisateur</li>
    <li onClick={()=> navigate('/contact')}>Contactez-nous</li>
    <li>
    <div className="networking">
    <div className="icons" onClick={()=> document.location='https://api.whatsapp.com/send?phone=243850953135'}>
        <BsWhatsapp  className='icon'  />
    </div>
    <div className="icons" onClick={()=> document.location=''}>
        <AiFillInstagram  className='icon' />
    </div>
    <div className="icons" onClick={()=> document.location=''}>
        <FaFacebook className='icon' />
    </div>
    <div className="icons" onClick={()=> document.location=''}>
        <BsYoutube className='icon'  />
    </div>
</div>
    </li>
    <li>
        Nos Adresses
    </li>
    <li>
    <div style={{textAlign:'justify',marginBottom:13,display:'flex',alignItems:'center'}}>
<FaMapMarkerAlt size={22} color={colors.second} style={{marginRight:5}}/> 
<div className="">
  <p style={{textAlign:'left'}}> Immeuble Anciennes Galeries Présidentielles, Deuxième niveau, Local 2 M13, Kinshasa – Gombe. </p>
</div>
</div>

<div style={{textAlign:'justify',marginBottom:13,display:'flex',alignItems:'center'}}>
<BsTelephoneFill size={22} style={{marginRight:5,color:colors.second}}/> 
<div className="">
  <p> <span>+243 850 953 135</span> <br/> <span>+243 816 712 981</span> </p>
</div>
</div>
<p style={{textAlign:'justify',marginBottom:13,cursor:'pointer',display:'flex',alignItems:'center'}} onClick={()=> document.location='mailto:bonjour@m-place.events'}>
<FaEnvelope style={{marginRight:5,color:colors.second}}/>bonjour@m-place.events
</p>
    </li>
</ul>

</div>
      <BottomTab active='more'/>
    </div>
  )
}
export default More;