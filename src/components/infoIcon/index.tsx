import { ReactNode } from 'react'
import { IconContainer, InfoIconContainer } from './styles'

interface InfoIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconbg: string
}

export function InfoIcon({ icon, text, iconbg }: InfoIconProps) {
  return (
    <InfoIconContainer>
      <IconContainer iconbg={iconbg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoIconContainer>
  )
}
