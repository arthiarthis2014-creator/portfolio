import profile from '../assets/profile.png';
import resume from '../assets/resume.pdf';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
function Hero(){
    return(
        <section className='hero' id='home'>
            <div className='hero-text'>
                <h1>Hello, I'm Aarthi</h1>
                <h2>Frotend Developer|MERN Stack Developer</h2>
                <p>I Build responsive and user friendly web applications using React,JavaScript

                </p>
                <div className='hero-buttons'>
                    <a href='#projects'>
                    <button>View Projects</button>
                    </a>
                    <a href={resume} download>
                        <button>Download Resume</button>
                    </a>
                    <div className='social-icons'>
                    <a href="https://github.com" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <FaLinkedin />
                    </a>
                    </div>
                </div>
            </div>
            <div className='hero-image'>
            <img src={profile} alt="profile" />
            </div>
        </section>
    )
}
export default Hero;