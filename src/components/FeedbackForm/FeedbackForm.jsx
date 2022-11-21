import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = e => {
    const option = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = options.reduce((total, item) => {
      total += this.state[item];
      return total;
    }, 0);
    const positivePercentage =
      total === 0 ? 0 : Number(((good / total) * 100).toFixed(0));
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onIncrement={this.countTotalFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default FeedbackForm;
