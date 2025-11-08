import React, { useState } from "react";
import { AppContext } from "./CreateContext";

const ContextProv = ({ children }) => {
    

    const handleAppointmentOfDoctors = (doctors) => {
        console.log("I got it", doctors);
    }

    const [user, setUser] = useState({ name : "Rahim", age : 20})
    
    const userInfo = {
        handleAppointmentOfDoctors, 
        user, 
        setUser,
    }

    return (
        <AppContext value={userInfo}>
            {children}
        </AppContext>
    );
};

export default ContextProv;
