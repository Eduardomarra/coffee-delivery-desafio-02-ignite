import { css, styled } from 'styled-components'

interface QuantityInputContainerProps {
  size?: 'small' | 'medium'
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${(props) => props.theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors['base-title']};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`

export const ButtonIcon = styled.button`
  width: 0.875rem;
  height: 0.875rem;
  color: ${(props) => props.theme.colors['brand-purple']};
  background: none;
  border: none;
  transition: 0.3s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors['brand-purple-dark']};
  }
`
