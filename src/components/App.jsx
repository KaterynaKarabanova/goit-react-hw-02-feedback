import { Feedback } from './Feedback';
import React from 'react';
import { Statistic } from './Statistic';
import { SectionTitle } from './SectionTitle';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  buttonClick = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  total = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.total()) * 100);
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SectionTitle
          title="Please leave your feedback"
          child={
            <Feedback
              options={Object.keys(this.state)}
              onButtonClick={this.buttonClick}
            />
          }
        />

        <SectionTitle
          title="Statistic"
          child={
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              options={Object.values(this.state)}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          }
        />
      </div>
    );
  }
}
