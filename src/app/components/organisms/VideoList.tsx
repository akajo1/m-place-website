import React from 'react'
import { colors } from '../../styles/colors'
import VideoItem from '../molecules/VideoItem'

type Props = {}

export default function VideoList({}: Props) {
  return (
    <div className="articles">
      <h1 style={{ color: colors.white, fontWeight: "700" ,marginBottom:15,marginTop:10}}>Vidéos</h1>
    <VideoItem/>
    <VideoItem/>
    <VideoItem/>
      
    </div>
  )
}