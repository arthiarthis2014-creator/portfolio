import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaGithub,FaBootstrap,FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
function Skills(){
    return(
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skill-box">
                <div className="skill-card"><FaHtml5/><p>HTML</p></div>
                <div className="skill-card"><FaCss3Alt/><p>CSS</p></div>
                <div className="skill-card"><FaJs/><p>Javascript</p></div>
                <div className="skill-card"><FaReact/><p>React</p></div>
                <div className="skill-card"><SiMysql/><p>SQL</p></div>
                <div className="skill-card"><FaPython/><p>Python</p></div>
                <div className="skill-card"><FaGithub/><p>Github</p></div>
                <div className="skill-card"><FaBootstrap/><p>Boostrap</p></div>
            </div>
        </section>
    )
}
export default Skills;