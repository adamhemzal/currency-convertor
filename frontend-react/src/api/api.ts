import type { ResponseData } from "@ts/types";

export const getExchangeRates = async (): Promise<ResponseData> => {
  const res = await fetch("http://localhost:8080/");
  return res.json();
}