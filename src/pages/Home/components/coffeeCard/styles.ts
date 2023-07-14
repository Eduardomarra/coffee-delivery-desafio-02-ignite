import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  padding-top: 0;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
  margin-bottom: 1.25rem;

  span {
    font-size: ${(props) => props.theme.textSizes['components-tag']};
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
    background: ${(props) => props.theme.colors['brand-yellow-light']};
    border-radius: 999999999px;
    padding: 0.25rem 0.5rem;
  }
`

export const Name = styled.h2`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.textSizes['text-regular-l']};
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  color: ${(props) => props.theme.colors['base-label']};
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  text-align: center;
  margin-bottom: 2rem;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.textSizes['text-bold-s']};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    strong {
      font-size: ${(props) => props.theme.textSizes['text-bold-l']};
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  display: flex;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    color: ${(props) => props.theme.colors['base-card']};
    background: ${(props) => props.theme.colors['brand-purple-dark']};
    border: none;
    border-radius: 6px;
    margin-left: 0.3rem;

    &:hover {
      background: ${(props) => props.theme.colors['brand-purple']};
    }
  }
`
