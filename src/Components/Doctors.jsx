import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import DoctorCard from './DoctorCard';
import { AppContext } from './Context/CreateContext';
import LoadingPage from './LoadingPage';

const Doctors = () => {
    const data = useLoaderData();
    const [doctors, setDoctors] = useState(data)
    const {loading, setLoading} = useContext(AppContext);

    useEffect(() => {
        setDoctors(data);
        setLoading(false);
    }, [data, setLoading])

    const handleSearchDoctors = (e) => {
        e.preventDefault();
        const searchKeywords = e.target.search.value;
        if (searchKeywords) {
            const searchResult = data.filter((d) => d.name.toLowerCase().includes(searchKeywords.toLowerCase()))
            setDoctors(searchResult)
        }
        else{
            setDoctors(data);
        }
    }

    if(loading){
        return <LoadingPage></LoadingPage>;
    }


    return (
        <div>
            <div className='text-center my-16 space-y-5'>
                <h1 className='font-bold text-4xl text-green-500'>Here are our all Doctors</h1>
                <h1 className='font-bold text-3xl'>Doctors : {data.length}</h1>
            </div>
            <div className='w-full mb-10'>
                <form onSubmit={handleSearchDoctors} className='flex justify-center items-center flex-col space-y-8'>
                    <input className='outline outline-green-600 px-4 py-3 w-6/12 rounded-xl' type="search" name="search" id="" />
                    <button className='btn btn-outline btn-success text-2xl'>Search</button>
                </form>
            </div>
            <div className='grid grid-cols-3 gap-10 justify-items-center mb-16'>
                {
                    doctors?.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default Doctors;