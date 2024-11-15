import {Navigate, Route, Routes} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {ColorModeContext, useMode} from './theme';
import Layout from './components/Layout';
import MainPage from './pages/MainPage.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import PuzzlePage from "./pages/PuzzlePage.jsx";
import DailyTaskPage from "./pages/DailyTaskPage.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import UserCoursesPage from "./pages/UserCoursesPage.jsx";
import NewMeetingPage from "./pages/NewMeetingPage.jsx";
import InstructorCoursesPage from "./pages/InstructorCoursesPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";

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
                        <Route path="/puzzle" element={<PuzzlePage/>}/>
                        <Route path="/daily-task" element={<DailyTaskPage/>}/>
                        <Route path="/tasks" element={<TaskPage/>}/>
                        <Route path="/user-courses" element={<UserCoursesPage/>}/>
                        <Route path="/new-meeting" element={<NewMeetingPage/>}/>
                        <Route path="/instructor-courses" element={<InstructorCoursesPage/>}/>
                        <Route path="/terms" element={<TermsPage/>}/>
                        <Route path="/contact" element={<ContactPage/>}/>
                        <Route path="/faq" element={<FAQPage/>}/>
                    </Route>
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </Routes>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
