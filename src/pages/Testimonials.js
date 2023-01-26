import React from 'react';
import CardTestimonial from '../components/cardTestimonial';
import Title from '../components/title';


const Testimonials = () => {
    return ( 
        <div className='content-testimonial'>
            <Title titleA={'Que dicen'} titleB=' nuestros clientes'/>
            
            <CardTestimonial/>
       
        </div>
     );
}
 
export default Testimonials;