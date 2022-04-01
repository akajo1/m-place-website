import React from "react";
import { videoType } from "../../config";
import { colors } from "../../styles/colors";
import VideoItem from "../molecules/VideoItem";

type Props = {
  lists: videoType[];
};

export default function VideoList({ lists }: Props) {
  return (
    <div className="articles" style={{paddingBottom:'20%'}}>
      <h1
        style={{
          color: colors.white,
          fontWeight: "700",
          marginBottom: 15,
          paddingTop: '10%',
        }}
      >
        Vidéos
      </h1>
      {lists.length > 0 &&
        lists.map((item, index) => <VideoItem item={item} key={index} />)}
    </div>
  );
}
