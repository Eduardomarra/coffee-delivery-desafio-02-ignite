import { styled } from 'styled-components'

export const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconContainerProps {
  iconbg: string
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999999px;
  background: ${({ iconbg }) => iconbg};
  color: ${(props) => props.theme.colors['base-white']};
`
