import { useEffect, useState } from 'react';
import PlexusBackground from '../components/PlexusBackground';
import GlassCard from '../components/GlassCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import './Home.css';
import eu from '../assets/eu.png';
import aidacrypto from '../assets/aidacrypto.webp';

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

const projects: Project[] = [
    {
        title: "Aida Alfa",
        description: "Plataforma de criptomoedas completa com dados em tempo real, acompanhamento de portfólio e ferramentas de análise de mercado.",
        image: aidacrypto,
        link: "https://aidaalfa.com.br",
        tags: ["React", "Crypto", "Visualização de Dados"]
    },
    {
        title: "Portfolio V1",
        description: "Meu primeiro site portfolio construído com HTML, CSS e JavaScript básico. Uma vitrine das minhas primeiras habilidades em frontend.",
        image: "https://placehold.co/600x400/1a1a1a/purple?text=Portfolio+V1",
        link: "#",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "E-Commerce Demo",
        description: "Protótipo funcional de dashboard e-commerce com gerenciamento de produtos e análise de vendas.",
        image: "https://placehold.co/600x400/1a1a1a/purple?text=E-Commerce",
        link: "#",
        tags: ["React", "Dashboard", "Analytics"]
    }
];

const Home = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

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

        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            sections.forEach(section => observer.unobserve(section));
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="home" id="home">
            <Navbar />
            <PlexusBackground />

            {/* Hero Section */}
            <section className="hero-section fade-in-section is-visible">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="greeting">Olá, eu sou o Felipe</p>
                        <h1 className="title">
                            Desenvolvedor<br />
                            <span className="highlight">Fullstack.</span>
                        </h1>
                        <p className="description">
                            Criando experiências digitais com soluções focadas no usuário. Desenvolvo
                            aplicações web acessíveis, responsivas e performáticas que
                            resolvem problemas reais.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn-primary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>Sobre Mim</button>
                            <button className="btn-secondary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Ver Projetos</button>
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
                        <p className="stat-label">Anos de Experiência</p>
                    </GlassCard>

                    <GlassCard className="stat-card">
                        <h3 className="stat-number">10+</h3>
                        <p className="stat-label">Tecnologias Dominadas</p>
                    </GlassCard>

                    <GlassCard className="stat-card">
                        <h3 className="stat-number">1</h3>
                        <p className="stat-label">SaaS Próprio</p>
                    </GlassCard>

                    <GlassCard className="stat-card">
                        <h3 className="stat-number">∞</h3>
                        <p className="stat-label">Café Consumido</p>
                    </GlassCard>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section fade-in-section" id="about">
                <GlassCard>
                    <h2 className="section-title">Sobre Mim</h2>
                    <p className="section-text">
                        Gosto de construir coisas que funcionam. Como Desenvolvedor Full Stack,
                        tenho atuado na criação de aplicações web modernas, com foco em código limpo e boa usabilidade.
                        Recentemente, percebi que aplicações de grande escala exigem estruturas de dados robustas,
                        por isso estou dedicando meus estudos a Engenharia de Dados e Cloud Computing para construir
                        soluções mais robustas e abrangentes.
                    </p>
                </GlassCard>
            </section>

            {/* Hard Skills Section */}
            <section className="skills-section fade-in-section" id="skills">
                <GlassCard>
                    <h2 className="section-title">Habilidades Técnicas</h2>
                    <p className="section-text">
                        Experiência prática em todo o pipeline de desenvolvimento, desde análise de requisitos até deploy em cloud.
                        Foco em escolher a ferramenta certa para cada problema, mantendo código limpo e escalável.
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
                            <h4 className="category-title">Dados & Infraestrutura</h4>
                            <p className="category-items">MongoDB, Docker, AWS, Google Cloud Platform, Firebase</p>
                        </div>
                        <div className="tech-category">
                            <h4 className="category-title">Ferramentas</h4>
                            <p className="category-items">Git, GitHub</p>
                        </div>
                    </div>
                </GlassCard>
            </section>

            {/* Projects Section */}
            <section className="projects-section fade-in-section" id="projects">
                <h2 className="section-title">Projetos em Destaque</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <GlassCard className="project-card" key={index}>
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                                        Ver Projeto
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', verticalAlign: '-3px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </section>

            <Contact />

            <Footer />

            <button
                className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
        </div>
    );
};

export default Home;
