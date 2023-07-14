import { styled } from 'styled-components'

export const CoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`

export const CoffeeTitleText = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.textSizes['title-title-l']};
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme.colors['base-title']};
`

export const Coffeelist = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3rem;
`
