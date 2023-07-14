import { PaymentMethodInputContainer, ContentContainer } from './styles'
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  text: string
  icon: ReactNode
}

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ text, icon, id, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {text}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
})
