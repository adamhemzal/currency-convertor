import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render the layout and home components", () => {
    const { getByTestId, getByText } = render(<App />);
    const header = getByTestId("header");
    const footer = getByTestId("footer");
    const home = getByText(/Currency Convertor/i);

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(home).toBeInTheDocument();
  });
});
