import shortid from 'shortid';
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem, Text } from './Statistics.styled.jsx';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem key={shortid.generate()}>
        <Text>
          Good: <span>{good}</span>
        </Text>
      </StatisticsItem>
      <StatisticsItem key={shortid.generate()}>
        <Text>
          Neutral: <span>{neutral}</span>
        </Text>
      </StatisticsItem>
      <StatisticsItem key={shortid.generate()}>
        <Text>
          Bad: <span>{bad}</span>
        </Text>
      </StatisticsItem>
      <StatisticsItem key={shortid.generate()}>
        <Text>
          Total: <span>{total}</span>
        </Text>
      </StatisticsItem>
      <StatisticsItem key={shortid.generate()}>
        <Text>
          Positive feedback: <span>{positivePercentage}%</span>
        </Text>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
