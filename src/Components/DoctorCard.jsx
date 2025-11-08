import React, { useContext } from 'react';
import { AppContext } from './Context/CreateContext';

const DoctorCard = ({ doctor }) => {

    const { handleAppointmentOfDoctors } = useContext(AppContext);

    const {name, image, speciality, education, workingAt, experience} = doctor;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt={`${name}'s image`} />
                </figure>
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-green-700">{name}</h2>
                    <div className='font-bold text-md'>
                        <p>Speciality : {speciality}</p>
                        <p>Education : {education}</p>
                        <p>Workin At : {workingAt}</p>
                    </div>
                    <div className="badge badge-success text-white">{experience}</div>
                </div>
                <div>
                <button onClick={() => handleAppointmentOfDoctors(doctor)}>Add Doctors</button>
            </div>
            </div>
        </div>
    );
};

export default DoctorCard;