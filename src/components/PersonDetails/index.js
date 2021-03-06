/**
 * PersonDetails Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { uiStrings } from '../../constants';
import './styles.css';

const renderParagraph = (i, index) => <p key={index}>{i}</p>;

const PersonDetails = props => (
  <div className="person-details">
    <div
      className="person-details-cover"
      style={{ backgroundImage: `url(${props.photoUrl})` }}
    />
    <div className="person-details-inner">
      <div
        className="person-details-avatar"
        style={{ backgroundImage: `url(${props.photoUrl})` }}
      />
      <div className="person-details-caption">
        {uiStrings.RELIGION_POLITICS_AND_IDEAS_OF}
      </div>
      <div className="person-details-name">
        {props.name}
      </div>
      <div className="person-details-about">
        {props.about.map(renderParagraph)}
      </div>
    </div>
  </div>
);

PersonDetails.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  about: PropTypes.arrayOf(PropTypes.string),
};

PersonDetails.defaultProps = {
  about: [],
};

export default PersonDetails;

