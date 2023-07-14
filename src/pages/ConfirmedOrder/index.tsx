import { InfoIcon } from '../../components/infoIcon'

import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'

import ConfirmedOrderImage from '../../assets/confirmedOrderImage.svg'

import { useTheme } from 'styled-components'
import {
  ConfirmedOrderContainer,
  ConfirmedOrderDetailsContainer,
  Subtitle,
  Title,
} from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../completeOrder'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function ConfirmedOrder() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

  return (
    <ConfirmedOrderContainer className="container">
      <div>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>
      </div>
      <section>
        <ConfirmedOrderDetailsContainer>
          <InfoIcon
            icon={<MapPin size={16} weight="fill" />}
            text={
              <p>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                , {state.complement}
                <br />
                {state.district} - {state.city}, {state.uf}
              </p>
            }
            iconbg={colors['brand-purple']}
          />
          <InfoIcon
            icon={<Timer size={16} weight="fill" />}
            text={
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            }
            iconbg={colors['brand-yellow']}
          />
          <InfoIcon
            icon={<CurrencyDollar size={16} weight="fill" />}
            text={
              <p>
                Pagamento na entrega
                <br />
                <strong>
                  {state.paymentMethod === 'credit' && 'Cartão de Crédito'}
                  {state.paymentMethod === 'debit' && 'Cartão de Débito'}
                  {state.paymentMethod === 'cash' && 'Dinheiro'}
                </strong>
              </p>
            }
            iconbg={colors['brand-yellow-dark']}
          />
        </ConfirmedOrderDetailsContainer>
        <img src={ConfirmedOrderImage} alt="" />
      </section>
    </ConfirmedOrderContainer>
  )
}
