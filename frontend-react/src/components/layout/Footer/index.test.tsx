import { render } from "@testing-library/react";
import Footer from "./index";

describe("Footer", () => {
  test("should render the footer with copyright text", () => {
    const { getByTestId, getByText } = render(<Footer />);
    const footer = getByTestId("footer");
    const text = getByText(/@2023/i);

    expect(footer).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
