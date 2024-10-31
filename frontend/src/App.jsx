import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";

export default function App() {

    return (
        <main className="content">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="*" element={<Navigate replace to="/"/>}/>
            </Routes>
        </main>
    );
}