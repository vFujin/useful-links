import React from 'react';

const SectionHeader = ({section}) =>{
  const {sectionTitle} = section;
  // const tooltip = description ? <p>?</p> : null;


  return (
    <div className="sectionList__section--header">
      <h4>{sectionTitle}</h4>
      {/*<div className="header-tools">{tooltip}</div>*/}
    </div>
  )

};

export default SectionHeader;