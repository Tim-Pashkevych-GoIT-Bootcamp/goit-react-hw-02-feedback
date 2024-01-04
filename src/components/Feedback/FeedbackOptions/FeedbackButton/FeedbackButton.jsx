import { StyledButton } from './FeedbackButton.styled';

const FeedbackButton = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick} data-feedback={text.toLowerCase()}>
      {text}
    </StyledButton>
  );
};

export default FeedbackButton;
