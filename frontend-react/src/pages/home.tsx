import { useQuery } from "@tanstack/react-query";
import { getExchangeRates } from "@api/api";
import Loader from "@components/utils/Loader";
import ExchangeRatesTable from "@components/table/ExchangeRatesTable";
import ExchangeRatesForm from "@components/form/ExchangeRatesForm";

const Home = () => {
  const { data, error, isLoading } = useQuery({queryKey: ['rates'], queryFn: getExchangeRates});
  
  if(isLoading) { 
    return <Loader />
  }

  if(error) {
    return <p className="text-red-600">An error has occurred</p>
  } 

  return(
    <>
      <ExchangeRatesForm rates={data!.rates} />
      <h2 className="text-h3">CZK Exchange Rates</h2>
      <ExchangeRatesTable date={data!.date} rates={data!.rates} />
    </>
  )
}
export default Home;