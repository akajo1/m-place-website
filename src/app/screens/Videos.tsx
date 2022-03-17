import React, { useEffect, useState } from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import Helmet from '../components/molecules/Helmet';
import LazyAnimate from '../components/molecules/LazyAnimate';
import BottomTab from '../components/organisms/BottomTab';
import VideoList from '../components/organisms/VideoList';
import { getVideos } from '../config/api';



const Videos = () => {
    const [vids,setVids]= useState([])
    const [load,setLoad]= useState(true)

    const getAllArticles = ()=>{
      setLoad(true)
        getVideos().
        then((response)=>{
            const reponse = response.data
            setVids(reponse);
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
             <Helmet title={'Vidéos'} description={"moment fort m-place en vidéo"} />

      <HeaderBar/>
      {load && <LazyAnimate/>}

      <VideoList lists={vids}/>
      <BottomTab active='videos'/>
    </div>
  )
}
export default Videos;