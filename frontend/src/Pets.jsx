import React from 'react';
import { useState, useEffect } from 'react'
import Pet from './Pet';

/**
 * Component to load all the pet list
 * Author Yanju KS
 */
const Pets = () => {
    const [ petList , setPetList] = useState([])
    const [error, setError] = useState('');
    useEffect(()=>{
        getData()
    },[])
    
    const getData= async () => {
        await fetch('http://localhost:5001/api/pets' , {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json();
        }).then(function(myJson) {
            setPetList(myJson)
        }).catch((error) => {
            setError(error)
            console.log(error)
        });
    }
    
    return  <div className='flex flex-wrap justify-center mt-10'  > 
                { petList.length > 0 && petList.map((obj, i) =>  <Pet key={i} pet={obj} />) }
            </div>    
}


export default Pets;