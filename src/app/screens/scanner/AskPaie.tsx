import React, { useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Helmet from "../../components/molecules/Helmet";
import { eventType } from "../../config";
import { askpaie, getEvent, getOrgStat, getPourcentage } from "../../config/api";
import { colors } from "../../styles/colors";
import { Stat } from "./DashBoard";

type Props = {};

export default function AskPaie({}: Props) {
  const navigate = useNavigate();
  const users = localStorage.getItem("scan-compte");
  const [event, setEvent] = useState<eventType>();
  const [stats, setStats] = useState<Stat | null>(null);
  const [pr, setPr] = useState<string | null>(null);
  const [valeur, setValeur] = useState<string>('+243');
  useEffect(() => {
    (async () => {
      if (users) {
        await getEvent(users).then((response) => {
          setEvent(response.data);
          getOrgStat(response.data.token_organisateur, users).then((resp) => {
            const datas = resp.data;
            setStats(datas);
          });
         
        });
      }
    })();
  }, []);
  useEffect(() => {
   getPourcentage()
   .then((reponse)=>{
        const data = reponse.data
        setPr(data.pourc)
   })
  }, []);
  const onSubmit = ()=>{
    if(valeur.length < 13){
        alert('veuillez taper votre numero de telephone en commencant pas +243');
    }else{
        let h = parseInt(stats?.somme!) - (parseInt(pr!) *parseInt(stats?.somme!))/100
        askpaie(stats!.id_organisateur,stats!.id_event,valeur,h.toString())
        .then((response)=>{
            const datas =  response.data;
            if(datas!=''){
                alert('votre demande de paiement a été envoyé avec succès. votre demande sera traitement dans le 24 h, merci de votre confiance');
            }else{
                alert('erreur survenu lors de traitement, veuillez verifier votre numéro de transaction ou votre compte')
            }
           
        })
    }
  }
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", width: "100%" }}>
             <Helmet title={"paie moi"} description={"faite une demande de paiement pour récuperer votre due"} />

      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: "#FFFFFFce",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          top: 20,
          left: 20,
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
      >
        <BsChevronLeft
          color={colors.black}
          size={28}
          style={{ fontWeight: "700" }}
        />
      </div>
      <div style={{ textAlign: "center",width:'100%',backgroundColor:'#eee',padding:'20px 10px' }}>
        <div
          style={{
            width: 150,
            height: 150,
            border: "1px solid " + colors.success,
            borderRadius: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <p>
            <small>vous avez generé</small>
          </p>
          <h1>{stats!=null ? stats.somme : '0'} $</h1>
          <h6 style={{ color: colors.danger, marginTop: 5 }}>
            {pr !==null ? pr : '0'}% M-place 
            {
              ' '+  (parseInt(pr!) *parseInt(stats?.somme!))/100 +' $'
            }
          </h6>
        </div>
        <p style={{ marginTop: 20 }}>vous avez { parseInt(stats?.somme!) - (parseInt(pr!) *parseInt(stats?.somme!))/100} $</p>
       <div style={{width:'100%',padding:'20px 15px'}}>
       <input placeholder="taper votre numéro" value={valeur} onChange={(input)=> setValeur(input.target.value)}  style={{width:'70%',height:40,border:0,padding:'10px 15px',margin:'10px 0',borderRadius:20}}/>
       <p><small>Taper votre numéro pour les transactions</small></p>
       </div>
        <button
          style={{
            padding: "10px",
            marginTop: 10,
            backgroundColor: colors.success,
            border: 0,
            borderRadius: 20,
            color:colors.white
          }}
          onClick={()=> onSubmit()}
        >
          demander un paiement
        </button>
      </div>
     {/* <div style={{marginTop:30,padding:'0 20px',color:colors.white}}>
          <h3>Historique de paiement</h3>
          <div style={{padding:'10px 0'}}>
             { <p style={{backgroundColor:colors.success,borderBottomRightRadius:20,padding:10,marginBottom:15,color:colors.white}}>
                  vous avez reçu un paiement de 2800 $ sur le numero 08278554322
              </p>}
              
          </div>
      </div>*/}
    </div>
  );
}
