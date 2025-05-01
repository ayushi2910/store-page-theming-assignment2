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
  const { colors, typography } = useThemeStore();
  
  // Customized button for cosmetic surgery theme
  const StyledButton = styled(BaseButton)`
    // Luxury aesthetic styling
    border-radius: 2rem; // Rounded buttons for elegant look
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: ${typography.fontWeightSemibold};
    transition: all 0.3s ease;
    
    // Add a subtle gold glow effect
    &:not(:disabled) {
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);
      }
      
      &:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(217, 119, 6, 0.1);
      }
    }
    
    // Special styling for primary buttons - luxury pink/rose gradient
    ${props.variant === 'primary' && `
      background: linear-gradient(135deg, ${colors.primaryLight}, ${colors.primary});
      border: none;
      
      &:hover:not(:disabled) {
        background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark});
      }
    `}
    
    // Special styling for secondary buttons - luxury purple gradient
    ${props.variant === 'secondary' && `
      background: linear-gradient(135deg, ${colors.secondaryLight}, ${colors.secondary});
      border: none;
      
      &:hover:not(:disabled) {
        background: linear-gradient(135deg, ${colors.secondary}, ${colors.secondaryDark});
      }
    `}
    
    // Special styling for accent buttons - gold gradient
    ${props.variant === 'accent' && `
      background: linear-gradient(135deg, ${colors.accentLight}, ${colors.accent});
      border: none;
      
      &:hover:not(:disabled) {
        background: linear-gradient(135deg, ${colors.accent}, ${colors.accentDark});
      }
    `}
    
    // Special styling for outline buttons - elegant borders
    ${props.variant === 'outline' && `
      border: 1px solid ${colors.primary};
      box-shadow: inset 0 0 0 1px ${colors.primary}33;
      
      &:hover:not(:disabled) {
        border-color: ${colors.primaryDark};
        background-color: ${colors.gray100};
      }
    `}
  `;
  
  return <StyledButton {...props} />;
};

export default Button;
