import { priceToNumber, handleSort } from "../components/SelectOrder";

describe("priceToNumber function", () => {
    test("handles invalid input", () => {
        expect(priceToNumber("$3.00")).toBe(3);
        expect(priceToNumber("$3.50")).toBe(3.5);
  });
});

describe("handleSort function", () => {
  const onSortMock = jest.fn();

  const mockData = [
    { name: "Ale", price: "$5.00" },
    { name: "Lager", price: "$4.00" },
    { name: "Pilsner", price: "$6.00" },
  ];

  test("sorts data by name ascending", () => {
    handleSort({ target: { value: "name-asc" } }, onSortMock, mockData);
    expect(onSortMock).toHaveBeenCalledWith([
      { name: "Ale", price: "$5.00" },
      { name: "Lager", price: "$4.00" },
      { name: "Pilsner", price: "$6.00" },
    ]);
  });

  test("sorts data by name descending", () => {
    handleSort({ target: { value: "name-desc" } }, onSortMock, mockData);
    expect(onSortMock).toHaveBeenCalledWith([
      { name: "Pilsner", price: "$6.00" },
      { name: "Lager", price: "$4.00" },
      { name: "Ale", price: "$5.00" },
    ]);
  });

  test("sorts data by price ascending", () => {
    handleSort({ target: { value: "price-asc" } }, onSortMock, mockData);
    expect(onSortMock).toHaveBeenCalledWith([
      { name: "Lager", price: "$4.00" },
      { name: "Ale", price: "$5.00" },
      { name: "Pilsner", price: "$6.00" },
    ]);
  });

  test("sorts data by price descending", () => {
    handleSort({ target: { value: "price-desc" } }, onSortMock, mockData);
    expect(onSortMock).toHaveBeenCalledWith([
      { name: "Pilsner", price: "$6.00" },
      { name: "Ale", price: "$5.00" },
      { name: "Lager", price: "$4.00" },
    ]);
  });
});
