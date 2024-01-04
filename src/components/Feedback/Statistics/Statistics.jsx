import StatisticsList from './StatisticsList/StatisticsList';

const Statistics = ({ state, total, positivePercentage }) => {
  return (
    <StatisticsList
      state={state}
      total={total}
      positivePercentage={positivePercentage}
    />
  );
};

export default Statistics;
