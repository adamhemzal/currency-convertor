import type { ExchangeRates } from "@ts/types";

type Props = {
  rates: ExchangeRates[];
  date: string;
};

const ExchangeRatesTable = ({ rates, date }: Props) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between flex-row">
        <p className="bloc text-xs">
          Last update: <span className="font-bold">{date}</span>
        </p>
        <p className="block text-xs">
          Data are provided by{" "}
          <a href="https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt">
            CNB
          </a>
        </p>
      </div>

      <div className="overflow-x-auto rounded-md border">
        <table className="min-w-full divide-y-2 divide-zinc-300 text-sm table-auto">
          <thead>
            <tr>
              {Object.keys(rates[0]).map((key: string) => (
                <th
                  key={key}
                  className="whitespace-nowrap px-4 py-3 text-left bg-zinc-100 font-bold"
                >
                  {key.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {rates.map((rate: ExchangeRates) => (
              <tr key={rate.code} className="odd:bg-zinc-50">
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
    </div>
  );
};
export default ExchangeRatesTable;
