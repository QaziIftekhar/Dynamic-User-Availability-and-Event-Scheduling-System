import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Availability = () => {
    const [availability, setAvailability] = useState([]);

    useEffect(() => {
        const fetchAvailability = async () => {
            const response = await axios.get('/api/user/availability');
            setAvailability(response.data);
        };
        fetchAvailability();
    }, []);

    const handleUpdate = async () => {
        await axios.put('/api/user/availability', { availability });
    };

    return (
        <div>
            <h2>My Availability</h2>
            <button onClick={handleUpdate}>Update Availability</button>
        </div>
    );
};

export default Availability;
