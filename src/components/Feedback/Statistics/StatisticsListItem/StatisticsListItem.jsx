import { StyledStatisticsItem } from './StatisticsListItem.styled';

const StatisticsListItem = ({ title, count }) => {
  return (
    <StyledStatisticsItem>
      {title}: {count}
    </StyledStatisticsItem>
  );
};

export default StatisticsListItem;
