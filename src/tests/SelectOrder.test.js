import { priceToNumber, handleSort } from "../components/SelectOrder";

describe("priceToNumber function", () => {
    test("handles invalid input", () => {
        expect(priceToNumber("$3.00")).toBe(3);
        expect(priceToNumber("$3.50")).toBe(3.5);
  });
});
