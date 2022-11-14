import { Component, FormHTMLAttributes } from 'react'
import { FormSubmitHandler } from '../types'

interface FormSubmitProp<FormData = {}, P = {}, ErrorType = string> {
  onSubmit?: FormSubmitHandler<FormData, P, ErrorType>
}

export type FormProps<FormData, P, ErrorType = string> = Omit<
  FormHTMLAttributes<HTMLFormElement>,
  'onSubmit'
> &
  FormSubmitProp<FormData, P, ErrorType>

export class GenericForm<FormData, P, ErrorType> extends Component<
  FormProps<FormData, P, ErrorType>
> {}

export class Form<FormData = {}, P = {}, ErrorType = string>
  extends Component<FormProps<FormData, P, ErrorType>>
  implements GenericForm<FormData, P, ErrorType> {}
