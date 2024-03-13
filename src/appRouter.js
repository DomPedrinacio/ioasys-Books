// appRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Books from './books';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<App />} />
                <Route path="/books" element={<Books />} />
                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
