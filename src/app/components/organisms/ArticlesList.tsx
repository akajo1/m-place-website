import React from "react";
import { articleType } from "../../config";
import { colors } from "../../styles/colors";
import ArticleItem from "../molecules/ArticleItem";

type Props = {
    lists: articleType[]
};

export default function ArticlesList({lists}: Props) {
  return (
    <div className="articles" style={{paddingBottom:'20%'}}>
      <h1 style={{ color: colors.white, fontWeight: "700" ,marginBottom:15,paddingTop:'10%'}}>Articles</h1>
        {
            lists.length > 0 && lists.map((item,index)=>    <ArticleItem item={item} key={index}/>)
        }
   
   
    </div>
  );
}
