import { styled } from 'styled-components'
import { BaseStyleOrder } from '../completOrderForm/styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const DetailsContainer = styled(BaseStyleOrder)`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .strong {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.textSizes['text-bold-l']};
    font-weight: 700;
  }
`

export const ConfirmationButton = styled.button`
  width: 100%;
  color: ${(props) => props.theme.colors['base-white']};
  font-size: ${(props) => props.theme.textSizes['components-button-s']};
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  background: ${(props) => props.theme.colors['brand-yellow']};
  border: none;
  border-radius: 6px;
  padding: 12px 8px;
  margin-top: 1rem;
  transition: 0.3s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
