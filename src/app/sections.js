import React from 'react';
import PropTypes from 'prop-types';
import {data} from '../assets/data';
import Items from "./items";
import SectionHeader from "./section-header";
import Icon from "./icon";

const Sections = ({handlePreviewClick}) =>{
  const mapData = () => data.map((dataSection, i)=> {
    const {icon, items, sectionTitle} = dataSection;

    return (
      <li key={i} className="sectionList__section">
        <SectionHeader section={dataSection}/>
        <Items items={items}
               handlePreviewClick={handlePreviewClick}/>
        <div className="sectionList__section--icon">
          <Icon iconName={icon} sectionTitle={sectionTitle}/>
        </div>
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

Sections.propTypes = {
  handlePreviewClick: PropTypes.func.isRequired
};