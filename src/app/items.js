import React from 'react';
import views from '../assets/views.svg';

const Items = ({items, handlePreviewClick}) =>{
  const mapItems = () => items.map(item=> {
    const {name, url, preview} = item;
    const itemPreview = preview
      ? <img id={preview} onClick={handlePreviewClick} src={views} alt={`${name} preview`}/>
      : null;

    return (
      <li>
        <a href={url} target="_blank" rel="noreferrer noopener">
          <span>></span>
          <p>{name}</p>
        </a>
        {itemPreview}
      </li>
    )
  });

  return (
    <ul>
      {mapItems()}
    </ul>
  )
};

export default Items;