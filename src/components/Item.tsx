import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Item = (props : any) => {
    const{item,getImg} = props
  return (
    <LazyLoadImage
      src={item.imgSrc}
      alt=""
      onClick={() => getImg(item.imgSrc,item.id)}
      effect="blur"
      className="image"
      delayMethod="throttle"
    />
  )
}
