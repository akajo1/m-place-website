import React from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import BottomTab from '../components/organisms/BottomTab';
import { colors } from '../styles/colors';
import {BsWhatsapp,BsYoutube} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
type Props = {}

const More = (props: Props) => {
    const navigate= useNavigate()
  return (
    <div className=''>
      <HeaderBar/>
<div className="more">
<h1 style={{ color: colors.second, fontWeight: "700" ,marginBottom:15,marginTop:10}}>Vous voulez en savoir plus ?</h1>
<ul className="listMenu">
    <li onClick={()=> navigate('/about')}>A Propos de Nous</li>
    <li onClick={()=> navigate('/organiseur')}>Devenir Organisateur</li>
    <li onClick={()=> navigate('contact')}>Contactez-nous</li>
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
</ul>

</div>
      <BottomTab active='more'/>
    </div>
  )
}
export default More;