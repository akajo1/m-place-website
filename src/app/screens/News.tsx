import React, { useEffect, useState } from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import ArticlesList from '../components/organisms/ArticlesList';
import BottomTab from '../components/organisms/BottomTab';
import { getEvents, getNews } from '../config/api';

type Props = {}

const News = (props: Props) => {
    const [arts,setArts]= useState([])
    const getAllArticles = ()=>{
        getNews().
        then((response)=>{
            const reponse = response.data
            setArts(reponse);
        })
    }
    useEffect(()=>{
       (async ()=>{
        await getAllArticles()
       })()
    },[])
  return (
    <div className=''>
      <HeaderBar/>
      <ArticlesList lists={arts}/>
      <BottomTab active='news'/>
    </div>
  )
}
export default News;