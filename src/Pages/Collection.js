import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.js";
import PhotoList from "../Components/PhotoList/PhotoList.js";
import Footer from "../Components/Footer/Footer.js";
import { photoInfo } from "../photos";

export default function Collection() {
  let { name } = useParams();
  const [openPhoto, setOpenPhoto] = useState(-1);

  const handleOpenPhoto = (v) => {
    setOpenPhoto(v);
  };

  const photoList = [];
  photoInfo.forEach((p) => {
    if (p.category !== name) {
      return;
    }
    photoList.push({ src: p.name, description: p.detail });
  });

  return (
    <div className="page-container" style={{ height: window.innerHeight }}>
      <Navbar />
      <PhotoList photos={photoList} setOpenPhoto={handleOpenPhoto} />
      <Footer subpage />
      {openPhoto >= 0 && (
        <div
          className="photo-modal-backdrop"
          onClick={() => {
            setOpenPhoto(-1);
          }}
        >
          <img
            src={require("../Photos/" + photoList[openPhoto].src).default}
            alt="selected"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          <p>{photoList[openPhoto].description}</p>
        </div>
      )}
    </div>
  );
}
