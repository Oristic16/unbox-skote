import React, { createContext, useContext, useState } from 'react'

const FontSizeContext = createContext();

export const useFontSizeContext = () => useContext(FontSizeContext)

export const FontSizeProvider = ({ children }) => {
    const defaultFontSize = {
        h1: 2.25,
        h2: 1.875,
        h3: 1.5,
        h4: 1.125,
        h5: 1,
        h6: 0.938,
        p: 1,
        a: 1,
        div: 1,
        span: 1
    }
    const [fontSize, setFontSize] = useState(defaultFontSize);

    return (
        <FontSizeContext.Provider value={{ fontSize, setFontSize, defaultFontSize }}>
            {children}
        </FontSizeContext.Provider>
    )
}