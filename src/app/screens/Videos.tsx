import React, { useEffect, useState } from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import BottomTab from '../components/organisms/BottomTab';
import VideoList from '../components/organisms/VideoList';
import { getVideos } from '../config/api';



const Videos = () => {
    const [vids,setVids]= useState([])
    const getAllArticles = ()=>{
        getVideos().
        then((response)=>{
            const reponse = response.data
            setVids(reponse);
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
      <VideoList lists={vids}/>
      <BottomTab active='videos'/>
    </div>
  )
}
export default Videos;