import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { image } from "../assets";
import SImage from "../components/atoms/SImage";
import EventItem from "../components/molecules/EventItem";
import LazyAnimate from "../components/molecules/LazyAnimate";
import OnLoad from "../components/molecules/OnLoad";
import { fetchSearch } from "../config/api";
import { colors } from "../styles/colors";

type Props = {};

const Search: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const [result, setResult] = useState<[]>([]);
  const [search, setSearch] = useState<string>("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState<string>("");

  const user = localStorage.getItem("compte");
  const onSearch = () => {
    setLoad(true);
    setResult([])
    if (search != "") {
      fetchSearch(search).then((response) => {
        setLoad(false);
        const reponse = response.data;
        if (reponse != "") {
          setResult(reponse);
          
        }
      });
    } else {
      setLoad(false);
      setError("vous devez tapez un mot clé avant de cliquer");
    }
  };
  if (error != "") {
    setTimeout(() => {
      setError("");
    }, 3000);
  }
  return (
    <div style={{ color: colors.white, width: "100%" }}>
      {load && <LazyAnimate />}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
          height: 80,
          alignItems: "center",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            width: 40,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => navigate(-1)}
        >
          <BsChevronLeft color={colors.white} size={24} />
        </div>

        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: colors.second,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => navigate(user != null ? "/profil" : "/login")}
        >
          <FaUser style={{ color: "white" }} size={20} />
        </div>
      </div>
      <div>
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <p style={{ color: colors.second, fontSize: 16 }}>
            Un evénement particulier vous interesse ?
          </p>
          <p style={{ color: colors.white, fontSize: 28, fontWeight: "700" }}>
            Faites votre recherche
          </p>
        </div>
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {error != "" && (
            <div
              style={{
                backgroundColor: colors.danger,
                color: colors.white,
                padding: "10px 20px",
                borderRadius: 20,
                width: "95%",
                margin: "0 auto",
                fontSize: 12,
                marginBottom: 20,
              }}
            >
              {error}
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              placeholder="Recherche"
              style={{
                borderWidth: 1,
                backgroundColor: "transparent",
                borderColor: "none",
                borderRadius: 30,
                color: colors.white,
                padding: "0 20px",
                fontSize: 16,
                width: "90%",
                marginRight: 5,
                height: 50,
              }}
              value={search}
              onChange={(input) => setSearch(input.target.value)}
            />

            <div
              onClick={() => onSearch()}
              style={{
                display: "flex",
                backgroundColor: colors.second,
                borderRadius: 20,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaSearch size={20} style={{ color: colors.white }} />
            </div>
          </div>
        </div>

       
          {search.length > 0 ? (
             <div
             style={{
              
               display: "flex",
               flexDirection:'column',
               alignItems: "center",
               justifyContent: "center",
               width: "100%",
             }}
           >
             {
            result.length > 0 &&
            result.map((item, index) => <EventItem item={item} key={index} />) }
          </div>)
          : (
            <div
              style={{
                height: "70vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 170,
                  height: 170,
                  borderRadius: 100,
                  backgroundColor: "#21212180",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SImage url={{ url: image.logo, style: { width: 100 } }} />
              </div>
              <p style={{ color: colors.white, marginTop: 20, fontSize: 20 }}>
                Taper votre mot clé
              </p>

              <p
                style={{
                  color: colors.second,
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                recherche
              </p>
            </div>
          )}
        
      </div>
    </div>
  );
};

export default Search;
