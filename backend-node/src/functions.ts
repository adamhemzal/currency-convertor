export type ExchangeRates = {
  country: string,
  currency: string,
  amount: string,
  code: string,
  rate: string
}

export const parseCSV = (data: string[]) => {
  const result: ExchangeRates[] = []

  // get header from the data and use it as keys in object
  const keys: string[] = data[0].toLowerCase().split("|");
  
  // remove the header from data
  data.shift();
  
  for (const item of data) {
    if(item.length > 0) {
      const newObject: any = new Object();
      const values: string[] = item.split("|");

      // create object
      keys.forEach( (key: string, index: number) => { newObject[key] = values[index] })
      
      result.push(newObject);
    }
  }

  return result
}