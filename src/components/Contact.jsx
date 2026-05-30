function Contact(){
    return(
        <section className="contact" id="Contact">
            <h2>Contact</h2>
            <form>
                <input type="text" placeholder="Enter your Name"  />
                <input type="email" placeholder="Enter your Email" />
                <textarea placeholder="Enter your Message"></textarea>
                <button>Send Message</button>
            </form>
        </section>
    )
}
export default Contact;