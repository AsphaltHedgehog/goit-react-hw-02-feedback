import React from "react";

const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div className="">
      <p className="">
        Please leave feedback
      </p>
      <ul className="">
        <li><button type='button' className="" onClick={
          click => handleFeedback(click.target)}>Good</button>
        </li>
        <li><button type='button' className="" onClick={
          click => handleFeedback(click.target)}>Neutral</button>
        </li>
        <li><button type='button' className="" onClick={
          click => handleFeedback(click.target)}>Bad</button>
        </li>
      </ul>
    </div>
  );
};


export default FeedbackOptions;