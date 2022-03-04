import React, { useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";
import SImage from "../components/atoms/SImage";
import { image } from "../assets";
import { addUser } from "../config/api";
type Props = {};

export default function Inscription({}: Props) {
  const navigate = useNavigate();
  const [nom,setNom]= useState('')
  const [tel,setTel]= useState('')
  const [pwd,setPwd]= useState('')
  const [cpwd,setCpwd]= useState('')
  const [error,setError]= useState('')
  const user = localStorage.getItem('mplace-user')

  const ins = ()=>{
     
    if(nom !='' && tel !='' && pwd !='' && cpwd !=''){
     addUser(nom,tel,pwd)
     .then((response)=>{
       const reponse = response.data;
       if(reponse.erreur && reponse.erreur !=''){
         setError(reponse.erreur)
       }else{
        localStorage.removeItem('mplace-user')
        localStorage.setItem('mplace-user',reponse.token)
        localStorage.setItem('message',reponse.nom +'!!, bienvenu sur M-place')
        navigate('/')
       }
     })
    }else{
      setError('vous devez remplir tous les champs');
    }
}
if(error !=""){
   setTimeout(()=>{
       setError('')
   },3000)
}
useEffect(()=>{
if(user !==null) {navigate('/')}
})

  return (
    <div className="login">
      <div className="mask"></div>
      
      <div style={{ zIndex: 10, position: "relative" }}>
        <div style={{width:'100%',height:150,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <SImage
            url={{
              url: image.logo,
              style: { width: 60 },
            }}
            style={{width:80,height:80,borderRadius:40,backgroundColor: "#FFFFFF1a",display:'flex',alignItems:'center',justifyContent:'center'}}
          />
        </div>
        {
               error !='' &&  <div style={{backgroundColor:colors.danger,color:colors.white,padding:'10px 20px',borderRadius:20,width:'90%',margin:'0 auto'}}>{error}</div>
           }
        <div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          top: 20,
          left: 20,
          cursor: "pointer",
          zIndex: 10,
        }}
        onClick={() => navigate(-1)}
      >
        <BsChevronLeft color={colors.white} size={34} />
      </div>

        <div  className="form">
            <div className="form-group">
                <label htmlFor="">Nom complet</label>
                <input type="text" placeholder="votre nom"  value={nom} onChange={(input)=> setNom(input.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Téléphone</label>
                <input type="tel" placeholder="XX XXX XX XX" value={tel} onChange={(input)=> setTel(input.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Mot de passe</label>
                <input type="password" placeholder="mot de passe" value={pwd} onChange={(input)=> setPwd(input.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="">Retaper le Mot de passe</label>
                <input type="password" placeholder="mot de passe" value={cpwd} onChange={(input)=> setCpwd(input.target.value)}/>
            </div>
            <div className="form-group">
            <button onClick={()=> ins()}>S'inscrire</button>
            <p>Déjà un compte ? <span onClick={()=> navigate('/login')}>Se connecter</span></p>
            </div>
        </div>
       

      </div>
    </div>
  );
}
