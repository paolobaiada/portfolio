import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export const Model = (props : any) => {
  //passaggio props
  const{model,tempImgSrc,arrowImage,close} = props
  return (
    <div className={model ? "model open" : "model"}>
    <img src={tempImgSrc} alt="" />
    <CloseIcon fontSize="large" className="close" onClick={() => close()} />
    <ArrowForwardIosRoundedIcon
      fontSize="large"
      className="next"
      onClick={() => arrowImage("next")}
    />
    <ArrowBackIosNewRoundedIcon
      fontSize="large"
      className="back"
      onClick={() => arrowImage("back")}
    />
  </div>
  )
}
