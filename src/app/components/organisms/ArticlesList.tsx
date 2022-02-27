import React from "react";
import { colors } from "../../styles/colors";
import ArticleItem from "../molecules/ArticleItem";

type Props = {};

export default function ArticlesList({}: Props) {
  return (
    <div className="articles">
      <h1 style={{ color: colors.white, fontWeight: "700" ,marginBottom:15,marginTop:10}}>Articles</h1>

      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
    </div>
  );
}
