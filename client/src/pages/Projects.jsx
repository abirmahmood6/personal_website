import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from '../data/projects_data';
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <div className='homepage'>
      <Navbar/>
      <h1> Projects Page </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {projectData.map((item, index)=>
      <ProjectCard
      project={item}
      />
      )}
      </div>

    </div>
  )
}

export default Projects
