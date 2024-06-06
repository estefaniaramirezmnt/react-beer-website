import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BeerList from "../components/BeerList";
import { ApiContext } from "../components/ApiContext";

const mockApiData = [
  {
    id: 1,
    name: "Ale Beer",
    image: "ale.jpg",
    alt: "Ale Beer",
    price: "$5.00",
  },
  {
    id: 2,
    name: "Lager Beer",
    image: "lager.jpg",
    alt: "Lager Beer",
    price: "$4.00",
  },
  {
    id: 3,
    name: "Pilsner Beer",
    image: "pilsner.jpg",
    alt: "Pilsner Beer",
    price: "$6.00",
  },
  {
    id: 4,
    name: "Stout Beer",
    image: "stout.jpg",
    alt: "Stout Beer",
    price: "$7.00",
  },
  {
    id: 5,
    name: "Wheat Beer",
    image: "wheat.jpg",
    alt: "Wheat Beer",
    price: "$3.00",
  },
];

describe("BeerList component", () => {
  beforeEach(() => {
    render(
      <ApiContext.Provider value={{ read: () => mockApiData }}>
        <BeerList />
      </ApiContext.Provider>
    );
  });

  test("renders beer names", () => {
    const beerNames = mockApiData.map((beer) => beer.name);
    beerNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test("renders beer images", () => {
    const beerImages = mockApiData.map((beer) => ({
      alt: beer.alt,
    }));
    beerImages.forEach((image) => {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument();
    });
  });

  test("renders beer prices", () => {
    const beerPrices = mockApiData.map((beer) => beer.price.slice(1));
    beerPrices.forEach((price) => {
      expect(screen.getByText(`$${price}`)).toBeInTheDocument();
    });
  });

  test("sorts the beers by name ascending", () => {
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "name-asc" },
    });
    const sortedNames = mockApiData
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((beer) => beer.name);
    sortedNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test("sorts the beers by name descending", () => {
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "name-desc" },
    });
    const sortedNames = mockApiData
      .sort((a, b) => b.name.localeCompare(a.name))
      .map((beer) => beer.name);
    sortedNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test("sorts the beers by price ascending", () => {
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-asc" },
    });
    const sortedPrices = mockApiData
      .sort(
        (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
      )
      .map((beer) => beer.price.slice(1));
    sortedPrices.forEach((price) => {
      expect(screen.getByText(`$${price}`)).toBeInTheDocument();
    });
  });

  test("sorts the beers by price descending", () => {
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price-desc" },
    });
    const sortedPrices = mockApiData
      .sort(
        (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
      )
      .map((beer) => beer.price.slice(1));
    sortedPrices.forEach((price) => {
      expect(screen.getByText(`$${price}`)).toBeInTheDocument();
    });
  });
});
