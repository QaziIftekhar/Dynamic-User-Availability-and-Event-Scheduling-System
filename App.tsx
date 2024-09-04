import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Availability from './components/Availability';
import Sessions from './components/Sessions';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/availability" element={<Availability />} />
                    <Route path="/sessions" element={<Sessions />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
