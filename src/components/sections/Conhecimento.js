import React from 'react';

import BubbleChart from '@weknow/react-bubble-chart-d3';

const skillsData = [
  { label: 'HTML', value: 90 },
  { label: 'CSS', value: 50 },
  { label: 'JavaScript', value: 80 },
  { label: 'React', value: 70 },
  { label: 'Kotlin', value: 10 },
  { label: 'Java', value: 60 },
  { label: 'Python', value: 30 },
  { label: 'PHP', value: 60 },
  { label: 'Powerbuilder', value: 100 },
  { label: 'Typescript', value: 80 },
  { label: 'Ionic', value: 85 },
  { label: 'Angular', value: 80 },
  { label: '.NET', value: 80 },
  { label: 'Cobol', value: 5 },  
  { label: 'SQL Server', value: 90 },
  { label: 'MySQL', value: 80 },
  { label: 'PostgreSQL', value: 70 },
  { label: 'SQLite', value: 70 },
  { label: 'Firebird', value: 60 },
];

const Conhecimento = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Conhecimento</h2>

        <div className="subheading mb-3">
          Tecnologias &amp; Ferramentas
          </div>

        <BubbleChart
          padding={0} // optional value, number that set the padding between bubbles
          showLegend
          data={skillsData}
        />

        {/* <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
                Mobile-First, Responsive Design
              </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Cross Browser Testing &amp; Debugging
              </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Cross Functional Teams
              </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum
              </li>
          </ul>*/}
        </div> 
    </section>
  );
}

export default Conhecimento;