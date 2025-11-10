import React from 'react';
import { AppContext } from './Context/CreateContext';
import { Link } from 'react-router';

const DoctorCard = ({ doctor }) => {

    const {id, name, image, speciality, education, workingAt, experience} = doctor;

    return (
        <div className='shadow-2xl p-5 rounded-2xl'>
            <div className="card bg-base-100 w-[400px]">
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
                <Link className='btn btn-primary w-full' to={`/doctors-details/${id}`}>Show Details</Link>
            </div>
            </div>
        </div>
    );
};

export default DoctorCard;