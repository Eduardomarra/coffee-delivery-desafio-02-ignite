import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & img {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 414px) {
    padding: 0.8rem;
    flex-direction: column;
    gap: 1rem;
  }
`

export const HeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`
interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};
  min-width: 2.3rem;
  height: 2.3rem;
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  position: relative;

  > span {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 1.25rem;
    height: 1.25rem;
    font-size: ${(props) => props.theme.textSizes['text-bold-s']};
    font-weight: 700;
    text-align: center;
    background: ${(props) => props.theme.colors['brand-yellow-dark']};
    color: ${(props) => props.theme.colors['base-white']};
    padding: 0.2rem;
    border-radius: 99999999px;
  }

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};

    > span {
      background: ${theme.colors[`brand-${variant}-dark`]};
    }
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors[`brand-purple`]};
      }
    `}
`
