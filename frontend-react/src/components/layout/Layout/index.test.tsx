import { render } from "@testing-library/react";
import Layout from "./index";

describe("Layout", () => {
  test("should render the header, main content and footer", () => {
    const testContent = "Test Content";
    const { getByTestId, getByText } = render(<Layout>{testContent}</Layout>);
    const header = getByText(/Currency Convertor/i);
    const main = getByText(testContent);
    const footer = getByTestId("footer");

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
