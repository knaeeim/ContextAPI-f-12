import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const navLink = <>
        <div className='flex justify-center gap-5 text-lg font-bold'>
            <NavLink className={({isActive})=> isActive ? "border-b-4 text-green-600" : ""} to={'/'}>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? "border-b-4 text-green-600" : ""} to={'/doctors'}>Doctors</NavLink>
            <NavLink className={({isActive})=> isActive ? "border-b-4 text-green-600" : ""} to={'/appointments'}>Appointments</NavLink>
            <NavLink className={({isActive})=> isActive ? "border-b-4 text-green-600" : ""} to={'/about'}>About</NavLink>
            <NavLink className={({isActive})=> isActive ? "border-b-4 text-green-600" : ""} to={'/contact-us'}>Contact Us</NavLink>
        </div>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Doctors Planet</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;