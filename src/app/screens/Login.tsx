import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";
import SImage from "../components/atoms/SImage";
import { image } from "../assets";
import { userLogin } from "../config/api";
import LazyAnimate from "../components/molecules/LazyAnimate";
import Helmet from "../components/molecules/Helmet";
type Props = {};

export default function Login({ }: Props) {
  const navigate = useNavigate();
  window.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) e.preventDefault()
  })
  const user = localStorage.getItem('mplace-user')
  const [username, setUsername] = useState<string>('+243')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [load, setLoad] = useState(false)



  const logins = () => {
    setLoad(true)
    if (username != '' && password != '') {
      userLogin(username, password)
        .then((response) => {
          const reponse = response.data;
          setLoad(false)
          if (reponse.erreur && reponse.erreur != '') {
            setError(reponse.erreur)
          } else {
            localStorage.removeItem('mplace-user')
            localStorage.setItem('mplace-user', reponse.token)
            navigate('/')
            localStorage.setItem('message', reponse.nom + '!!, bienvenu sur M-place')

          }
        })
    } else {
      setLoad(false)
      setError('vous devez remplir tous les champs');
    }
  }
  if (error != "") {
    setTimeout(() => {
      setError('')
    }, 3000)
  }
  useEffect(() => {
    if (user !== null) { navigate('/') }
  })
  return (
    <div className="login">
      <Helmet title={'Connexion'} description={'connectez vous pour profiter pleinement de toute nos fonctionalités'} />

      <div className="mask"></div>
      {load && <LazyAnimate />}
      <div style={{ zIndex: 10, position: "relative" }}>
        <div style={{ width: '100%', height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 30 }}>
          <SImage
            url={{
              url: image.logo,
              style: { width: 100 },
            }}
            style={{ width: 150, height: 150, borderRadius: 75, backgroundColor: "#FFFFFF1a", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
            zIndex: 3,
          }}
          onClick={() => navigate(-1)}
        >
          <BsChevronLeft color={colors.white} size={34} />
        </div>
        {
          error != '' && <div style={{ backgroundColor: colors.danger, color: colors.white, padding: '10px 20px', borderRadius: 20, width: '90%', margin: '0 auto' }}>{error}</div>
        }
        <div className="form" style={{ marginTop: 20 }} >
          <div className="form-group">
            <label htmlFor="">Nom d'utilisateur</label>
            <input type="tel" placeholder="+243" value={username} onChange={(input) => setUsername(input.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="">Mot de passe</label>
            <input type="password" placeholder="mot de passe" value={password} onChange={(input) => setPassword(input.target.value)} />
          </div>
          <div className="form-group">
            <button onClick={() => logins()}  >Se connecter</button>
            <p>mot de passe oublié ??</p>
            <p>Pas encore de compte ? <span onClick={() => navigate('/inscription')}>S'inscrire</span></p>
          </div>
        </div>


      </div>
    </div>
  );
}
