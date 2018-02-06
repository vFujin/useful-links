import React from 'react';
import imageObj from '../assets/imagesObj';

const Preview = ({clickedItem, handleClosePreview}) =>{
  const {name, preview} = clickedItem;
  return (
    <div className="preview-wrapper" onClick={handleClosePreview}>
      <div>
        <p>{name}</p>
        <img src={imageObj[preview]} alt={name}/>
        <button onClick={handleClosePreview}>X</button>
      </div>
    </div>
  )
};

export default Preview;