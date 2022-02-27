import React from 'react'
import { Link } from 'react-router-dom'
import SImage from '../atoms/SImage'

type Props = {}

export default function EventItem({}: Props) {
  return (
    <div className="eventItem">
          <Link to={''}>
        <SImage  url={{
            url:'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014616__340.jpg',
            style:{width:'100%',height:250,borderRadius:20,objectFit:'cover'}
        }}/>
        <div className="content_item">
            <div className="title__event">
                Event : Yamaha Drums show
            </div>
            <div className="title__billet">
                billet
            </div>
        </div>
        </Link>
    </div>
  )
}