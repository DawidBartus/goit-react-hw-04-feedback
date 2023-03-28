import React, { useState, useEffect } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(good + bad + neutral);
  const [bgColor, setColor] = useState({ backgroundColor: '' });

  useEffect(() => {
    setTotal(good + bad + neutral);
  }, [good, bad, neutral]);

  const handleFeedback = e => {
    console.log(e.target.name);
    e.target.name === 'good' && setGood(good + 1);
    e.target.name === 'neutral' && setNeutral(neutral + 1);
    e.target.name === 'bad' && setBad(bad + 1);
  };
  const positiveFeedback = () => {
    return Math.round((good * 100) / total);
  };

  const getColor = value => {
    if (value >= 85) {
      const greenStyle = {
        backgroundColor: '#699d6c',
        borderRadius: '8px',
        padding: '5px 5px',
      };
      return greenStyle;
    } else if (value >= 65) {
      const greenStyle = {
        backgroundColor: '#9c9d69',
        borderRadius: '8px',
        padding: '5px 5px',
      };
      return greenStyle;
    } else {
      const greenStyle = {
        backgroundColor: '#9d6969',
        borderRadius: '8px',
        padding: '5px 5px',
      };
      return greenStyle;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClick={handleFeedback}
        />
        {total ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            bgColor={getColor(positiveFeedback())}
            positiveFeedback={positiveFeedback() + '%'}
          />
        ) : (
          <p style={{ color: 'white', fontWeight: 'bold' }}>
            There is no feedback yet.
          </p>
        )}
      </Section>
    </>
  );
};

export default App;
