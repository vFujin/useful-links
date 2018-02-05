import React from 'react';
import {data} from '../assets/data';
import Items from "./items";
import SectionHeader from "./section-header";

const Sections = ({handlePreviewClick}) =>{
  const mapData = () => data.map(dataSection=> {
    const {items} = dataSection;

    return (
      <li>
        <SectionHeader section={dataSection}/>
        <Items items={items}
               handlePreviewClick={handlePreviewClick}/>
      </li>
    )
  });

  return (
    <ul>
      {mapData()}
    </ul>
  )
};

export default Sections;