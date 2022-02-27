import React from 'react'
import SIcon from '../atoms/SIcon'
import {MdEventNote} from 'react-icons/md'
import { colors } from '../../styles/colors'
import EventItem from '../molecules/EventItem'
type Props = {}

export default function EventList({}: Props) {
  return (
    <div className="eventList">
        <h3 className="title__h3"><MdEventNote color={colors.white} size={23}/>  <span style={{fontWeight:'700',marginRight:10}}>Evénèments</span> <span style={{fontWeight:'normal'}}>Récents</span></h3>
        <EventItem/>
        <EventItem/>
        <EventItem/>
    </div>
  )
}