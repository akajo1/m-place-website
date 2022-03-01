import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";
import SImage from "../components/atoms/SImage";
import { image } from "../assets";
type Props = {};

export default function Inscription({}: Props) {
  const navigate = useNavigate();
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

        <form action="" method="post" className="form">
            <div className="form-group">
                <label htmlFor="">Nom complet</label>
                <input type="text" placeholder="votre nom" />
            </div>
            <div className="form-group">
                <label htmlFor="">Téléphone</label>
                <input type="tel" placeholder="XX XXX XX XX" />
            </div>
            <div className="form-group">
                <label htmlFor="">Mot de passe</label>
                <input type="password" placeholder="mot de passe" />
            </div>
            <div className="form-group">
                <label htmlFor="">Retaper le Mot de passe</label>
                <input type="password" placeholder="mot de passe" />
            </div>
            <div className="form-group">
            <button onClick={()=> navigate('/profil')}>S'inscrire</button>
            <p>Déjà un compte ? <span onClick={()=> navigate('/login')}>Se connecter</span></p>
            </div>
        </form>
       

      </div>
    </div>
  );
}
