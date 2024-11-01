import {Navigate, Route, Routes} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {ColorModeContext, useMode} from './theme';
import Layout from './components/Layout';
import MainPage from './pages/MainPage.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';

export default function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                    </Route>
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </Routes>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
