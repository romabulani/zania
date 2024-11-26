import React, { useState } from "react";
import { IDocument } from "../types";
import { thumbnails } from "../data/thumbnails";

interface IImage {
  doc: IDocument;
}

const Image = ({ doc }: IImage) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`shimmer-container`}>
      {isLoading && <div className="shimmer"></div>}
      <img
        src={thumbnails[doc.type]}
        alt={doc.title}
        className="shimmer-image"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default Image;
