import { createContext } from "react";
import fetchData from "./FetchData";

const apiData = fetchData("https://api.sampleapis.com/beers/ale");

export const ApiContext = createContext(apiData);

export function ApiProvider({ children }) {
  return (
    <ApiContext.Provider value={apiData}>
      {children}
    </ApiContext.Provider>
  );
}
