import { FormErrors } from '../types'

export declare class SubmissionError<FormData = {}, ErrorType = string> extends Error {
  constructor(errors: FormErrors<FormData, ErrorType>)
  errors: FormErrors<FormData, ErrorType>
}

export default SubmissionError
