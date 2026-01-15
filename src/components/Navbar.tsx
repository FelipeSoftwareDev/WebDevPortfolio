import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => scrollToSection('home')}>
                    Felipe<span className="highlight">.dev</span>
                </div>
                <div className="navbar-links">
                    <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
                    <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                    <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
                    <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
                    <button onClick={() => scrollToSection('contact')} className="nav-link highlight-btn">Contact</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
