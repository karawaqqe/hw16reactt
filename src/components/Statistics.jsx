export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>{good}</li>
        <li>{neutral}</li>
        <li>{bad}</li>
        <li>{total}</li>
        <li>{positiveFeedback}%</li>
      </ul>
    </>
  );
};

