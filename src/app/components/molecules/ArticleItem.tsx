import React from 'react'
import SImage from '../atoms/SImage'
import {useNavigate} from 'react-router-dom'
import { colors } from '../../styles/colors'
import { articleType } from '../../config'
type Props = {
    item:articleType
}

export default function ArticleItem({item}: Props) {
    const navigate  = useNavigate()
  return (
    <div className="articleItem" onClick={()=> navigate('/articleDetail/'+item.token)}>
        <SImage  url={{
            url:item.cover,
            style:{
                width:'100%',
                height:'250px',
                objectFit:'cover',
                borderRadius:'20px'
            }
        }} />
        <p style={{color:colors.white,textAlign:'justify',fontSize:'18px',marginBottom:20,marginTop:5,fontWeight:'700'}}>
            {item.titre.length < 90 ? item.titre : item.titre.substring(0,90)+'...'}
        </p>
    </div>
  )
}