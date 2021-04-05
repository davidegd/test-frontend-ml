import React, { useState, createContext } from "react";

const AppProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <div>
      <AppContext.Provider value={[state, setState]}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default AppProvider;
export const AppContext = createContext();
