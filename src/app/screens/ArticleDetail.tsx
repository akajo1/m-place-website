import React, { useEffect, useState } from 'react'
import SImage from '../components/atoms/SImage';
import {BsChevronLeft} from 'react-icons/bs'
import { colors } from '../styles/colors';
import {useNavigate, useParams} from 'react-router-dom'
import { articleType } from '../config';
import { getNew } from '../config/api';
type Props = {}

export default function ArticleDetail({}: Props) {
    const navigate = useNavigate()
    const {token} = useParams()
    const [article, setArticle]= useState<articleType>()

    useEffect(()=>{
        (async ()=>{
            if(token !== undefined){
                await getNew(token).
                then((response)=>{
                    setArticle(response.data)
                })
            }
        })()
    },[])
  return (
   <div className="eventDetail">
       <div style={{position:'absolute',width:80,height:80,borderRadius:40,backgroundColor:'#000000ce',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'700',top:20,left:20,cursor:'pointer'}} onClick={()=> navigate(-1)}>
           <BsChevronLeft  color={colors.white} size={24}/>
       </div>
       <SImage
            url={{
                url:''+ article?.image,
                style:{
                    width:'100%',
                    height:'60vh',
                    objectFit:'cover'
                }
            }}
       />
       <div style={{padding:'20px 10px'}}>
       <h1 style={{color:colors.white,fontWeight:'700',marginBottom:15}}>{article?.titre}</h1>
     
    <p style={{color:colors.white,textAlign:'justify'}}>{article?.description}</p>
       </div>
   </div>
  )
}