import { styled, css } from 'styled-components'

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const TitleOrder = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.textSizes['title-title-m']};
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const BaseStyleOrder = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const FormSectionContainer = styled(BaseStyleOrder)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SectionTitle = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Title = styled.h2`
  font-size: ${(props) => props.theme.textSizes['text-regular-m']};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-title']};
`

export const Subtitle = styled.span`
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;

  > p {
    font-size: ${(props) => props.theme.textSizes['text-bold-s']};
    color: ${(props) => props.theme.colors['base-error']};
  }
`

interface InputContainerProps {
  haserror?: 'false' | 'true'
}

export const InputContainer = styled.input<InputContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  background: ${(props) => props.theme.colors['base-input']};
  transition: 0ms.3s;
  color: ${(props) => props.theme.colors['base-text']};
  padding: 0 0.5rem;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  ${({ theme, haserror }) =>
    haserror === 'true' &&
    css`
      border-color: ${theme.colors['base-error']};
    `}
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

export const PaymentErrors = styled.p`
  grid-column: span 3;

  color: ${(props) => props.theme.colors['base-error']};
  font-size: ${(props) => props.theme.textSizes['text-bold-s']};
`
