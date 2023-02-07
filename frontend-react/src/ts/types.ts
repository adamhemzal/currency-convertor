export type ExchangeRates = {
  country: string,
  currency: string,
  amount: string,
  code: string,
  rate: string
}

export type ResponseData = {
  date: string,
  rates: ExchangeRates[]
}