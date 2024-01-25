import React, {useState, useContext, createContext} from "react";

//테마 컨텍스트 생성
const ThemeContext = createContext(); // 얘만 있으면, ThemeContext.provider로 value값을 참조할 수 있다.

//테마 제공자 컴포넌트
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };


return (
    <ThemeContext.Provider value = {{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
)
}

export function useTheme(){ // hook을 새로 만든 것.
    const{theme, toggleTheme} = useContext(ThemeContext)
    return {theme, toggleTheme}
}