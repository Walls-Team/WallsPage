import { navigate } from 'gatsby';
import React from 'react';
import { BackArrow } from '../assets/iconsSvg';

const BackButton = () => {
    return ( 
        <button className='backBtn' onClick={()=>navigate(-1)}>
            <BackArrow/>
        </button>
     );
}
 
export default BackButton;