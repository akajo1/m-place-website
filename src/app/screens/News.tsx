import React, { useEffect, useState } from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import Helmet from '../components/molecules/Helmet';
import LazyAnimate from '../components/molecules/LazyAnimate';
import ArticlesList from '../components/organisms/ArticlesList';
import BottomTab from '../components/organisms/BottomTab';
import { getEvents, getNews } from '../config/api';

type Props = {}

const News = (props: Props) => {
    const [arts,setArts]= useState([])
    const [load,setLoad]= useState(true)

    const getAllArticles = ()=>{
      setLoad(true)
        getNews().
        then((response)=>{
            const reponse = response.data
            setArts(reponse);
            setLoad(false)
        })
    }
    useEffect(()=>{
       (async ()=>{
        await getAllArticles()
       })()
    },[])
  return (
    <div className=''>
             <Helmet title={"Articles"} description={"Quoi de neuf aujourd'ui sur m-place"}/>

      <HeaderBar/>
      {load && <LazyAnimate/>}
      <ArticlesList lists={arts}/>
      <BottomTab active='news'/>
    </div>
  )
}
export default News;