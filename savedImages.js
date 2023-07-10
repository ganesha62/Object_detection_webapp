import React from "react";

const SavedImages = ({ savedImages }) => {
  return (
    <div>
      <h1>Saved Images</h1>
      {savedImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Saved Image ${index + 1}`}
          style={{ width: "300px", height: "auto", marginBottom: "10px" }}
        />
      ))}
    </div>
  );
};

export default SavedImages;
