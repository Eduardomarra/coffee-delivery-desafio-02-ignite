import { useFormContext } from 'react-hook-form'
import { AddressFormContainer, InputContainer, InputWrapper } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()
  const { errors } = formState as ErrorsType

  return (
    <AddressFormContainer>
      <InputWrapper className="cep">
        <InputContainer
          placeholder="CEP"
          type="number"
          minLength={1}
          maxLength={8}
          {...register('cep')}
          haserror={errors.cep?.message ? 'true' : 'false'}
        />
        {errors.cep?.message ? <p>Insira entre 1 e 8 números.</p> : ''}
      </InputWrapper>

      <InputWrapper className="street">
        <InputContainer
          placeholder="Rua"
          className="street"
          {...register('street')}
          haserror={errors.street?.message ? 'true' : 'false'}
        />
        {errors.street?.message ? <p>Insira a rua.</p> : ''}
      </InputWrapper>

      <InputWrapper>
        <InputContainer
          placeholder="Número"
          type="number"
          {...register('number')}
          haserror={errors.number?.message ? 'true' : 'false'}
        />
        {errors.number?.message ? <p>Insira o número.</p> : ''}
      </InputWrapper>

      <InputWrapper className="complement">
        <InputContainer
          placeholder="Complemento"
          className="complement"
          {...register('complement')}
        />
      </InputWrapper>

      <InputWrapper>
        <InputContainer
          placeholder="Bairro"
          {...register('district')}
          haserror={errors.district?.message ? 'true' : 'false'}
        />
        {errors.district?.message ? <p>Insira o bairro.</p> : ''}
      </InputWrapper>

      <InputWrapper>
        <InputContainer
          placeholder="Cidade"
          {...register('city')}
          haserror={errors.city?.message ? 'true' : 'false'}
        />
        {errors.city?.message ? <p>Insira a cidade.</p> : ''}
      </InputWrapper>

      <InputWrapper>
        <InputContainer
          placeholder="UF"
          {...register('uf')}
          haserror={errors.uf?.message ? 'true' : 'false'}
        />
        {errors.uf?.message ? <p>Insira a UF.</p> : ''}
      </InputWrapper>
    </AddressFormContainer>
  )
}
