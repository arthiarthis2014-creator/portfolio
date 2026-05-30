import profile from '../assets/profile.png';
import resume from '../assets/resume.pdf';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
function Hero(){
    return(
        <section className='hero'>
            <div className='hero-text'>
                <h1>Hello, I'm Aarthi</h1>
                <h2>Frotend Developer</h2>
                <p>Learning React and Building projects</p>
                <div className='hero-buttons'>
                    <button>View Projects</button>
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
            <img src={profile} alt="profile" />
        </section>
    )
}
export default Hero;