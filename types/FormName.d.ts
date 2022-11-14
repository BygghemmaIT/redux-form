import { ReactNode, FunctionComponent } from 'react'

export interface FormNameProps {
  children: (props: { form: string; sectionPrefix?: string }) => ReactNode
}

export const FormName: FunctionComponent<FormNameProps>

export default FormName
