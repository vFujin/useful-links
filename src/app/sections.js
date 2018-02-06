import React from 'react';
import {data} from '../assets/data';
import Items from "./items";
import SectionHeader from "./section-header";

const Sections = ({handlePreviewClick}) =>{
  const mapData = () => data.map((dataSection, i)=> {
    const {items} = dataSection;

    return (
      <li key={i} className="sectionList__section">
        <SectionHeader section={dataSection}/>
        <Items items={items}
               handlePreviewClick={handlePreviewClick}/>
      </li>
    )
  });

  return (
    <ul className="sectionList">
      {mapData()}
    </ul>
  )
};

export default Sections;