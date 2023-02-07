import { useEffect, useState } from "react"

export const Home = () => {
  const [rates, setRates] = useState<any>();
  
  const fetchData = async (): Promise<void> => {
    const res = await fetch("http://localhost:8080/");
    const data = await res.json();

    console.log({data});
  }

  useEffect( () => {
    fetchData()
  }, [])

  return(
    <>
      <h1>Home page</h1>
    </>
  )
}