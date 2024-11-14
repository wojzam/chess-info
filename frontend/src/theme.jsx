import {createContext, useMemo} from "react";
import createTheme from "@mui/material/styles/createTheme";

export const themeSettings = () => {
    return {
        palette: {
            mode: "light",
            primary: {
                main: "#000000",
            },
            secondary: {
                main: "#ffffff",
            },
            background: {
                default: "#edd7b3",
                paper: "#b38760",
                paperDarker: "#7a5b3f",
            },
        },
        typography: {
            fontFamily: ["Kreon", "serif"].join(","),
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 16,
                        "&:hover": {
                            backgroundColor: "#3c3c3c",
                        },
                        "&:focus": {
                            backgroundColor: "#3c3c3c",
                        },
                    },
                },
            },
        },
    };
};

export const ColorModeContext = createContext({});

export const useMode = () => {
    const theme = useMemo(() => createTheme(themeSettings()), []);
    return [theme];
};
