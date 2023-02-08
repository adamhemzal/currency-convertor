import { getExchangeRates } from "./api";

describe("getExchangeRates", () => {
  test("should return data from server", async () => {
    const data = await getExchangeRates();
    expect(data).toBeDefined(); // check if a variable is not undefined
  });
});
