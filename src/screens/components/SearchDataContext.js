import { createContext, useContext, useState } from "react";

const SearchDataContext = createContext();

export const useSearchData = () => useContext(SearchDataContext);

export const SearchDataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    roomType: "",
    checkInDate: null,
    checkOutDate: null,
    adults: 1,
    children: 0,
  });

  return (
    <SearchDataContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchDataContext.Provider>
  );
};
