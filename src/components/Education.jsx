import React, { useState, useEffect } from 'react';

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/education')
      .then(response => response.json())
      .then(data => setEducation(data));
  }, []);

  return (
    <section id="education">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.major}</p>
            <p>{edu.university}</p>
            <p>{edu.graduationYear}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
