import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({iconName, sectionTitle}) => <span className={`icon icon-${iconName ? iconName : sectionTitle.toLowerCase()}`}/>;

export default Icon;

Icon.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  iconName: PropTypes.string,
};