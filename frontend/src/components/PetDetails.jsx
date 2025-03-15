import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PetDetails = () => {
    let {id} = useParams();
    const [pet, setPet] = useState({})
    useEffect(() => {
        axios({
            // Endpoint to send files
            url: `http://localhost:5001/api/pet/${id}`,
            method: "GET",
            headers: {
                // Add any auth token here
                authorization: "your token comes here",
            },
        }).then((res) => {
            console.log(res.data)
            setPet(res.data)
        }).catch((err) => {});

    }, [id])
    if(pet) {
        return <div className='flex flex-wrap justify-center mt-10'>
                    <div className="m-2 p-4 max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={`../src/assets/images/${pet.photo}` } />
                            </a>
                            
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {pet.name} </h5>
                                    <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {pet.birthYear} </h6>
                                </a>

                                {pet['favFoods'] !== undefined ? <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"  >Favorite Food: {pet['favFoods']?.join(",")}</p> : ''}
                                
                            </div>
                        </div>
                </div>;
    } else {
        <Error />
    }
}


// #endregion

export default PetDetails;