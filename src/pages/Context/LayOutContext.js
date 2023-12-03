import React, { createContext, useContext, useState } from 'react';

const LayOutConText = createContext();

export const useLayOutConText = () => useContext(LayOutConText);

function LayOutContext({ children }) {
  const [layOut, setLayOut] = useState('');

  return (
    <LayOutConText.Provider value={{ layOut, setLayOut }}>
      {children}
    </LayOutConText.Provider>
  );
}

export default LayOutContext;
