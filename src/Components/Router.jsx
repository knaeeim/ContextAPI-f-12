import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import About from "./About";
import Doctors from "./Doctors";
import ContactUs from "./ContactUs";
import LoadingPage from "./LoadingPage";


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
            }
        ]
    }
])