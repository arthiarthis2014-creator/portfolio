import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
function Project(){
    return(
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-container">
                <div className="project-card">
                    <img src={project1} alt="Baby Food Tracker" />
                    <h3>Baby Food Tracker</h3>
                    <p>Application to track your baby's food intake and feeding schedule</p>
                    <div className='project-buttons'>
                    <a href='https://babyfood-trackers.netlify.app/' target='_blank'>
                    <button>Live demo</button></a>
                    <a href='https://github.com/arthiarthis2014-creator/baby-food-tracker' target='_blank'>
                    <button>Github</button></a>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project2} alt="Workout Tracker" />
                    <h3>Workout Tracker</h3>
                    <p>Daily Workout Tracking Application using React</p>
                     <div className='project-buttons'>
                    <button>Live demo</button>
                    <button>Github</button>
                    </div>
                </div>
                <div className="project-card">
                    <img src={project3} alt="Todo" />
                    <h3>Portfolio</h3>
                    <p>My personal portfolio website showcasing my projects and skills</p>
                    <div className='project-buttons'>
                    <button>Live demo</button>
                    <button>Github</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Project;