import React, { useEffect, useState } from "react";
import { ImQrcode } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { image } from "../../assets";
import SImage from "../../components/atoms/SImage";
import { eventType } from "../../config";
import { getEvent } from "../../config/api";
import { colors } from "../../styles/colors";

type Props = {};

export default function DashBoard({}: Props) {
  const users = localStorage.getItem("scan-compte");
  const navigate = useNavigate();
  const [event, setEvent] = useState<eventType>();
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      if(users){
        await getEvent(users).then((response) => {
            setEvent(response.data);
          });
      }
    })();
  }, []);
  useEffect(() => {
    if (users == null || undefined) {
      navigate("/");
    }
  });
  const logout =()=>{
      if(window.confirm('voulez-vous vraiment vous deconnectez')){
        localStorage.removeItem('scan-compte')
        navigate('/')
      }
  }
  console.log(users)
  const DashItem = (montant:string,text:string)=>{
        return (
            <div style={{boxShadow:'0 5px 3px '+colors.second,marginBottom:20,padding:10,borderRadius:10}}>
                <h2>{montant}</h2>
                <h6 style={{fontWeight:'normal',color:'#aaa'}}>{text}</h6>
            </div>
        )
  }
  return (
    <>
      <SImage
        url={{
          url: "" + image.logo,
          style: {
            width: 60,
            height: 60,
            objectFit: "center",
          },
        }}
        style={{
          width: "100%",
          marginBottom: 0,
          backgroundColor: "#000",
          textAlign: "center",
        }}
      />
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          minHeight: "90vh",
          padding:10
        }}>
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
        <h6 style={{marginBottom:10}}>{event?.organisateur}</h6>
        <button style={{marginBottom:20,border:0,backgroundColor:colors.danger,width:130,height:30,color:'#fff',borderRadius:20,padding:'0 10px'}} onClick={()=> logout()}>se deconnecter</button>

        </div>
      
        {DashItem('1000','billet generer')}
        {DashItem('400','billet acheter')}
        {DashItem('600','billet restant')}

        <h3>Billet scanner</h3>
        <div style={{position:'fixed',bottom:20,right:60}}>
        <div style={{backgroundColor:colors.black,width:60, height:60,borderRadius:30,display:'flex',justifyContent:'center',alignItems:'center',marginRight:15, cursor:'pointer'}} onClick={()=> navigate('/scanner')}>
      <ImQrcode color={colors.white} size={24}/>
    </div>
        </div>
      </div>
    </>
  );
}
