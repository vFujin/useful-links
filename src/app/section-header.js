import React from 'react';
import PropTypes from 'prop-types';

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

SectionHeader.propTypes = {
  section: PropTypes.shape({
    sectionTitle: PropTypes.string.isRequired
  })
};