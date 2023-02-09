import express, { Express, Request, Response, NextFunction } from "express";
import { parseCSV } from "./functions";

// Define port
const port = process.env.PORT || 8080;

// Create express app
const app: Express = express();

// Enable CORS for all methods
// More info: https://enable-cors.org/server_expressjs.html
app.use( (req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.get('/', async (req: Request, res: Response) => {
  const rawData = await fetch("https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt");
  const data: string[] = await (await rawData.text()).split("\n");
  
  // remove the number in a date string and get the current date
  const date: string = new Date(data[0].split(" ").slice(0, -1).join(" ")).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

  // after date is created, remove the date from the original array
  data.shift();

  const parsedData = parseCSV(data);

  const result = {
    date: date,
    rates: parsedData
  }

  res.send(result);
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});

export default app;