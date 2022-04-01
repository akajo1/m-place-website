import React from 'react'
import SIcon from '../atoms/SIcon'
import {MdEventNote} from 'react-icons/md'
import { colors } from '../../styles/colors'
import EventItem from '../molecules/EventItem'
import { eventType } from '../../config'
type Props = {
  lists: eventType[]
}

export default function EventList({lists}: Props) {
  return (
    <div className="eventList" style={{paddingBottom:'20%'}}>
        <h3 className="title__h3"><MdEventNote color={colors.white} size={23}/>  <span style={{fontWeight:'700',marginRight:10}}>Evénèments</span> <span style={{fontWeight:'normal'}}>Récents</span></h3>
        
        {
            lists.length > 0 && lists.map((item,index)=> <EventItem item={item} key={index}/>)
        }
       
    </div>
  )
}