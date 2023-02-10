import { render, fireEvent, waitFor, getByText } from "@testing-library/react";
import ExchangeRatesForm from "./index";

const rates = [
  {
    country: "Canada",
    currency: "dollar",
    amount: "1",
    code: "CAD",
    rate: "17",
  },
  {
    country: "United States",
    currency: "dollar",
    amount: "1",
    code: "USD",
    rate: "20",
  },
];

describe("ExchangeRatesForm", () => {

  test("should render and display input for amount, select for currency, covert button and output", () => {
    const { getByTestId, getByLabelText } = render(<ExchangeRatesForm rates={rates} />)
    
    const inputCZK = getByLabelText(/You have CZK/i);
    const select = getByTestId("currencySelect");
    const convertButton = getByTestId("convertBtn");
    const convertedAmount = getByTestId("convertedAmount");

    expect(inputCZK).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(convertButton).toBeInTheDocument();
    expect(convertedAmount).toBeInTheDocument();

  });

  test('should have correct values in the form', () => {
    const { getByTestId, getByLabelText } = render(<ExchangeRatesForm rates={rates} />)
    
    const inputCZK = getByLabelText(/You have CZK/i);
    const select = getByTestId("currencySelect");
  
    fireEvent.change(inputCZK, { target: { value: "68" } }); // input in CZK
    fireEvent.change(select, { target: { value: 'CAD' } });
  
    expect(inputCZK).toHaveValue(68);
    expect(select).toHaveValue("CAD");
  });

  /* 👇 the calculation function need to be rewritten in order to create a proper functioning test

  test("should display the result of conversion", async () => {
    const { getByTestId, getByLabelText, getByText } = render(<ExchangeRatesForm rates={rates} />);
    const inputCZK = getByLabelText(/You have CZK/i);
    const select = getByTestId("currencySelect");
    const convertButton = getByTestId("convertBtn");
    const convertedAmount = getByTestId("convertedAmount");
    
    fireEvent.change(inputCZK, { target: { value: "68" } }); // input in CZK
    fireEvent.change(select, { target: { value: 'CAD' } });
    
    await waitFor(() => {
      expect(getByText(/You get CAD/i)).toBeInTheDocument();
      expect(getByText(/4 CAD/i)).toBeInTheDocument();
    });
  });

  */
});
