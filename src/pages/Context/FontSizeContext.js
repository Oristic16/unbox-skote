import React, { createContext, useContext, useState } from 'react'

const FontSizeContext = createContext();

export const useFontSizeContext = () => useContext(FontSizeContext)

export const FontSizeProvider = ({ children }) => {
    const defaultFontSize = {
        h1: 2,
        h2: 1.625,
        h3: 1.42188,
        h4: 1.21875,
        h5: 1.01562,
        h6: 0.8125,
        p: 0.8125,
        a: 0.8125,
        div: 0.8125,
        span: 0.8125,
        input: 0.8125,
        td: 0.8125,
        th: 0.8125,
    }
    const [fontSize, setFontSize] = useState(defaultFontSize);

    return (
        <FontSizeContext.Provider value={{ fontSize, setFontSize, defaultFontSize }}>
            {children}
        </FontSizeContext.Provider>
    )
}