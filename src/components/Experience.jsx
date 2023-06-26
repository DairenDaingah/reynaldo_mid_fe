import React, { useState, useEffect } from 'react';

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/experience')
      .then(response => response.json())
      .then(data => setExperience(data));
  }, []);

  return (
    <section id="experience">
      <h2>Experience</h2>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            <h3>{exp.position}</h3>
            <p>{exp.company}</p>
            <p>{exp.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
