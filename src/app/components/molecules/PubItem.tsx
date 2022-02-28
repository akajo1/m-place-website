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
    <div className="pubItem">
        <Link to={lien}>
        <SImage  url={{
            url:uri,
            style:{width:'100%',height:200,borderRadius:20,objectFit:'cover'}
        }}/>
        </Link>
    </div>
  )
}
export default PubItem