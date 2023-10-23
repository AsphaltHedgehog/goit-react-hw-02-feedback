import React from "react";

import PropTypes from 'prop-types';

import css from './feedbackoptions.module.css'

const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div className="">
      <ul className={ css.list }>
        <li><button type='button' className={css.buttons} onClick={
          click => handleFeedback(click.target)}>Good</button>
        </li>
        <li><button type='button' className={css.buttons} onClick={
          click => handleFeedback(click.target)}>Neutral</button>
        </li>
        <li><button type='button' className={css.buttons} onClick={
          click => handleFeedback(click.target)}>Bad</button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;