import { useContext, useState, createContext } from 'react';

const LightModeContext = createContext();

export function LightModeProvider({ children }) {
    const [lightMode, setLightMode] = useState(false);
    const handleLightMode = () => {
        setLightMode(!lightMode);
        updateLightMode(!lightMode);
    };

    return <LightModeContext.Provider value={{ lightMode, handleLightMode }}>{children}</LightModeContext.Provider>;
}

// 커스텀 훅
export const useLigthMode = () => useContext(LightModeContext);

function updateLightMode(lightMode) {
    if (lightMode) {
        document.documentElement.classList.add('light');
    } else {
        document.documentElement.classList.remove('light');
    }
}
