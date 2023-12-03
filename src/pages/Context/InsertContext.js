import React, { createContext, useContext, useState } from "react";

const InsertConText = createContext();

export const useInsertConText = () => useContext(InsertConText);

function InsertContext({ children }) {
  const [insert, setInsert] = useState("");

  return (
    <InsertConText.Provider value={{ insert, setInsert }}>
      {children}
    </InsertConText.Provider>
  );
}

export default InsertContext;
