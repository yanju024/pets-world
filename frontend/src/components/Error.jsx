import React from 'react';

/**
 * 
 */
const Error = (message) => {
    return <div className='font-size-18'>{JSON.stringify(message[0])}</div>;
}

// #endregion

export default Error;