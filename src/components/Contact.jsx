function Contact(){
    return(
        <section className="contact" id="Contact">
            <h2>Contact</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>Email:arthiarthis2014@gmail.com</p>
                    <p>Nagercoil, Tamil Nadu</p>
                    <p>Frontend|MERN Developer</p>
                </div>
            <form className="contact-form">
                <input type="text" placeholder="Enter your Name"  />
                <input type="email" placeholder="Enter your Email" />
                <textarea placeholder="Enter your Message"></textarea>
                <button>Send Message</button>
            </form>
            </div>
        </section>
    )
}
export default Contact;