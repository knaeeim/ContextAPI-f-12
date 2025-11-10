import React, { useContext } from 'react';
import { AppContext } from './Context/CreateContext';

const Appoinments = () => {
    const { appoinments } = useContext(AppContext);

    return (
        <div>
            <ul>
                {
                    appoinments.map((app) => <li>{app.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Appoinments;