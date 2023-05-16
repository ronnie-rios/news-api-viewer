import { createContext, useContext, useState } from "react";

const CountryContext = createContext({
  country: "gb",
  toggleCountry: () => {}
});

function CountryProvider({ children }) {
  const [country, setCountry] = useState("gb");

  const toggleCountry = () => {
    setCountry(country === "us" ? "gb" : "us")
  }

  return (
    <CountryContext.Provider
      value={{
        country,
        toggleCountry
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
    return useContext(CountryContext)
}

export { CountryProvider }
