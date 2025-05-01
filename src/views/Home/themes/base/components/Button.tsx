import React from 'react';
import styled from 'styled-components';
import { useThemeStore } from '../../../../../store/themeStore';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  children, 
  onClick,
  disabled = false,
  ...props 
}) => {
  const { colors, typography } = useThemeStore();
  
  // Button styling based on variant
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${colors.primary};
          color: ${colors.white};
          &:hover:not(:disabled) {
            background-color: ${colors.primaryDark};
          }
        `;
      case 'secondary':
        return `
          background-color: ${colors.secondary};
          color: ${colors.white};
          &:hover:not(:disabled) {
            background-color: ${colors.secondaryDark};
          }
        `;
      case 'accent':
        return `
          background-color: ${colors.accent};
          color: ${colors.white};
          &:hover:not(:disabled) {
            background-color: ${colors.accentDark};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${colors.primary};
          border: 2px solid ${colors.primary};
          &:hover:not(:disabled) {
            background-color: ${colors.gray100};
          }
        `;
      default:
        return `
          background-color: ${colors.primary};
          color: ${colors.white};
          &:hover:not(:disabled) {
            background-color: ${colors.primaryDark};
          }
        `;
    }
  };
  
  // Button sizing
  const getSizeStyles = (size: string) => {
    switch (size) {
      case 'small':
        return `
          padding: 0.5rem 1rem;
          font-size: ${typography.fontSizeSm};
        `;
      case 'medium':
        return `
          padding: 0.75rem 1.5rem;
          font-size: ${typography.fontSizeBase};
        `;
      case 'large':
        return `
          padding: 1rem 2rem;
          font-size: ${typography.fontSizeLg};
        `;
      default:
        return `
          padding: 0.75rem 1.5rem;
          font-size: ${typography.fontSizeBase};
        `;
    }
  };
  
  const StyledButton = styled.button<ButtonProps>`
    ${getVariantStyles(variant)}
    ${getSizeStyles(size)}
    font-family: ${typography.fontFamily};
    font-weight: ${typography.fontWeightMedium};
    border-radius: 0.375rem;
    transition: all 0.2s ease;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    width: ${fullWidth ? '100%' : 'auto'};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    opacity: ${disabled ? 0.6 : 1};
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${colors.primaryLight}40;
    }
    
    &:disabled {
      background-color: ${colors.gray300};
      color: ${colors.gray600};
      cursor: not-allowed;
    }
  `;
  
  return (
    <StyledButton 
      variant={variant} 
      size={size} 
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;