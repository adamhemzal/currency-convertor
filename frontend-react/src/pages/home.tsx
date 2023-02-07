import { useQuery } from "@tanstack/react-query";
import { getExchangeRates } from "@api/api";
import Loader from "@components/utils/Loader";
import ExchangeRatesTable from "@components/table/ExchangeRatesTable";

const Home = () => {
  const { data, error, isLoading } = useQuery({queryKey: ['rates'], queryFn: getExchangeRates});

  const handleConversion = (e: any) => {
    e.preventDefault();
    console.log(e.target)
  }
  
  if(isLoading) { 
    return <Loader />
  }

  if(error) {
    return <p>An error has occurred</p>
  } 

  return(
    <>
      <form onSubmit={handleConversion} className="border">
        <label htmlFor="amountBeforeId">You have CZK</label>
        <input type="number" name="amountBefore" id="amountBeforeId" />

        <select name="currencySelect">
          <option defaultValue="">Select currency</option>
          {data.rates.map( (rate: any) => {
            console.log(rate.rate);
            return(
              <option key={rate.code} value={rate.code}>{rate.code}</option>
            )
          })}
        </select>

        <label htmlFor="amountAfterId">You get</label>
        <output name="convertedAmount" htmlFor="amountBeforeId"></output>

        <button type="submit">Convert</button>
      </form>

      <h2 className="text-h3">Current exchange rates</h2>
      <ExchangeRatesTable date={data.date} rates={data.rates} />
    </>
  )
}
export default Home;