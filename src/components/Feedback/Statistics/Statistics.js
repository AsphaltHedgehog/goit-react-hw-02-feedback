import React from "react";


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <div className="">
      <p className="">
        Statistics
      </p>
      <ul className="">
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



export default Statistics;