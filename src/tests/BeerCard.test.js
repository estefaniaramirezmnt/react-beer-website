import React from "react";
import { render, screen } from "@testing-library/react";
import BeerCard from "../components/BeerCard";

const mockBeer = {
    id: 1,
    name: "Ale Beer",
    image: "ale.jpg",
    alt: "Ale Beer",
    price: "$5.00",
    rating: { average: 4.5 },
  };

describe("BeerCard component", () => {
  test("renders the beer card with the correct data", () => {
    render(<BeerCard beer={mockBeer} />);
    const beerTitle = screen.getByTestId("beer-title");
    const beerPrice = screen.getByTestId("beer-price");
    const beerRating = screen.getByTestId("beer-rating");

    expect(beerTitle).toHaveTextContent("Ale Beer");
    expect(beerPrice).toHaveTextContent("Price: $5.00");
    expect(beerRating).toHaveTextContent("Rating: 4.50⭐");
  });

});
