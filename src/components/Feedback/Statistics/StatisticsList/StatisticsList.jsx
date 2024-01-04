import StatisticsListItem from '../StatisticsListItem/StatisticsListItem';

const StatisticsList = ({ state, total, positivePercentage }) => {
  // Get array of feedback types from an state object
  const arrayOfFeedbackTypes = Object.keys(state).map(feedbackType => ({
    title: feedbackType,
    count: state[feedbackType],
  }));
  // Add two more elements
  arrayOfFeedbackTypes.splice(
    arrayOfFeedbackTypes.length,
    0,
    { title: 'Total', count: total },
    { title: 'Positive feedback', count: `${positivePercentage}%` }
  );

  return (
    <ul>
      {arrayOfFeedbackTypes.map(item => (
        <StatisticsListItem key={item.title} {...item} />
      ))}
      <li></li>
    </ul>
  );
};

export default StatisticsList;
