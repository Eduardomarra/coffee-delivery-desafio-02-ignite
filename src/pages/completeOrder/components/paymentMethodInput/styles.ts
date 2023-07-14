import { styled } from 'styled-components'

export const PaymentMethodInputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme.colors['brand-purple-light']};
    border-color: ${(props) => props.theme.colors['brand-purple']};

    &:hover {
      background: ${(props) => props.theme.colors['brand-purple-light']};
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  font-size: ${(props) => props.theme.textSizes['components-button-s']};
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors['base-text']};
  background: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-input']};
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
  transition: 0.3s;

  user-select: none;

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  > svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }
`
