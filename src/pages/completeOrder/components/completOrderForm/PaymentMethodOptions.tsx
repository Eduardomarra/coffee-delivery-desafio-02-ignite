import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentMethodInput } from '../paymentMethodInput'
import { PaymentMethodOptionsContainer, PaymentErrors } from './styles'
import { useFormContext } from 'react-hook-form'

export const PaymentMethods = {
  credit: {
    text: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    text: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  cash: {
    text: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodErrors = errors?.paymentMethod
    ?.message as unknown as string

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(PaymentMethods).map(([key, { text, icon }]) => (
        <PaymentMethodInput
          key={text}
          id={key}
          text={text}
          icon={icon}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodErrors && (
        <PaymentErrors>{paymentMethodErrors}</PaymentErrors>
      )}
    </PaymentMethodOptionsContainer>
  )
}
