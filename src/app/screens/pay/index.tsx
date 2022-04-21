import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { image } from "../../assets";
import SImage from "../../components/atoms/SImage";
import { baseImage, billetTType, eventType } from "../../config";
import { cartePaie, getBillett, getEvent, mobilePaie, paiementCheck } from "../../config/api";
import Lottie from 'react-lottie';
import * as animationData from '../../assets/84272-loading-colour.json'
import * as animationSuccess from '../../assets/87795-loading-success.json'
import * as animationCancel from '../../assets/38993-ocl-canceled.json'
import Navigation from "../../navigations";
import Helmet from "../../components/molecules/Helmet";
import { colors } from "../../styles/colors";


type Props = {};

const Pay = (props: Props) => {
  const { user, event,app } = useParams();
  const [events, setEvent] = useState<eventType>();
  const [billets, setBillets] = useState<billetTType[]>([]);
  const [nbBillet, setNbBillet] = useState(0);
  const [tarif, setTarif] = useState('');
  const [phone, setPhone] = useState('243');
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [orderNumber, setorder] = useState('');
  const [text, setText] = useState('');
  const [tokenTarif, setTokenTarif] = useState('');
const navigate = useNavigate()
  const LoadAnimation = ()=>{
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };
  
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div style={{position:'fixed',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',left:0}}>
       <Helmet title={"Achat billet"} description={"acheter en toute sécurité votre billet et recevez le à l'instant!!"} />

      <div style={{textAlign:'center'}}>
         <Lottie options={defaultOptions}
              height={400}
              width={400}
             />
             { text !='' &&<p style={{position:'relative',top:-100,padding:'0 30px'}}>{text}  </p>}
         </div>
         </div>
    )
  }

  const onTarif = (tarif:string)=>{
    billets.filter((item)=> {
      if(item.prix.toString() == tarif){
        setTokenTarif(item.token!)
        setTarif(item.prix.toString())
    }
    }
      )
  }

  const LoadSuccess = ()=>{
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };
  
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationSuccess,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div style={{position:'fixed',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',left:0}}>

      <div style={{textAlign:'center'}}>
         <Lottie options={defaultOptions}
              height={400}
              width={400}
             />
         </div>
         </div>
    )
  }
  
  const LoadCancel = ()=>{
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };
  
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationCancel,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div style={{position:'fixed',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',left:0}}>

      <div style={{textAlign:'center'}}>
         <Lottie options={defaultOptions}
              height={400}
              width={400}
             />
         </div>
         </div>
    )
  }
  useEffect(() => {
    
    (async () => {
      setLoad(true)
      if (event !== undefined) {
        await getEvent(event).then((response) => {
          getBillett(response.data.id).then((reponse) => {
            setLoad(false)
            if (reponse.data != null) {
              setBillets(reponse.data);
            }
          });

          setEvent(response.data);
        });
      }
    })();
  }, []);

  useEffect(()=>{
    tarif =='' && (billets && billets.length > 0) && setTarif(billets[0].prix.toString())
  });

const paiementMobile = ()=>{
  setLoad(true)
  const nn= nbBillet * parseFloat(tarif)
  if(events){
    mobilePaie(phone,events?.titre,nn.toString(),user!,tokenTarif!,nbBillet.toString()!)
    .then((reponse)=>{
      const {data} = reponse
      console.log(data.orderNumber)
      if(data.code =='0'){
        setText('veuillez comfirmer le paiement en tapant votre mot de passe sur le pop-up afficher')
        setTimeout(()=>{
            paiementCheck(reponse.data.orderNumber)
            .then((reponse)=>{
              const {data} = reponse;
              if(data.transaction && data.transaction.status == '0'){
                setLoad(false)
                setSuccess(true)

                setTimeout(()=>{
                  setSuccess(false)
                  if(app){
                    document.location='https://upload.m-place.events/app'
                  }else{
                    navigate('/');
                  }
                },3000)
              }else{
                setText('')
                setLoad(false)
                setCancel(true)

                setTimeout(()=>{
                  setCancel(false)
                },3000)
              }
            })
        },30000);
      }else{
        setText(data.message);
        setTimeout(()=>{
          setText('')
          setLoad(false)
        },3000)
      }
    })
  }
}
const paiementCarte = ()=>{
  if(event && user !=null && tokenTarif !=null){

    const nn= nbBillet * parseInt(tarif)
    if(events){
      cartePaie(events.titre,nn.toString(),user,tokenTarif,nbBillet.toString()!)
      .then((reponse)=>{
       const {data}=reponse
      })
    }
  }
}

  return (
    <>
        {load && <LoadAnimation/>}
        {success && <LoadSuccess/>}
        {cancel && <LoadCancel/>}
         
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", width: "379px" }}>
          <SImage
            url={{
              url: image.logo,
              style: {
                width: "80px",
              },
            }}
          />
        </div>
      </div>
      <div style={{backgroundColor:colors.success,padding:10,borderRadius:20,marginBottom:10}}>
        
      La durée maximale de réception de vos billets achetés est de 24 heures. 

Si ce délai est passé et que vous ne recevez toujours pas vos billets, votre argent vous sera restitué. <br/>

En cas d'echec de paiement, le temps de restitution d'argent est de 24 heures après examen.

      </div>
      <div style={{backgroundColor:colors.success,padding:10,borderRadius:20,marginBottom:10}}>
      Notre Service Client est disponible 24/7, juste en cliquant sur le bouton whatsapp flottant .

</div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
     
        <div
          style={{
            backgroundColor: "#FFF",
            width: "379px",
            minHeight: "100vh",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "#eee",
              padding: 20,
            }}
          >
            <SImage
              url={{
                url: "" + events?.cover,
                style: {
                  width: "200px",
                  height: "200px",
                  borderRadius: "100%",
                  objectFit: "cover",
                },
              }}
            />
            <h6 style={{ marginTop: 15 }}>EVENEMENT</h6>
            <h2 style={{ marginTop: 0 }}>{events?.titre}</h2>
            <h5 style={{ marginTop: 5 }}>{events?.organisateur}</h5>
          </div>
          <div>
            <SImage 
              url={{
                url:image.mobilemoney,
                style:{
                  width:"100%",
                  height:30,
                  objectFit:'cover',
                  backgroundColor:'#00000042'
                }
              }}
            />
          </div>
          <div className="pay">
            <div className="form-control">
              <label htmlFor="">Nombre de billet</label>
              <input
                type="number"
                min={1}
                className="input"
                onChange={(input) => setNbBillet(parseInt(input.target.value))}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Tarif</label>
              <select
                name=""
                id=""
                className="input"
                onChange={(input) => onTarif(input.target.value)}
              >
                {billets &&
                  billets.map((item, index) => (
                    <option value={item.prix} key={index}>
                      {item.prix} $ USD {item.tarifs && `(${item.tarifs})`}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="">Numéro mobile money</label>
              <blockquote>
                a remplir que pour le paiement mobile
              </blockquote>
              <input
                type="text"
                className="input"
                placeholder="ex:24399XXXXXXX"
                value={phone}
                onChange={(input)=> setPhone(input.target.value)}
              />
              <blockquote>
                le numero mobile money doit avoir 10 chiffres (ex:24399XXXXXXX)
              </blockquote>
            </div>
          </div>
          
          <div className="facture">
            <h3>FACTURE</h3>
            <p>NOMBRE BILLET : {nbBillet}</p>
            <p>TARIF: {tarif !='' ? tarif : (billets && billets.length > 0) && billets[0].prix } $ USD</p>
            <h4>Acheter par carte</h4>
            
          </div>
          <div className="paiement">
            <h4>TOTAL: {nbBillet * parseFloat(tarif)} $</h4>
            <div style={{cursor:'pointer'}} onClick={()=> paiementCarte()}>
            <SImage 
              url={{
                url:image.carte,
                style:{
                  width:"100%",
                  height:30,
                  objectFit:'cover',
                  backgroundColor:'#eee'
                }
              }}
            />
          </div>
            <p>
              <small>La demande de paiement sera envoyé</small>
            </p>
            <button onClick={()=>paiementMobile()}>Payer</button>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Pay;
