import React, { useEffect, useState } from "react";
import { ImQrcode } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { image } from "../../assets";
import SImage from "../../components/atoms/SImage";
import Helmet from "../../components/molecules/Helmet";
import { eventType } from "../../config";
import { getEvent, getOrgBillet, getOrgStat } from "../../config/api";
import { colors } from "../../styles/colors";

type Props = {};
export type Stat = {
  billet_restant: string;
  billet_vendu: string;
  id: number;
  organisateur: string;
  somme: string;
  tarifs: string;
  titre: string;
  id_organisateur:string,
  id_event:string
};
export default function DashBoard({}: Props) {
  const users = localStorage.getItem("scan-compte");
  const navigate = useNavigate();
  const [event, setEvent] = useState<eventType>();
  const [stats, setStats] = useState<Stat | null>(null);
  const [scanning, setScanning] = useState<Array<any> | null>(null);
  useEffect(() => {
    (async () => {
      if (users) {
        await getEvent(users).then((response) => {
          setEvent(response.data);
          getOrgStat(response.data.token_organisateur, users).then((resp) => {
            const datas = resp.data;
            setStats(datas);
          });
          getOrgBillet(response.data.token_organisateur, users).then((resp) => {
            const datas = resp.data;
            setScanning(datas);
          });
        });
      }
    })();
  }, []);
  useEffect(() => {
    if (users == null || undefined) {
      navigate("/");
    }
  });
  const logout = () => {
    if (window.confirm("voulez-vous vraiment vous deconnectez")) {
      localStorage.removeItem("scan-compte");
      navigate("/");
    }
  };
  const DashItem = (montant: string, text: string) => {
    return (
      <div
        style={{
          boxShadow: "0 5px 3px " + colors.second,
          marginBottom: 20,
          padding: 10,
          borderRadius: 10,
        }}
      >
               <Helmet title={"Organisateur"} description={"Gerer votre événement jusqu'à sa réalisation"} />

        <h2>{((montant)? montant :"0")}</h2>
        <h6 style={{ fontWeight: "normal", color: "#aaa" }}>{text}</h6>
      </div>
    );
  };
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
          padding: 10,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <SImage
            url={{
              url: "" + event?.cover,
              style: {
                width: 200,
                height: 200,
                objectFit: "center",
                borderRadius: "100%",
              },
            }}
          />
          <h3 style={{ textTransform: "uppercase", margin: "5px 0" }}>
            {event?.titre}
          </h3>
          <h6 style={{ marginBottom: 10 }}>{event?.organisateur}</h6>
          <button
            style={{
              marginBottom: 20,
              border: 0,
              backgroundColor: colors.danger,
              width: 130,
              height: 30,
              color: "#fff",
              borderRadius: 20,
              padding: "0 10px",
            }}
            onClick={() => logout()}
          >
            se deconnecter
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              marginBottom: 20,
              border: 0,
              backgroundColor: "blue",
              width: 180,
              height: 30,
              color: "#fff",
              borderRadius: 20,
              padding: "0 10px",
            }}
            onClick={() => navigate("/scanner/askpaie")}
          >
            demande un paiement
          </button>
        </div>

        {stats !== null &&
          DashItem(stats.billet_restant + stats.billet_vendu, "billet generer")}
        {stats !== null && DashItem(stats?.billet_vendu, "billet acheter")}
        {stats !== null && DashItem(stats.billet_restant, "billet restant")}
        {stats !== null &&
          DashItem((stats.somme) + " $", "revenu actuellement générer")}

        <h3 style={{ marginBottom: 20 }}>Billet scanner</h3>

        {scanning !== null &&
          scanning.map((item, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                display: "flex",
                border: "1px solid #eee",
                borderRadius: 20,
                padding: "10px 20px",
                alignItems: "center",
                position: "relative",
                marginBottom:10
              }}
            >
              <div
                style={{
                  backgroundColor: "#eee",
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <ImQrcode color={colors.black} size={24} />
              </div>
              <div>
                <h4>{item.nom}</h4>
                <h5
                  style={{
                    color: colors.success,
                    cursor: "pointer",
                    margin: "3px 0",
                  }}
                  onClick={() => (document.location = "tel:" + item.tel)}
                >
                  {item.tel}
                </h5>
                <h3>
                  {item.prix} $ {item.token_billet != "" && item.tarifs}
                </h3>
              </div>
              <div style={{width:20,height:20, backgroundColor:colors.success,border:'1px solid #eee',position:'absolute',right:10,top:30,borderRadius:'100%',color:colors.white,display:'flex',justifyContent:'center',alignItems:'center'}}></div>
            </div>
          ))}

        <div style={{ position: "fixed", bottom: 20, right:30 }}>
          <div
            style={{
              backgroundColor: colors.black,
              width: 60,
              height: 60,
              borderRadius: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 15,
              cursor: "pointer",
            }}
            onClick={() => navigate("/scanner")}
          >
            <ImQrcode color={colors.white} size={24} />
          </div>
        </div>
      </div>
    </>
  );
}
