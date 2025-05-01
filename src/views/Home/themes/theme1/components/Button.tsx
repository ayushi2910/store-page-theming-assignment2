import React from 'react';
import styled from 'styled-components';
import { useThemeStore } from '../../../../../store/themeStore';
import BaseButton from '../../base/components/Button';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { colors } = useThemeStore();
  
  // Customized button for organ transplant theme
  const StyledButton = styled(BaseButton)`
    // Medical theme-specific styling
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px ${colors.shadow};
    font-weight: 500;
    letter-spacing: 0.01em;
    
    // Add a subtle shadow effect that's common in medical interfaces
    &:not(:disabled) {
      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 6px ${colors.shadow};
      }
      
      &:active {
        transform: translateY(0);
        box-shadow: 0 1px 2px ${colors.shadow};
      }
    }
    
    // Special styling for primary buttons - more pronounced medical blue
    ${props.variant === 'primary' && `
      background: linear-gradient(to bottom, ${colors.primaryLight}, ${colors.primary});
      border-bottom: 2px solid ${colors.primaryDark};
      
      &:hover:not(:disabled) {
        background: linear-gradient(to bottom, ${colors.primary}, ${colors.primaryDark});
      }
    `}
    
    // Special styling for secondary buttons - more pronounced teal
    ${props.variant === 'secondary' && `
      background: linear-gradient(to bottom, ${colors.secondaryLight}, ${colors.secondary});
      border-bottom: 2px solid ${colors.secondaryDark};
      
      &:hover:not(:disabled) {
        background: linear-gradient(to bottom, ${colors.secondary}, ${colors.secondaryDark});
      }
    `}
  `;
  
  return <StyledButton {...props} />;
};

export default Button;