import GlassCard from './GlassCard';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <GlassCard>
                <div className="contact-content">
                    <div className="contact-info">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="contact-description">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                            I'll try my best to get back to you!
                        </p>
                        <a href="mailto:contact@felipe.dev" className="btn-primary contact-btn">Say Hello</a>
                    </div>
                    <div className="contact-socials">
                        {/* Social placeholders - functionality is the focus */}
                    </div>
                </div>
            </GlassCard>
        </section>
    );
};

export default Contact;
