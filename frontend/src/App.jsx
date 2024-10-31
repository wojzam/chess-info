import {Navigate, Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import MainPage from "./pages/MainPage.jsx";

export default function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <main className="content">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="*" element={<Navigate replace to="/"/>}/>
                    </Routes>
                </main>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}