import { styled } from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.textSizes['title-title-l']};
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme.colors['brand-yellow-dark']};
`
export const Subtitle = styled.span`
  font-size: ${(props) => props.theme.textSizes['text-regular-l']};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-subtitle']};
`
export const ConfirmedOrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 32rem;
  background: ${(props) => props.theme.colors['base-background']};
  border-radius: 6px 36px;
  padding: 2.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1.5px;
    background: linear-gradient(102.89deg, #dbac2c, #8047f8);
    border-radius: 6px 36px;
    z-index: -1;
  }
`
