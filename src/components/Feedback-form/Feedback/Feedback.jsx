import PropTypes from 'prop-types';
import { StyledFeedbackList, StyledFeedbackbtn } from './Feedback.styled';
export const Feedback = ({ options, onButtonClick }) => {
  return (
    <StyledFeedbackList>
      {options.map(el => {
        return (
          <li key={el}>
            <StyledFeedbackbtn
              type="button"
              name={el}
              onClick={e => onButtonClick(e)}
            >
              {el}
            </StyledFeedbackbtn>
          </li>
        );
      })}
    </StyledFeedbackList>
  );
};
Feedback.propTypes = {
  options: PropTypes.array,
  onButtonClick: PropTypes.func,
};
