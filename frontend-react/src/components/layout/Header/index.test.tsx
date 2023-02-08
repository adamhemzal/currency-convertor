import { render } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  test("should render the header with text and an icon", () => {
    const { getByTestId, getByText } = render(<Header />);
    const header = getByTestId("header");
    const icon = getByTestId("icon");
    const title = getByText(/Currency Convertor/i);

    expect(header).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
