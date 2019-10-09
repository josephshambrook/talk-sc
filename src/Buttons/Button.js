import styled from 'styled-components';
import { darken } from 'polished';

// move this to seperate file
const generateButtonStateStyles = ({ bkgdColor, textColor = '#fff' }) => `
  background-color: ${bkgdColor};
  color: ${textColor};

  &:hover {
    background-color: ${darken(0.1, bkgdColor)};
  }
`;

const Button = styled.button`
  /* default colours */
  ${generateButtonStateStyles({ bkgdColor: '#fff', textColor: '#000' })}

  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
  min-width: 3.5rem;
  outline: currentcolor none medium;
  padding: 2rem 3rem;
  position: relative;
  text-align: center;
  transition: all 250ms;
  vertical-align: middle;
  white-space: nowrap;
`;

Button.Success = styled(Button)`${generateButtonStateStyles({ bkgdColor: '#28a745' })}`;
Button.Danger = styled(Button)`${generateButtonStateStyles({ bkgdColor: '#dc3545' })}`;
Button.Info = styled(Button)`${generateButtonStateStyles({ bkgdColor: '#17a2b8' })}`;

export default Button;
