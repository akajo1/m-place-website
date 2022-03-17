import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { image } from '../../assets'
import SImage from '../../components/atoms/SImage'
import { eventType } from '../../config'
import { getEvent, scanLogin } from '../../config/api'

type Props = {}

export default function Login({}: Props) {
    const {user} = useParams()
    const [password,setPassword]=useState('')
    const [event,setEvent]= useState<eventType>()
    const [error,setError]= useState('')
    const navigate = useNavigate();
    
    useEffect(()=>{
        (async ()=>{
            if(user !== undefined){
                await getEvent(user).
                then((response)=>{
                    setEvent(response.data)
                })
            }
            
           
        })()
    },[])
    const log = ()=>{
        if(user != null && password !=''){
            scanLogin(user,password)
            .then((response)=>{
                const reponse = response.data;
                if(reponse !=''){
                    localStorage.setItem('scan-compte',reponse.token)
                    navigate('/scanner/dashboard')
                }else{
                    setError('mot de passe incorrect');
                }
            })
        }else{
            setError('vous devez taper votre mot de passe')
        }
    }
    useEffect(()=>{
        if(user == null || undefined){
            navigate('/')
        }
    })
  return (
  <>
    <SImage
    url={{
        url: image.logo,
        style:{
            width:60,
            height:60,
            objectFit:'center',
            
           
        }
    }}
    style={{
        width:'100%',
        marginBottom:0,
        backgroundColor:'#000',
        textAlign:'center'
    }}
/>
    <div style={{backgroundColor:'#fff',width:'100%',height:'90vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{textAlign:'center'}}>
 
            <SImage
                url={{
                    url:''+event?.cover,
                    style:{
                        width:200,
                        height:200,
                        objectFit:'center',
                        borderRadius:'100%',
                        
                    }
                }}
            />
            <h3 style={{textTransform:'uppercase',margin:'5px 0'}}>{event?.titre}</h3>
            <h6 style={{marginBottom:40}}>{event?.organisateur}</h6>
            { error && <div style={{backgroundColor:'red',padding:'5px 10px',borderRadius:20,height:30,fontSize:13,color:'#fff'}}>
                {error}
            </div>}
            <h4 style={{marginBottom:30,marginTop:10}}>Connectez vous pour scanner</h4>

            <input type="password" placeholder='taper le mot de passe' style={{width:'80%',height:40,borderRadius:20,border:'1px solid #eee',padding:'0 10px',textAlign:'center'}} value={password} onChange={(input)=> setPassword(input.target.value)}/>
             <button style={{marginTop:20,border:0,backgroundColor:'#000',width:120,height:30,color:'#fff',borderRadius:20,padding:'0 10px'}} onClick={()=>log()}>se connecter</button>
            
        </div>
        
    </div>
  </>
  )
}