import FeedbackButton from './FeedbackButton/FeedbackButton';

const FeedbackOptions = ({ state, onLeaveFeedback }) => {
  return Object.keys(state).map(feedbackType => (
    <FeedbackButton
      key={feedbackType}
      text={feedbackType}
      onClick={onLeaveFeedback}
    />
  ));
};

export default FeedbackOptions;
