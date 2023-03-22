import React from "react";

import {
    BrowserRouter,
    Navigate,
    redirect,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<CardDetails />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
