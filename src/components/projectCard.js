import React from 'react';

const ProjectCard = ({name}) => {
    return (  
        <article className='project_card'>
            <h3>{name}</h3>
        </article>
    );
}
 
export default ProjectCard;