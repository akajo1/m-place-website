import React from 'react'
import { Link } from 'react-router-dom'
import { eventType } from '../../config'
import SImage from '../atoms/SImage'

type Props = {
  item:eventType
}

export default function EventItem({item}: Props) {
  return (
    <div className="eventItem">
          <Link to={'/eventDetail/'+item.token_event}>
        <SImage  url={{
            url:item.cover,
            style:{width:'100%',height:250,borderRadius:20,objectFit:'cover'}
        }}/>
        <div className="content_item">
            <div className="title__event">
                Event : {item.titre}
            </div>
            <div className="title__billet">
                billet
            </div>
        </div>
        </Link>
    </div>
  )
}