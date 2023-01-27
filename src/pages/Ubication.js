import React from 'react';
import map from '../assets/map.png'

const Ubication = () => {
    return ( 
        <section className='content-map'>
            <article>
                <img
                    src={map}
                />
            </article>
            <article>
                <form className='form'>
                    <input className='input' type={'text'}/>
                    <input className='input' type={'email'}/>
                    <textarea/>
                </form>
            </article>

        </section>
     );
}
 
export default Ubication;