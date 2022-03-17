import React from 'react'
import {Helmet as Helm} from "react-helmet";

type Props = {
    title:string,
    description:string,
    image?:string
}

const Helmet = ({title,description,image}: Props) => {
  return (
    <Helm>
    <meta charSet="utf-8" />
    <title>M-Place: {title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="evenement,achat billet" />
    <link rel="apple-touch-icon" href={image} />

</Helm>
  )
}
export default Helmet;