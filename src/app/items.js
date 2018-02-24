import React from 'react';
import PropTypes from 'prop-types';
import views from '../assets/views.svg';

const Items = ({items, handlePreviewClick}) =>{
  const mapItems = () => items.map((item, i)=> {
    const {name, url, preview} = item;
    const itemPreview = preview
      ? <img data-name={name} id={preview} onClick={handlePreviewClick} src={views} alt={`${name} preview`}/>
      : null;

    return (
      <li className="sectionItem" key={i}>
        <a href={url} target="_blank" rel="noreferrer noopener" className="sectionItem__wrapper">
          <span>></span>
          <p>{name}</p>
        </a>
        {itemPreview}
      </li>
    )
  });

  return (
    <ul className="sectionList__section--items">
      {mapItems()}
    </ul>
  )
};

export default Items;

Items.propTypes = {
  items: PropTypes.array.isRequired,
  handlePreviewClick: PropTypes.func.isRequired
};