import React from "react";

import PropTypes from 'prop-types';


import  css  from './statistic.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <div className="">
      <p className={css.title}>
        Statistics
      </p>
      <ul className={css.list}>
        <li className="" key={1}>Good: {good}</li>
        <li className="" key={2}>Neutral: {neutral}</li>
        <li className="" key={3}>Bad: {bad}</li>
        <li className="" key={4}>Total: {total}</li>
        <li className="" key={5}>Positive feedback: {
          positivePercentage
        }</li>
      </ul>
    </div>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
}


export default Statistics;