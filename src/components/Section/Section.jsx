import { SectionContainer, Title } from './Section.styled.jsx';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
