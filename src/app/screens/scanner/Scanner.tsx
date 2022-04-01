import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import { checkBillet } from "../../config/api";
import { BsChevronLeft } from "react-icons/bs";
import * as animationNot from "../../assets/73059-search-not-found.json";
import * as animationQr from "../../assets/7803-qr-code-scanner.json";
import * as animationSuccess from "../../assets/87795-loading-success.json";
import Lottie from "react-lottie";
import { colors } from "../../styles/colors";

type Props = {};

export default function Scanner({}: Props) {
  const users = localStorage.getItem("scan-compte");
  const [data, setData] = useState<string | null>(null);
  const [result, setResult] = useState<Object | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const buttonStyle = {
    display: "block",
    margin: "10px auto",
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationNot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultQr = {
    loop: true,
    autoplay: true,
    animationData: animationQr,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultSuccess = {
    loop: true,
    autoplay: true,
    animationData: animationSuccess,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(()=>{
      if(users == null || undefined){
          navigate('/')
      }
  })

  return (
    <div style={{ backgroundColor: "#fff", width: "100%", height: "100vh" }}>
      {data == null && (
        <QrReader
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (!!result) {
              setLoad(true);
              setError(null)
              checkBillet(result.getText(), users!).then(
                (response) => {
                  setLoad(false);
                  const datas = response.data; 
                 if(datas !=''){
                   setData(datas)
                 }else{
                   setError('Qr-code incorrect ou déjà utilisé')
                 }
                 
                }
              );
            }
            if (!!error) {
              console.info(error);
            }
          }}
        />
      )}
      {error !== null && (
        <div style={{ textAlign: "center" }}>
          <Lottie options={defaultOptions} height={100} width={100} />
          <p style={{ fontSize: 12 }}>Qrcode non trouvé ou déjà utilisé </p>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:10}}>
          <div
                style={{
                  backgroundColor: colors.black,
                  color: colors.white,
                  width: 170,
                  height: 30,
                  borderRadius: 30,
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={()=> navigate('/scanner/dashboard')}
              >
                <BsChevronLeft /> Tableau de bord
              </div>
          </div>

        </div>
      )}
      {error === null && data === null && (
        <div style={{ textAlign: "center" }}>
          <Lottie options={defaultQr} height={100} width={100} />
          <p style={{ fontSize: 12 }}>Veuillez scanner un Qrcode </p>
        </div>
      )}
      {data !== null && (
        <div>
          <div style={{ textAlign: "center" }}>
            <Lottie options={defaultSuccess} height={100} width={100} />
            <p style={{ fontSize: 16, marginTop: -10, fontWeight: "700" }}>
              Qrcode valide
            </p>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  backgroundColor: colors.black,
                  color: colors.white,
                  width: 170,
                  height: 30,
                  borderRadius: 30,
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={()=> navigate('/scanner/dashboard')}
              >
                <BsChevronLeft /> Tableau de bord
              </div>

             
            </div>
            <div style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                cursor: "pointer",
              }}>
            <div
                style={{
                  backgroundColor: colors.danger,
                  color: colors.white,
                  width: 170,
                  height: 30,
                  borderRadius: 30,
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={()=> setData(null)}
              >
                 scanner un autre
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
