import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";
import SImage from "../components/atoms/SImage";
import { image } from "../assets";
type Props = {};

export default function Login({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="mask"></div>
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
          zIndex: 3,
        }}
        onClick={() => navigate(-1)}
      >
        <BsChevronLeft color={colors.white} size={34} />
      </div>
      <div style={{ zIndex: 10, position: "relative" }}>
        <div style={{width:'100%',height:250,display:'flex',alignItems:'center',justifyContent:'center',paddingTop:30}}>
          <SImage
            url={{
              url: image.logo,
              style: { width: 100 },
            }}
            style={{width:150,height:150,borderRadius:75,backgroundColor: "#FFFFFF1a",display:'flex',alignItems:'center',justifyContent:'center'}}
          />
        </div>

        <form action="" method="post" className="form">
            <div className="form-group">
                <label htmlFor="">Nom d'utilisateur</label>
                <input type="text" placeholder="+243" />
            </div>
            <div className="form-group">
                <label htmlFor="">Mot de passe</label>
                <input type="text" placeholder="mot de passe" />
            </div>
        </form>
      </div>
    </div>
  );
}
