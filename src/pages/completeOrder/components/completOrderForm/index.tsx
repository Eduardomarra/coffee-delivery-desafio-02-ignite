import { useTheme } from 'styled-components'

import {
  FormSectionContainer,
  CompleteOrderFormContainer,
  TitleOrder,
  SectionTitle,
  Title,
  Subtitle,
  AddressFormContainer,
  InputContainer,
} from './styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { InputHTMLAttributes } from 'react'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import { AddressForm } from './AddressForm'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function CompleteOrderForm({ ...props }: InputProps) {
  const { colors } = useTheme()
  return (
    <CompleteOrderFormContainer>
      <TitleOrder>Complete seu pedido</TitleOrder>
      <FormSectionContainer>
        <SectionTitle>
          <MapPinLine size={22} color={`${colors['brand-yellow-dark']}`} />
          <div>
            <Title>Endereço de entrega</Title>
            <Subtitle>
              Informe o endereço onde deseja receber seu pedido
            </Subtitle>
          </div>
        </SectionTitle>
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle>
          <CurrencyDollar size={22} color={`${colors['brand-purple']}`} />
          <div>
            <Title>Pagamento</Title>
            <Subtitle>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Subtitle>
          </div>
        </SectionTitle>
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
