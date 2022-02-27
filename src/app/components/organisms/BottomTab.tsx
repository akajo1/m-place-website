import React from 'react'
import { colors } from '../../styles/colors'
import BottomTabItem from '../molecules/BottomTabItem'
import {AiFillHome } from 'react-icons/ai';
import {MdOndemandVideo,MdOutlineArticle,MdOutlineMenuOpen} from 'react-icons/md'
type Props = {
  active:string
}

export default function BottomTab({active}: Props) {
  return (
    <div className="bottomTab">
        <BottomTabItem active={(active && active == '/') ? '/':''} link='/' icon={<AiFillHome  className='icon' size={23}/>} title='home'/>
        <BottomTabItem active={(active && active == 'news') ? 'news':''}   link='news' icon={<MdOutlineArticle  className='icon' size={23}/>} title='News'/>
        <BottomTabItem active={(active && active == 'videos') ? 'videos':''}  link='videos' icon={<MdOndemandVideo  className='icon' size={23}/>} title='Vidéos'/>
        <BottomTabItem active={(active && active == 'more') ? 'more':''}  link='more' icon={<MdOutlineMenuOpen  className='icon' size={23}/>} title='More'/>
        
    </div>
  )
}