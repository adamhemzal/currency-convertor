import { render } from "@testing-library/react";
import ExchangeRatesTable from "./index";

describe("ExchangeRatesTable", () => {
  test("should render the table with the correct props", () => {
    const rates = [
      {
        country: "Canada",
        currency: "dollar",
        amount: "1",
        code: "CAD",
        rate: "17",
      },
    ];
    const date = "07 February 2022";

    const { getByText } = render(
      <ExchangeRatesTable rates={rates} date={date} />
    );

    expect(getByText(/Last updated/i)).toBeInTheDocument();
    expect(getByText(/CAD/i)).toBeInTheDocument();
    expect(getByText(/Data provided/i)).toBeInTheDocument();
  });
});
