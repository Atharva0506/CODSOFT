import React from 'react'
import './projects.css';
import img from '../../../public/images/portfolio4.jpg';
import Image from 'next/image';
const proje = [
  {
    id: 1,
    img: img,
    title: 'Project 1',
    github: 'https://github.com',
    livedemo: 'xy',
  },
  {
    id: 2,
    img: img,
    title: 'Project 1',
    github: 'https://github.com',
    livedemo: 'xy',
  },
  {
    id: 3,
    img: img,
    title: 'Project 1',
    github: 'https://github.com',
    livedemo: 'xy',
  },
];
function Projects() {
  return (
    <section id='Projects'>
      <h5>My recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
      {
        proje.map(({id,img,title,github,livedemo})=>{
          return (
            <article key={id} className='projects_item'>
            <div className='projects_img'>
              <Image src={img} alt="Projects_img" />
            </div>
           
            <h3>{title}</h3>
            <div className='projects_item-cta'>
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={livedemo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Projects