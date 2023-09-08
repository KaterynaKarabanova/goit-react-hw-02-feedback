import {
  StyledSectionDiv,
  StyledSectionTitle,
} from './StyledSectionTitle.styled';
import PropTypes from 'prop-types';
export const SectionTitle = ({ title, child }) => {
  return (
    <StyledSectionDiv>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {child}
    </StyledSectionDiv>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  child: PropTypes.element,
};
