import React from 'react';

const SectionHeader = ({section}) =>{
  const {sectionTitle, description} = section;
  const tooltip = description ? <p>?</p> : null;

  return (
    <div className="header-wrapper">
      <h4>{sectionTitle}</h4>
      {/*<div className="header-tools">{tooltip}</div>*/}
    </div>
  )

};

export default SectionHeader;