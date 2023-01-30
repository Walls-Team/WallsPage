import React from 'react';
import map from '../assets/map.png'
import Button from '../components/button';

const Ubication = () => {
    return ( 
        <section className='content-map' id='location-section'>
            <article className='map__image'>
                <img
                    src={map}
                />
            </article>
            <article className='map__form'>
                <form className='form'>
                    <input placeholder='Name' className='input' type={'text'}/>
                    <input placeholder='Email' className='input' type={'email'}/>
                    <textarea placeholder='Message' className='textarea'/>
                </form>
                <Button text='Contáctanos' onPress={''}/>
            </article>

        </section>
     );
}
 
export default Ubication;