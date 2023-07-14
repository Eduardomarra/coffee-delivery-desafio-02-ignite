import { SelectedCoffees } from './components/SelectedCoffees'
import { CompleteOrderForm } from './components/completOrderForm'
import { CompleteOrderContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContexts'

enum PaymentMoney {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'informe o CEP').max(8, 'informe o CEP '),
  street: zod.string().min(1, 'informe a Rua'),
  number: zod.string().min(1, 'informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'informe o Bairro'),
  city: zod.string().min(1, 'informe a Cidade'),
  uf: zod.string().min(1, 'informe a UF').max(2, 'informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMoney, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento.' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrder() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })
  const { removeCartItemsfromConfirmed } = useContext(CartContext)

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/confirmedOrder', {
      state: data,
    })
    removecartItems()
  }

  function removecartItems() {
    removeCartItemsfromConfirmed()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
