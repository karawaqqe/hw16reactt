import { useState, useEffect } from "react";
import { Statistics } from "./components/Statistics";
import { Notification } from "./components/Notification";
import "./App.css";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodCounter = () => {
    setGood(good + 1);
  };
  const neutralCounter = () => {
    setNeutral(neutral + 1);
  };
  const badCounter = () => {
    setBad(bad + 1);
  };
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage =
    total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <>
      <h2>Please Leave Feedbake</h2>

      <button type="button" onClick={goodCounter}>
        Good
      </button>
      <button type="button" onClick={neutralCounter}>
        Neutral
      </button>
      <button type="button" onClick={badCounter}>
        Bad
      </button>

      

      {total ? <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positiveFeedback={countPositiveFeedbackPercentage}
      /> : <Notification message={'There is no feedback'} />}
      
    </>
  );
};

export default App;