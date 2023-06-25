type RequestError = Error & {
  status: number
  message: string
}

export const requestError = (status: number, message: string): RequestError => {
  const error = new Error(message) as RequestError
  error.status = status
  return error
}
