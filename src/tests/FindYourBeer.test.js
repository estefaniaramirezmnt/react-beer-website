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
