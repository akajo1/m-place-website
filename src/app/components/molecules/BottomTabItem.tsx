import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/colors'

type Props = {
    icon:any,
    title:string,
    link:string,
    active?:string
}

export default function BottomTabItem({icon,title,link,active}: Props) {
 
  return (
   <Link to={link} className='linking'>
   <div className={"bottomTabItem "+(active == link && "active")}>
       {icon}
       <p>{title}</p>
   </div>
   </Link>
  )
}