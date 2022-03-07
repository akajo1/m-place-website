import React from 'react'
import { Link } from 'react-router-dom'
import SImage from '../atoms/SImage'

type Props = {
    id?:number,
    uri:string,
    lien:string
}

const PubItem:React.FC<Props> = ({uri,lien})=> {
  return (
    <div className="pubItem" onClick={()=> document.location=lien}>
         <SImage  url={{
            url:uri,
            style:{width:'100%',height:150,borderRadius:20,objectFit:'cover'}
        }}/>
    </div>
  )
}
export default PubItem