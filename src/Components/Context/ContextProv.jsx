import React, { useState } from "react";
import { AppContext } from "./CreateContext";

const ContextProv = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [appoinments, setAppoinments] = useState([]); 

    const handleAppointmentOfDoctors = (doctors) => {
        setAppoinments((prev) => [...prev, doctors])
    }

    const [user, setUser] = useState({ name : "Rahim", age : 20})
    
    const userInfo = {
        handleAppointmentOfDoctors, 
        user, 
        setUser,
        loading, 
        setLoading, 
        appoinments, 
        setAppoinments
    }

    return (
        <AppContext value={userInfo}>
            {children}
        </AppContext>
    );
};

export default ContextProv;
