import React from "react";
import { image } from "../../assets";
import SIcon from "../atoms/SIcon";
import SImage from "../atoms/SImage";
import {BiUser} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import { colors } from "../../styles/colors";

type Props = {};

export default function HeaderBar({}: Props) {
  const user = localStorage.getItem('mplace-user');
  return (
    <div className="headerBar">
      <SImage
        url={{
          url: image.logo,
          style: { width: 60 },
        }}
      />
     <div className="rightIcons">
     <SIcon lien="/search" icon={<BsSearch size={22} color={colors.white} className="icons" />}  />
     <SIcon lien={(user && user !='') ? '/profil' : '/login'} icon={<BiUser size={22} color={colors.white} className="icons" />}  active />
     </div>
    </div>
  );
}
