import { Minus, Plus } from 'phosphor-react'
import { ButtonIcon, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'small' | 'medium'
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <ButtonIcon disabled={quantity <= 1} onClick={onDecrease} type="button">
        <Minus size={14} weight="fill" />
      </ButtonIcon>
      <input type="number" readOnly value={quantity} />
      <ButtonIcon onClick={onIncrease} type="button">
        <Plus size={14} weight="fill" />
      </ButtonIcon>
    </QuantityInputContainer>
  )
}
