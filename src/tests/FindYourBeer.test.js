import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FindYourBeer from "../components/FindYourBeer";
import { ApiContext } from "../components/ApiContext";

const mockApiData = [
  {
    id: 1,
    name: "Ale Beer",
    image: "ale.jpg",
    alt: "Ale Beer",
    price: "$5.00",
    rating: { average: 4.5 },
  },
  {
    id: 2,
    name: "Lager Beer",
    image: "lager.jpg",
    alt: "Lager Beer",
    price: "$4.00",
    rating: { average: 4.0 },
  },
  {
    id: 3,
    name: "Pilsner Beer",
    image: "pilsner.jpg",
    alt: "Pilsner Beer",
    price: "$6.00",
    rating: { average: 4.2 },
  },
  {
    id: 4,
    name: "Stout Beer",
    image: "stout.jpg",
    alt: "Stout Beer",
    price: "$7.00",
    rating: { average: 4.8 },
  },
  {
    id: 5,
    name: "Wheat Beer",
    image: "wheat.jpg",
    alt: "Wheat Beer",
    price: "$3.00",
    rating: { average: 4.3 },
  },
];

describe("FindYourBeer component", () => {
  beforeEach(() => {
    render(
      <ApiContext.Provider value={{ read: () => mockApiData }}>
        <FindYourBeer />
      </ApiContext.Provider>
    );
  });

  test("renders search input and placeholder", () => {
    const input = screen.getByPlaceholderText("Search for a beer...");
    expect(input).toBeInTheDocument();
  });

  test("filters and displays beers based on search input", () => {
    const input = screen.getByPlaceholderText("Search for a beer...");
    fireEvent.change(input, { target: { value: "lager" } });

    expect(screen.getByText("Lager Beer")).toBeInTheDocument();
    expect(screen.queryByText("Ale Beer")).not.toBeInTheDocument();
  });

  test("clears search input and displays all beers", () => {
    const input = screen.getByPlaceholderText("Search for a beer...");
    fireEvent.change(input, { target: { value: "" } });

    expect(screen.queryByText("Lager Beer")).not.toBeInTheDocument();
    expect(screen.queryByText("Ale Beer")).not.toBeInTheDocument();
    expect(screen.queryByText("Pilsner Beer")).not.toBeInTheDocument();
    expect(screen.queryByText("Stout Beer")).not.toBeInTheDocument();
    expect(screen.queryByText("Wheat Beer")).not.toBeInTheDocument();
  });

  test("shows BeerCard when a beer is selected", () => {
    const input = screen.getByPlaceholderText("Search for a beer...");
    fireEvent.change(input, { target: { value: "lager" } });
  
    const lagerBeer = screen.getByText("Lager Beer");
    fireEvent.click(lagerBeer);
  
    expect(screen.getByTestId("beer-title")).toHaveTextContent("Lager Beer");
    expect(screen.getByTestId("beer-price")).toHaveTextContent("$4.00");  
    expect(screen.getByTestId("beer-rating")).toHaveTextContent("4.00");
  });
});
