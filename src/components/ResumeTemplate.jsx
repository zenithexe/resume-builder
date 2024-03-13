import { useSelector } from "react-redux";
import "../styles/ResumeTemplate.css";

export default function ResumeTemplate() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div class="page">
      <div class="header">
        <div id="about">
          <h1>{state.personal.name}</h1>
          <p id="profession">{state.personal.profession}</p>
        </div>
      </div>
      <div class="content">
        <div class="main-column">
          <div id="experience-list">
            <h4 class="section-heading">
              <span class="yellow-bg">Experience</span>
            </h4>
            <div id="experience-1" class="exp-block">
              <h2>{state.experience.exp1.experience}</h2>
              <p class="institution-name">{state.experience.exp1.company}</p>
              <p class="timeline">{state.experience.exp1.time}</p>
              <p class="description">{state.experience.exp1.description}</p>
            </div>
            <div id="experience-2" class="exp-block">
              <h2>{state.experience.exp2.experience}</h2>
              <p class="institution-name">{state.experience.exp2.company}</p>
              <p class="timeline">{state.experience.exp2.time}</p>
              <p class="description">{state.experience.exp2.description}</p>
            </div>
          </div>
          <div id="education-list">
            <h4 class="section-heading">
              <span class="yellow-bg">Education</span>
            </h4>

            <div id="education-1" class="edu-block">
              <h2>{state.education.edu1.education}</h2>
              <p class="institution-name">{state.education.edu1.institute}</p>
              <p class="timeline">{state.education.edu1.time}</p>
              <p class="description">{state.education.edu1.description}</p>
            </div>
            <div id="education-2" class="edu-block">
            <h2>{state.education.edu2.education}</h2>
              <p class="institution-name">{state.education.edu2.institute}</p>
              <p class="timeline">{state.education.edu2.time}</p>
              <p class="description">{state.education.edu2.description}</p>
            </div>
          </div>
        </div>
        <div id="sidebar">
          <div id="contact" class="contact-section">
            <p id="email">{state.personal.email}</p>
            <p id="phone-no">{state.personal.phone}</p>
            <p id="website">{state.personal.website}</p>
          </div>
          <div id="tag-section-1" class="tag-block">
            <h1 id="tag-section-1-heading">
              <span class="yellow-bg">{state.sections[0].heading}</span>
            </h1>
            <div class="tags">
              {state.sections[0].terms.map(item => <span class="tag-item">{item}</span>)}
              {/* <span class="tag-item">Java</span>
              <span class="tag-item">Python</span>
              <span class="tag-item">Javascript</span>
              <span class="tag-item">C++</span>
              <span class="tag-item">React.js</span>
              <span class="tag-item">MongoDB</span>
              <span class="tag-item">Node.js</span>
              <span class="tag-item">Rust</span>
              <span class="tag-item">HTML3/CSS</span> */}
            </div>
          </div>
          <div id="tag-section-2" class="tag-block">
            <h1 id="tag-section-1-heading">
              <span class="yellow-bg">Skills</span>
            </h1>
            <div class="tags-list">
              <span class="tag-list-item">Java</span>
              <span class="tag-list-item">Python</span>
              <span class="tag-list-item">Javascript</span>
              <span class="tag-list-item">C++</span>
              <span class="tag-list-item">React.js</span>
              <span class="tag-list-item">MongoDB</span>
              <span class="tag-list-item">Node.js</span>
              <span class="tag-list-item">Rust</span>
              <span class="tag-list-item">HTML3/CSS</span>
            </div>
          </div>
          <div id="tag-section-3" class="tag-block"></div>
        </div>
      </div>
    </div>
  );
}
