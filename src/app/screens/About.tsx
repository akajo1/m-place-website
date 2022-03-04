import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { image } from "../assets";
import SImage from "../components/atoms/SImage";
import { colors } from "../styles/colors";

type Props = {};

export default function About({}: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ padding: "20px 30px" }}>
        <div
          style={{
            width: 40,
            height: 80,
            borderRadius: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            top: 20,

            cursor: "pointer",
            zIndex: 3,
          }}
          onClick={() => navigate(-1)}
        >
          <BsChevronLeft color={colors.second} size={34} />
        </div>
        <div style={{ color: colors.white }}>
          <h1 style={{ marginBottom: 20 }}>
            Créé par des Spécialistes du Numérique, pour les organisateurs,{" "}
          </h1>
          <p style={{ textAlign: "justify", marginBottom: 13 }}>
            M-PLACE.EVENTS est une start-up congolaise créée en Février 2022,
            par le groupe de Conseil en Communication intégré FENNEC CD, basé à
            Kinshasa, comptant une dizaine de passionnés avec un fort ADN
            Digital.
          </p>
          <p style={{ textAlign: "justify", marginBottom: 13 }}>
            M-PLACE est la première solution numérique offrant les services de
            Billetterie en ligne, Live, Gestion d’Accès, Gestion d’Inscription,
            Invitations, à destination des organisateurs d’événements en
            République démocratique du Congo.
          </p>
          <p style={{ textAlign: "justify", marginBottom: 13 }}>
            Simple, rapide et Sécurisé, la solution est accessible gratuitement,
            peut être télécharger sur Play Store et IOS.
          </p>
          <p style={{ textAlign: "justify", marginBottom: 13 }}>
            Elle permet de créer son événement sur mesure, de proposer des
            billets ou invitations en ligne, de faire des live, de promouvoir
            son événement et de gérer le contrôle d’accès le jour J.
          </p>
          <h1 style={{ marginBottom: 20 }}>Une relation de proximité</h1>
          <p style={{ textAlign: "justify", marginBottom: 13 }}>
            La qualité de notre accompagnement est garantie par la présence de
            notre bureau physique. Nos équipes sont présentes en temps réel pour
            répondre à toutes sortes de questions.
          </p>
        </div>
      </div>
     
      <div style={{color:colors.white,padding:'0 30px',marginBottom:30}}>
        <h1 style={{marginBottom:15}}>Mot du fondateur</h1>
        <p style={{textAlign:'justify'}}>
        En tant que solution innovante et précurseur sur le marché kinois, m-place.events s'installe dans une agglomération où il est à ce jour en fonction exclusive et dominante.<br/><br/>

 Dans une ville où la capillarité de la téléphonie mobile et des NTIC s'en vont croissant, une démographie toujours en hausse, la gestion d'événementiel et des données (Data) l'avenir du E-commerce. <br/><br/>

Nous veillerons en temps réel à ce que chaque organisateur, petit comme grand, puisse utiliser m-place.events
        </p>
        <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 20,
          color: colors.white,
        }}
      >
        <SImage
          url={{
            url: image.boss,
            style: {
              width: 150,
              height: 150,
              objectFit: "cover",
              borderRadius: 75,
            },
          }}
        />
        <h2 style={{ marginTop: 20 }}>Val'eau AMBUNGA</h2>
        <h5 style={{ color: colors.second }}>Foundateur</h5>
      </div>
      </div>
    </>
  );
}
