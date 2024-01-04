import React, { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? ((this.state.good / total) * 100).toFixed() : 0;
  };

  onLeaveFeedback = ({ target }) => {
    const feedbackType = target.dataset.feedback;

    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            state={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              state={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
