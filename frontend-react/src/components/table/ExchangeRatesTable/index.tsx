type Props = {
  data: any
}

const ExchangeRatesTable = ({data}: Props) => {
  
  return(
    <div className="overflow-x-auto py-4">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead>
          <tr>
            {Object.keys(data.rates[0]).map( (key: string) => (
              <th key={key} className="whitespace-nowrap px-4 py-2 text-left font-medium">
                {key.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.rates.map( (rate: any) => (
            <tr key={rate.code}>
              <td className="whitespace-nowrap px-4 py-2">{rate.country}</td>
              <td className="whitespace-nowrap px-4 py-2">{rate.currency}</td>
              <td className="whitespace-nowrap px-4 py-2">{rate.amount}</td>
              <td className="whitespace-nowrap px-4 py-2">{rate.code}</td>
              <td className="whitespace-nowrap px-4 py-2">{rate.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default ExchangeRatesTable;