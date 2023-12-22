import React from 'react'
import './skill.css';
import { BsPatchCheckFill } from 'react-icons/bs';
function skills() {
  return (
    <section id='Skill'>

      <h5>What Skill I have</h5>
      <h2>My skills</h2>
      <div className="container skills__container">
        <div className=" container__webdev">
          <h3>Web Development</h3>
          <div className="skills_content">
          <article className="skills_details">
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>skillsd</small>
                </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>skillsd</small>
                </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>skillsd</small>
                </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>skillsd</small>
                </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>Tailwind css</h4>
                <small className='text-light'>skillsd</small>
                </div>
            </article>
          </div>
        </div>

        {/* End of webdevelopment */}
        <div className=" container__dev">
          <h3>Backend</h3>
          <div className="skills_webdev">

            <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>MySql</h4>
                <small className='text-light'>skillsd</small>
                </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>DBMS/RDBMS</h4>
                <small className='text-light'>skillsd</small>
                </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>skillsd</small>
                </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>skillsd</small>
                </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className='icon' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>skillsd</small>
                </div>
            </article>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills;