import "./ContactFormStyles.css";

function ContactFrom() {
    return (
        <div className="form-container">
            <h1>Join Us</h1>
            <p>To Be Better.</p>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Join</button>
            </form>
        </div>
    )
}

export default ContactFrom;