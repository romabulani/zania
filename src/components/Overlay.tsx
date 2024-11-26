import React from "react";
import { useAppContext } from "../contexts/AppContext";

const Overlay = () => {
  const { overlayImage, setOverlayImage } = useAppContext();
  return (
    <div className="overlay" onClick={() => setOverlayImage(null)}>
      <img src={overlayImage ?? ""} alt="Overlay" className="overlay-image" />
    </div>
  );
};

export default Overlay;
