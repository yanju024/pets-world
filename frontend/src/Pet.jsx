import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

/**
 * 
 */
const Pet = (pet) => {
    
    const loadPet = () => {

    }

    return <div onClick={loadPet} className="m-2 p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={`src/assets/images/${pet['pet'].photo}` } />
                </a>
                
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {pet['pet'].name} </h5>
                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {pet['pet'].birthYear} </h6>
                    </a>

                    {pet['pet']['favFoods'] !== undefined ? <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"  >Favorite Food: {pet['pet']['favFoods'].join(",")}</p> : ''}
                    <Link to={`/pet/${pet['pet'].id}`} className="button mb-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    
                    </Link>
                </div>
            </div>
}

export default Pet;