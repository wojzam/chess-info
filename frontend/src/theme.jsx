import { createContext, useMemo } from "react";
import createTheme from "@mui/material/styles/createTheme";

export const themeSettings = () => {
    return {
        palette: {
            mode: "light",
            primary: {
                main: "#b38760",
            },
            secondary: {
                main: "#7a5b3f",
            },
            background: {
                default: "#edd7b3",
            },
        },
        typography: {
            fontFamily: ["Kreon", "serif"].join(","),
        },
    };
};

export const ColorModeContext = createContext({});

export const useMode = () => {
    const theme = useMemo(() => createTheme(themeSettings()), []);
    return [theme];
};
