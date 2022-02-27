import React from 'react'

type Props = {
  url:{
    url:string,
    style?:Object
  }
  style?:Object
}

const SImage:React.FC<Props> =({url,style})=>{
  return (
    <div style={style}>
      <img src={url.url} style={url.style}  />
    </div>
  )
}
export default SImage;