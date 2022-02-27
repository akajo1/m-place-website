import React from 'react'
import SImage from '../atoms/SImage'
import {useNavigate} from 'react-router-dom'
import { colors } from '../../styles/colors'
type Props = {}

export default function ArticleItem({}: Props) {
    const navigate  = useNavigate()
  return (
    <div className="articleItem" onClick={()=> navigate('')}>
        <SImage  url={{
            url:'https://cdn.pixabay.com/photo/2022/02/04/10/31/cow-6992475_1280.jpg',
            style:{
                width:'100%',
                height:'250px',
                objectFit:'cover',
                borderRadius:'20px'
            }
        }} />
        <p style={{color:colors.white,textAlign:'justify',fontSize:'18px',marginBottom:20,marginTop:5,fontWeight:'700'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel consequatur ut repellendus. Ipsam aliquam quaerat magnam explicabo minima voluptatibus 
        </p>
    </div>
  )
}