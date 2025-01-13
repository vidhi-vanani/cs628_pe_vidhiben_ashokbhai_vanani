import React from 'react';
import './Resume.css';

const Resume = () =>{
    return (
        <div className="resume">
            <header className="header">
                <h1>Vidhiben Ashokbhai Vanani</h1>
                <p>1201 Oxfard Street, Seattle | (551) 445-2008 | vananividhibenashok@cityuniversity.edu</p>
            </header>

            <section className="section">
                <h2> Education</h2>
                <div className="education">
                <h3>Master of Science in Computer Science</h3>
                <p>City University of Seattle, Seattle, USA | May 2023</p>
                <p>GPA: 3.9/4.0</p>
                <h3>Bachelor of Computer Application</h3>
                <p>Veer Narmad South Gujarat University, Surat Gujarat | May 2021</p>
                <p>GPA: 3.9/4.0</p>
                </div>
            </section>

            <section className="section">
                <h2> Skills</h2>
                    <div className="skills">
                    <p>Programming Languages: Python, Java, C++</p>
                    <p>Frameworks and libraries: React, .NET Framework, Node.js</p>
                    <p>Database systems: MongoDB, MySQL</p>
                    <p>Operating systems: Windows, linux</p>
                    <p>Version control: Git</p>
                    </div>
            </section>

            <section className="section">
                <h2>Work Experience</h2>
                <div className="work experience">
                <h3>Payroll Management System Intern</h3>
                <p>Worked on a team to develop a new web application using .NET and MSSQL Collaborated with team members to design and implement features Debugged and fixed issues in the Code</p>
                </div>
            </section>

            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>Personal Website</h3>
                    <p>
                        Built a Personal website using React and deployed it on Github pages
                    </p>
                    <p>
                        Source Code:{" "}
                        <a
                            href="https://github.com/studentname/personal-website"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/studentname/personal-website
                        </a>
                    </p>
                    <h3>Online Bookstore</h3>
                    <p>
                        Developed a web application for an online bookstore using spring boot and MySQL.
                    </p>
                    <p>
                        Source Code:{" "}
                        <a
                            href="https://github.com/studentname/online-bookstore"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/studentname/online-bookstore
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Resume;