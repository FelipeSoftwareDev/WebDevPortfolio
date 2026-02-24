import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="copyright">© 2026 Felipe. Todos os direitos reservados.</p>
                <div className="social-links">
                    <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">E-mail</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
