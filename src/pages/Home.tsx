import { useEffect } from 'react';
import PlexusBackground from '../components/PlexusBackground';
import GlassCard from '../components/GlassCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import './Home.css';
import eu from '../assets/eu.png';

interface Project {
    title: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "Project 1",
        description: "Brief description of the project and technologies used. This is a placeholder for your awesome work.",
        image: "Project Image"
    },
    {
        title: "Project 2",
        description: "Brief description of the project and technologies used. This is a placeholder for your awesome work.",
        image: "Project Image"
    },
    {
        title: "Project 3",
        description: "Brief description of the project and technologies used. This is a placeholder for your awesome work.",
        image: "Project Image"
    }
];

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return (
        <div className="home" id="home">
            <Navbar />
            <PlexusBackground />

            {/* Hero Section */}
            <section className="hero-section fade-in-section is-visible">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="greeting">Hi, I'm Felipe</p>
                        <h1 className="title">
                            Fullstack<br />
                            <span className="highlight">Developer.</span>
                        </h1>
                        <p className="description">
                            Crafting digital experiences with user-centric solutions. I build
                            accessible, responsive, and performant web applications that
                            solve real-world problems.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn-primary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About Me</button>
                            <button className="btn-secondary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>View Projects</button>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src={eu} alt="Felipe's photo" className="image-style" />
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="stats-grid">
                    <GlassCard className="stat-card">
                        <h3 className="stat-number">5+</h3>
                        <p className="stat-label">Years Experience</p>
                    </GlassCard>

                    <GlassCard className="stat-card">
                        <h3 className="stat-number">40+</h3>
                        <p className="stat-label">Projects Completed</p>
                    </GlassCard>

                    <GlassCard className="stat-card">
                        <h3 className="stat-number">85+</h3>
                        <p className="stat-label">Happy Clients</p>
                    </GlassCard>

                    <GlassCard className="stat-card">
                        <h3 className="stat-number">12</h3>
                        <p className="stat-label">Awards Won</p>
                    </GlassCard>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section fade-in-section" id="about">
                <GlassCard>
                    <h2 className="section-title">About Me</h2>
                    <p className="section-text">
                        I enjoy building things that work. As a Full Stack Developer,
                        I have been involved in creating modern web applications, with a strong focus on clean code and good usability.
                        Recently, I realized that large-scale applications require strong data structures,
                        which is why I am dedicating my studies to Data Engineering and Cloud Computing in order to build
                        more robust and comprehensive solutions.
                    </p>
                </GlassCard>
            </section>

            {/* Hard Skills Section */}
            <section className="skills-section fade-in-section" id="skills">
                <GlassCard>
                    <h2 className="section-title">Hard Skills</h2>
                    <p className="section-text">
                        Hands-on experience across the entire development pipeline, from requirements analysis to cloud deployment.
                        Focused on choosing the right tool for each problem while maintaining clean, scalable code.
                    </p>
                    <div className="tech-stack">
                        <div className="tech-category">
                            <h4 className="category-title">Frontend</h4>
                            <p className="category-items">React, TypeScript, HTML, CSS, JavaScript, Tailwind CSS, Bootstrap</p>
                        </div>
                        <div className="tech-category">
                            <h4 className="category-title">Backend</h4>
                            <p className="category-items">Node.js, Express, Python, Django</p>
                        </div>
                        <div className="tech-category">
                            <h4 className="category-title">Data & Infrastructure</h4>
                            <p className="category-items">MongoDB, Docker, AWS, Google Cloud Platform, Firebase</p>
                        </div>
                        <div className="tech-category">
                            <h4 className="category-title">Tools</h4>
                            <p className="category-items">Git, GitHub</p>
                        </div>
                    </div>
                </GlassCard>
            </section>

            {/* Projects Section */}
            <section className="projects-section fade-in-section" id="projects">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <GlassCard className="project-card" key={index}>
                            <div className="project-image-placeholder">{project.image}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">
                                {project.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            <Contact />

            <Footer />
        </div>
    );
};

export default Home;
