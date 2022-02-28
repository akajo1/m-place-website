import React from 'react'
import { Link } from 'react-router-dom'
type Props = {
    lien?:string,
    icon: any,
    active?: boolean
}

const SIcon:React.FC<Props>=({lien='',icon,active})=>{
  return (
    <Link to={lien} className={'link '+(active && 'active')}>
        {icon}
    </Link>
        
  )
}

export default SIcon;