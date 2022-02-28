import React from 'react'
import { useNavigate } from 'react-router-dom'
import { colors } from '../../styles/colors'
import YouTube from 'react-youtube';
import {HiVideoCamera} from 'react-icons/hi'
import { videoType } from '../../config';
type Props = {
    item:videoType
}

export default function VideoItem({item}: Props) {
    const navigate  = useNavigate();
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      function _onReady(event:{target:any }) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
  return (
    <div className="articleItem" onClick={()=> navigate('')}>
<YouTube videoId={item.lien_video} opts={{
        height: '280',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }} onReady={_onReady}  />  
      <div style={{color:colors.white,textAlign:'justify',fontSize:'18px',marginBottom:20,marginTop:5,fontWeight:'700',display:'flex',alignItems:'center'}}>
    <div style={{width:40,height:40,borderRadius:20,backgroundColor:colors.dark,marginRight:10, display:'flex',alignItems:'center',justifyContent:'center'}}>
    <HiVideoCamera size={26}/></div>  <p style={{fontWeight:'700'}}>{item.titre}</p>
        </div>
    </div>
  )
}