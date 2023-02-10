import type { ExchangeRates } from "@ts/types";
import { useState } from "react";

type Props = {
  rates: ExchangeRates[];
};

const ExchangeRatesForm = ({ rates }: Props) => {
  const [currency, setCurrency] = useState<string>("");
  const [displayCurrency, setDisplayCurrency] = useState<string>("");
  const [amountCZK, setAmountCZK] = useState<string>("");
  const [calculation, setCalculation] = useState<string>("0");

  /* for now use any */
  const handleConversion = (e: any): void => {
    e.preventDefault();
    const select = e.target.currencySelect;
    const selectedOption = select.options[select.selectedIndex];
    const currencyRate = Number(selectedOption.getAttribute("data-rate"));
    const currencyAmount = Number(selectedOption.getAttribute("data-amount"));

    const result: number = Number(amountCZK) / (currencyRate / currencyAmount);
    setDisplayCurrency(currency);
    setCalculation(result.toFixed(3));
  };

  return (
    <form
      onSubmit={handleConversion}
      className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-2 md:gap-y-0"
    >
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="amountBeforeId"
            className="block text-sm text-zinc-500"
          >
            You have CZK
          </label>
          <input
            required
            min="0"
            type="number"
            name="amountBefore"
            id="amountBeforeId"
            className="rounded-md px-4 py-2 border border-zinc-200 shadow-sm"
            value={amountCZK}
            onChange={(e) => setAmountCZK(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="currencySelectId"
            className="block text-sm text-zinc-500"
          >
            Select currency to convert
          </label>
          <select
            required
            data-testid="currencySelect"
            name="currencySelect"
            id="currencySelectId"
            onChange={(e) => setCurrency(e.target.value) }
            value={currency}
            className="rounded-md px-4 py-3 border border-zinc-200 shadow-sm"
          >
            <option defaultValue="">Select currency</option>
            {rates.map((rate: ExchangeRates) => {
              return (
                <option
                  key={rate.code}
                  value={rate.code}
                  data-rate={rate.rate}
                  data-amount={rate.amount}
                >
                  {rate.code}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Button */}
      <div className="place-self-center">
        <button
          data-testid="convertBtn"
          type="submit"
          className="rounded-full border px-6 py-2 bg-zinc-700 text-white font-bold shadow-md hover:scale-105 transition-all"
        >
          Convert
        </button>
      </div>

      {/* Result */}
      <div className="place-self-center">
        <label
          htmlFor="amountAfterId"
          className="block text-sm text-zinc-500 text-center md:text-left"
        >
          You get {displayCurrency}
        </label>
        <output
          name="convertedAmount"
          data-testid="convertedAmount"
          htmlFor="amountBeforeId"
          className="text-h3"
        >
          {calculation} {displayCurrency}
        </output>
      </div>

    </form>
  );
};
export default ExchangeRatesForm;
