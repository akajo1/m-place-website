import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image } from "../../assets";
import SImage from "../../components/atoms/SImage";
import { baseImage, billetTType, eventType } from "../../config";
import { getBillett, getEvent } from "../../config/api";
import { colors } from "../../styles/colors";

type Props = {};

const Pay = (props: Props) => {
  const { user, event } = useParams();
  const [events, setEvent] = useState<eventType>();
  const [billets, setBillets] = useState<billetTType[]>([]);
  const [nbBillet, setNbBillet] = useState(0);
  const [tarif, setTarif] = useState('');
  useEffect(() => {
    (async () => {
      if (event !== undefined) {
        await getEvent(event).then((response) => {
          getBillett(response.data.id).then((reponse) => {
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
  })

  return (
    <>
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
                onChange={(input) => setTarif(input.target.value)}
              >
                {billets &&
                  billets.map((item, index) => (
                    <option value={item.prix} key={index}>
                      {item.prix} $ USD ({item.tarifs})
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="">Numéro mobile money</label>
              <input
                type="text"
                className="input"
                placeholder="ex:0990753266"
              />
              <blockquote>
                le numero mobile money doit avoir 10 chiffres (ex:0990753266)
              </blockquote>
            </div>
          </div>
          <div className="facture">
            <h3>FACTURE</h3>
            <p>NOMBRE BILLET : {nbBillet}</p>
            <p>TARIF: {tarif !='' ? tarif : (billets && billets.length > 0) && billets[0].prix } $ USD</p>
          </div>
          <div className="paiement">
            <h4>TOTAL: {nbBillet * parseInt(tarif)} $</h4>
            <p>
              <small>La demande de paiement sera envoyé</small>
            </p>
            <button>Payer</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pay;
