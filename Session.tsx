import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sessions = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const fetchSessions = async () => {
            const response = await axios.get('/api/session/user/:userId');
            setSessions(response.data);
        };
        fetchSessions();
    }, []);

    return (
        <div>
            <h2>My Sessions</h2>
        </div>
    );
};

export default Sessions;
