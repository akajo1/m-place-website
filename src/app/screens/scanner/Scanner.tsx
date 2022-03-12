import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';

type Props = {}

export default function Scanner({}: Props) {
    const users = localStorage.getItem('scan-compte');
    const [data, setData] = useState('No result');

    const navigate  = useNavigate()
    useEffect(()=>{
        if(users == null || undefined){
            navigate('/')
        } 
    }) 

  return (
    <div style={{backgroundColor:'#fff',width:'100%',height:'100vh'}}>
         <QrReader 
         constraints={{facingMode:'user'}}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}

      />
      <p>{data}</p>
    </div>
  )
}