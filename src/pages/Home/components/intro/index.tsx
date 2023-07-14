import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import introImg from '../../../../assets/coffeDelivery.svg'
import {
  IntroContainer,
  IntroContent,
  IntroRegularText,
  IntroTitleText,
  BenefitsContainer,
} from './styles'
import { InfoIcon } from '../../../../components/infoIcon'
import { useTheme } from 'styled-components'

export interface BackgroundProps {
  background: 'yellow-dark' | 'yellow' | 'purple' | 'base-text'
}

export function Intro() {
  const { colors } = useTheme()
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitleText>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitleText>
            <IntroRegularText>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </IntroRegularText>
          </section>
          <BenefitsContainer>
            <InfoIcon
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconbg={colors['brand-yellow-dark']}
            />
            <InfoIcon
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconbg={colors['base-text']}
            />
            <InfoIcon
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreável"
              iconbg={colors['brand-yellow']}
            />
            <InfoIcon
              icon={<Coffee weight="fill" />}
              text="Café chega fresquinho até você"
              iconbg={colors['brand-purple']}
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
