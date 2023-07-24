import { ProjectsData } from "./data/projectsData"
import { skills } from "./data/skillsData"



export const getSkill=(id)=>{
    let skill = skills.filter(item=>item.id===id)   
    console.log(skill)
    return skill[0].logo
}