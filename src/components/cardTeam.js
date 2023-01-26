import React from 'react';
import userone from '../assets/user1.png'
const Card = ({img,name,role}) => {
    return ( 
        <article className='team__card'>
          
            <img
                src={img}
            />
            
            <div className='team__card_text'>
                <p className='role'>{role}</p>
                <p className='name'>{name}</p>
            </div>
        </article>
     );
}
 
export default Card;