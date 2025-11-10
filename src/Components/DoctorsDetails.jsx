import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AppContext } from './Context/CreateContext';

const DoctorsDetails = () => {

    const doctor = useLoaderData();

    const { handleAppointmentOfDoctors } = useContext(AppContext);

    const {name, image, speciality, education, workingAt, experience} = doctor;

    return (
        <div className='bg-sky-200 p-10'>
            <div className='flex justify-center items-center gap-10'>
                {/* image div */}
                <div className='w-[550px]'>
                    <img className='rounded-xl' src={image} />
                </div>

                {/* text div */}
                <div className='space-y-10'>
                    <div>
                        <h1 className='text-5xl font-bold text-green-800'>Name : {name}</h1>
                    </div>
                    <div className='text-2xl font-bold space-y-8'>
                        <h1>Speciality : {speciality}</h1>
                        <p>Education : {education}</p>
                        <p>Working at : {workingAt}</p>
                        <p>Experience : {experience}</p>
                    </div>

                    <div>
                        <Link to={'/appointments'} onClick={() => handleAppointmentOfDoctors(doctor)} className='btn btn-success text-black w-full text-2xl'>Book Your Appoinment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsDetails;