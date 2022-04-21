import React, { useEffect, useState } from 'react'
import SImage from '../components/atoms/SImage';
import {BsChevronLeft} from 'react-icons/bs'
import { colors } from '../styles/colors';
import {useNavigate, useParams} from 'react-router-dom'
import { articleType } from '../config';
import { getNew } from '../config/api';
import LazyAnimate from '../components/molecules/LazyAnimate';
import Helmet from '../components/molecules/Helmet';
import nl2br from 'react-nl2br'
type Props = {}

export default function ArticleDetail({}: Props) {
    const navigate = useNavigate()
    const {token} = useParams()
    const [article, setArticle]= useState<articleType>()
    const [load, setLoad]= useState(true)

    useEffect(()=>{
        (async ()=>{
            setLoad(true)
            if(token !== undefined){
                await getNew(token).
                then((response)=>{
                    setArticle(response.data)
                    setLoad(false)
                })
            }
        })()
    },[])
  return (
   <div className="eventDetail">
{
    article && <Helmet title={article.titre} description={article.description} image={article.image}/>

}
       {
           load && <LazyAnimate/>
       }


       <div style={{position:'absolute',width:80,height:80,borderRadius:40,backgroundColor:'#000000ce',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'700',top:20,left:20,cursor:'pointer'}} onClick={()=> navigate(-1)}>
           <BsChevronLeft  color={colors.white} size={24}/>
       </div>
       <SImage
            url={{
                url:''+ article?.image,
                style:{
                    width:'100%',
                    height:'300px',
                    objectFit:'cover',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                }
            }}
       />
       <div style={{padding:'20px 10px'}}>
       <h2 style={{color:colors.white,fontWeight:'700',marginBottom:15}}>{article?.titre}</h2>
     
    <p style={{color:colors.white}}>{nl2br(article?.description)}</p>
       </div>
   </div>
  )
}