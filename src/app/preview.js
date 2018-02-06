import React from 'react';
import imageObj from '../assets/imagesObj';

const Preview = ({activePreview, handleClosePreview}) =>{
  return (
    <div className="preview-wrapper" onClick={handleClosePreview}>
      <div>
        <img src={imageObj[activePreview]} alt={activePreview}/>
        <button onClick={handleClosePreview}>X</button>
      </div>
    </div>
  )
};

export default Preview;