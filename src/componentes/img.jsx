import React from "react";

function ImageModule({ src, alt, width, height }) {
  return (
    <div className="image-module" style={{ width: width, height: height }}>
      <img src={src} alt={alt} className="image-content" />
    </div>
  );
}

export default ImageModule;
