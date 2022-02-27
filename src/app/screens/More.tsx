import React from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import BottomTab from '../components/organisms/BottomTab';
import { colors } from '../styles/colors';
import {BsWhatsapp,BsYoutube} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
type Props = {}

const More = (props: Props) => {
  return (
    <div className=''>
      <HeaderBar/>
<div className="more">
<h1 style={{ color: colors.second, fontWeight: "700" ,marginBottom:15,marginTop:10}}>Vous voulez en savoir plus ?</h1>
<ul className="listMenu">
    <li>A Propos de Nous</li>
    <li>Devenir Organisateur</li>
    <li>Contactez-nous</li>
    <li>
    <div className="networking">
    <div className="icons">
        <BsWhatsapp  className='icon'  />
    </div>
    <div className="icons">
        <AiFillInstagram  className='icon' />
    </div>
    <div className="icons">
        <FaFacebook className='icon' />
    </div>
    <div className="icons">
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