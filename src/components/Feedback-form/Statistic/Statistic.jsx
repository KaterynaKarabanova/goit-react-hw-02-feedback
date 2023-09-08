import PropTypes from 'prop-types';
import { Notification } from './Notification/Notification';

export const Statistic = ({
  options,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return options.find(el => el > 0) ? (
    <ul>
      <li>
        <p>Good:{good}</p>
      </li>
      <li>
        <p>Neutral:{neutral}</p>
      </li>
      <li>
        <p>Bad:{bad}</p>
      </li>
      <li>
        <p>Total:{total()}</p>
      </li>
      <li>
        <p>Positive feedback:{positivePercentage()}%</p>
      </li>
    </ul>
  ) : (
    <Notification message={'There is no feedback'} />
  );
};
Statistic.propTypes = {
  options: PropTypes.array,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.func,
  total: PropTypes.func,
};
