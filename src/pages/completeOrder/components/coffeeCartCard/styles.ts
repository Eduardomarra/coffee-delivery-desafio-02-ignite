import { styled } from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const Title = styled.h2`
  font-size: ${(props) => props.theme.textSizes['text-regular-m']};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
  margin-top: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
  color: ${(props) => props.theme.colors['base-text']};
  background: ${(props) => props.theme.colors['base-button']};
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`
