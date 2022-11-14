// Type definitions for redux-form 8.3
// Project: https://github.com/erikras/redux-form, https://redux-form.com
// Definitions by: Daniel Lytkin <https://github.com/aikoven>
//                 Karol Janyst <https://github.com/LKay>
//                 Luka Zakrajsek <https://github.com/bancek>
//                 Anton Novik <https://github.com/tehbi4>
//                 Huw Martin <https://github.com/huwmartin>
//                 Matt Davis <https://github.com/m-b-davis>
//                 Ethan Resnick <https://github.com/ethanresnick>
//                 Maddi Joyce <https://github.com/maddijoyce>
//                 Kamil Wojcik <https://github.com/smifun>
//                 Mohamed Shaaban <https://github.com/mshaaban088>
//                 Ethan Setnik <https://github.com/esetnik>
//                 Kota Marusue <https://github.com/mrsekut>
//                 Adam Bouqdib <https://github.com/abemedia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0
import { ReactElement } from 'react'

export type FieldType = 'Field' | 'FieldArray'

export interface ErrorOther<T = string> {
  _error?: T
}

export type FormErrors<FormData = {}, T = string> = {
  [P in keyof FormData]?: ReactElement | T
} & ErrorOther<T>

export interface WarningOther<T = void> {
  _warning?: T
}

export type FormWarnings<FormData = {}, T = void> = {
  [P in keyof FormData]?: ReactElement | string | WarningOther<T>
}

export interface RegisteredFieldState {
  name: string
  type: FieldType
}

export * from './types/reduxForm'
export * from './types/Field'
export * from './types/Fields'
export * from './types/FieldArray'
export * from './types/Form'
export * from './types/FormName'
export * from './types/FormSection'
export * from './types/formValues'
export * from './types/formValueSelector'
export * from './types/reducer'
export * from './types/SubmissionError'
export * from './types/actions'
export * from './types/actionTypes'
export * from './types/selectors'
