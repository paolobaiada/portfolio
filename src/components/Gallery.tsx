import React, { useState, useEffect } from "react";
import "./Gallery.css";
import axios from "axios";
import { Item } from "./Item";
import { Model } from "./Model";

interface Item {
  id: number;
  imgSrc: string;
}


function Gallery() {

  // creazione stati
  const [model, setModel] = useState<boolean>(false);
  const [tempImgSrc, setTempImgSrc] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([]);


//chiamata fetch per recuperare dati
  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.get<Item[]>("foto.json");
      const data = response.data;
      console.log(data);
      setItems(data);
    };
    dataFetch();
  }, []);

//metodo per aprire l'immagine
  const getImg = (imgSrc: string, id: number) => {
    setTempImgSrc(imgSrc);
    setModel(true);
    setCurrentImageIndex(id);
  };

  //metodo per chiedere l'immagine
  const close = () => {
    setModel(false);
  };

 
  const arrowImage = (param: string) => {

     //metodo per scorrere avanti l'immagine
    if (param === "next") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1 + items.length) % items.length
      );
      setTempImgSrc(
        items[(currentImageIndex + 1 + items.length) % items.length].imgSrc
      );
    } 
     //metodo per scorrere indietro l'immagine
    else if (param === "back") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      );
      setTempImgSrc(
        items[(currentImageIndex - 1 + items.length) % items.length].imgSrc
      );
    }
  };

  //gestione blocco dello scorrimento della pagina
  useEffect(() => {
    if (model) {
      // Blocca lo scroll quando il modal è aperto
      document.body.style.overflow = "hidden";
    } else {
      // Ripristina lo scroll quando il modal è chiuso
      document.body.style.overflow = "auto";
    }
  }, [model]);

  //visualizzazione apertura immagine e gestione elementi galleria
  return (
    <>
      <Model model={model} tempImgSrc={tempImgSrc} arrowImage={arrowImage} close={close}/>

      <div className="gallery">
        {items.map((item) => (
          <Item item={item} getImg={getImg} key={item.id}/>
        ))}
      </div>
    </>
  );
}

export default Gallery;
