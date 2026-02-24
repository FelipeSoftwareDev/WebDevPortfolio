import GlassCard from './GlassCard';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <GlassCard>
                <div className="contact-content">
                    <div className="contact-info">
                        <h2 className="section-title">Entre em Contato</h2>
                        <p className="contact-description">
                            Estou sempre aberto a novas oportunidades. Se você tem uma pergunta ou só quer trocar uma ideia,
                            farei o possível para responder!
                        </p>
                        <a href="mailto:contact@felipe.dev" className="btn-primary contact-btn">Fale Comigo</a>
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
