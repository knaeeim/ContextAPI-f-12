import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import About from "./About";
import Doctors from "./Doctors";
import ContactUs from "./ContactUs";
import LoadingPage from "./LoadingPage";
import DoctorsDetails from "./DoctorsDetails";
import Appoinments from "./Appoinments";


export const router = createBrowserRouter([
    {
        path: '/', 
        element : <RootLayout></RootLayout>, 
        children : [
            {
                index : true, 
                element : <Home></Home>
            }, 
            {
                path : '/about', 
                element: <About></About>
            }, 
            {
                path : "/doctors", 
                element : <Doctors></Doctors>, 
                loader : () => fetch('doctors.json'),
                hydrateFallbackElement: <LoadingPage></LoadingPage>
            }, 
            {
                path : '/contact-us', 
                element : <ContactUs></ContactUs> 
            }, 
            {
                path : '/doctors-details/:id',
                element : <DoctorsDetails></DoctorsDetails>, 
                loader : async ({ params }) => {
                    const pid = parseInt(params.id)
                    const data = await fetch('doctors.json'); 
                    const res = await data.json(); 
                    const doctor = res.find((doc) => doc.id === pid)
                    return doctor;
                }
            }, 
            {
                path : '/appointments', 
                element: <Appoinments></Appoinments>
            }
        ]
    }
])