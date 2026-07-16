const featuredProjects = [
  {
    number: "P/01",
    eyebrow: "Computer vision · Sports tech",
    title: "VisionVAR",
    description:
      "Protótipo semiautomático que analisa impedimentos em vídeos de futebol, calcula a referência visual do lance e exporta imagem e relatório JSON.",
    tags: ["Python", "OpenCV", "NumPy", "Streamlit"],
    href: "https://github.com/ghcalado/visionVAR_v1",
    accent: true,
  },
  {
    number: "P/02",
    eyebrow: "Computer vision",
    title: "PetLens",
    description:
      "Classificador de 37 raças de cães e gatos com transfer learning, ResNet-18 e aproximadamente 88% de acurácia de validação.",
    tags: ["PyTorch", "ResNet-18", "Streamlit"],
    href: "https://github.com/ghcalado/pets_deeplearning",
  },
  {
    number: "P/03",
    eyebrow: "Arquitetura de computadores",
    title: "CPU Branch Predictor",
    description:
      "Laboratório interativo que compara um preditor clássico de 2 bits com três modelos de ML implementados do zero em NumPy.",
    tags: ["Python", "NumPy", "Plotly"],
    href: "https://github.com/ghcalado/cpu-branch-predictor",
  },
  {
    number: "P/04",
    eyebrow: "Legal AI · RAG",
    title: "InovaAL",
    description:
      "Assistente jurídico para a legislação de inovação de Alagoas, com recuperação semântica, memória de sessão e citação automática de fontes.",
    tags: ["LangChain", "ChromaDB", "Flask"],
    href: "https://github.com/ghcalado/inova-al",
  },
];

const additionalProjects = [
  {
    title: "Employee Churn Classifier",
    label: "Machine Learning",
    metric: "92% de acurácia",
    href: "https://github.com/ghcalado/churn-classifier",
  },
  {
    title: "Fortnite Event Pipeline",
    label: "Engenharia de dados",
    metric: "Zero perda de eventos",
    href: "https://github.com/ghcalado/fortnite-event-pipeline",
  },
  {
    title: "Barbershop System",
    label: "Produto em produção",
    metric: "Cliente real",
    href: "https://github.com/ghcalado/barbershop-system",
  },
  {
    title: "PetShop Order Manager",
    label: "Automação B2B",
    metric: "WhatsApp API",
    href: "https://github.com/ghcalado/petshop-order-manager",
  },
  {
    title: "Expense Splitter CLI",
    label: "Arquitetura modular",
    metric: "Transferências mínimas",
    href: "https://github.com/ghcalado/expense-splitter",
  },
];

const skillGroups = [
  {
    title: "Backend",
    skills: ["Python", "Flask", "REST APIs", "Gunicorn", "PostgreSQL", "Supabase (Row Level Security)", "Password hash authentication"],
  },
  {
    title: "AI / RAG",
    skills: ["OpenAI API", "RAG architecture", "ChromaDB", "Embeddings", "Sentence Transformers", "Prompt Engineering", "LLM output validation", "Structured AI generation"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "Pandas", "NumPy (algorithms from scratch)", "SMOTE", "Streamlit"],
  },
  {
    title: "Deep Learning",
    skills: ["PyTorch", "ResNet-18", "Transfer Learning", "Computer Vision"],
  },
  {
    title: "Data & Documents",
    skills: ["PyMuPDF / pymupdf4llm", "python-docx", "ReportLab", "PDF / HTML generation", "Data Engineering"],
  },
  {
    title: "Databases",
    skills: ["SQLite3", "PostgreSQL", "Relational Modeling", "SQL Transactions", "Vector Databases"],
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Render", "Railway", "Environment Variables (dotenv)"],
  },
  {
    title: "Integrations",
    skills: ["WhatsApp API", "AI / LLM APIs"],
  },
  {
    title: "Best Practices",
    skills: ["Clean Architecture", "DRY Principle", "Modular Design"],
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark">GC</span>
          <span>Ghabriel Calado</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#stack">Stack</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a className="header-cta" href="#contato">
          Iniciar conversa <Arrow />
        </a>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Navegação mobile">
            <a href="#projetos">Projetos</a>
            <a href="#experiencia">Experiência</a>
            <a href="#stack">Stack</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Backend systems · Artificial intelligence</p>
          <h1>
            Engenharia que transforma <strong>complexidade</strong> em produto.
          </h1>
          <p className="hero-intro">
            Sou <b>Ghabriel Soares Calado Lins</b>, desenvolvedor backend & IA e estudante de Ciência da Computação. Projeto sistemas inteligentes, APIs e experiências digitais com foco em arquitetura, clareza e impacto real.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Explorar projetos <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href={`${basePath}/curriculo-ghabriel-calado.pdf`} download>
              Baixar currículo <Arrow />
            </a>
          </div>
          <ul className="hero-signals" aria-label="Áreas de atuação">
            <li>APIs robustas</li>
            <li>Machine learning</li>
            <li>Cloud ready</li>
          </ul>
        </div>

        <div className="system-visual" aria-label="Representação visual de um sistema em produção">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="system-window">
            <div className="window-bar">
              <span className="window-dots"><i /><i /><i /></span>
              <code>ghabriel.system / production</code>
            </div>
            <div className="code-block" aria-hidden="true">
              <p><em>~/portfolio</em> $ python build_impact.py</p>
              <p><small>01</small> <b>class</b> IntelligentSystem:</p>
              <p><small>02</small> &nbsp;&nbsp;stack = [<q>Python</q>, <q>Data</q>, <q>AI</q>]</p>
              <p><small>03</small> &nbsp;&nbsp;<b>def</b> deliver(self, challenge):</p>
              <p><small>04</small> &nbsp;&nbsp;&nbsp;&nbsp;<b>return</b> architecture.solve(challenge)</p>
              <p className="code-comment"><small>05</small> # designed to scale</p>
            </div>
            <div className="pipeline" aria-label="Fluxo: entender, construir e entregar">
              <div><b>01 · INPUT</b><span>problema</span></div>
              <div><b>02 · BUILD</b><span>sistema</span></div>
              <div><b>03 · SHIP</b><span>impacto</span></div>
            </div>
            <dl className="system-status">
              <div><dt>System</dt><dd>ONLINE</dd></div>
              <div><dt>Focus</dt><dd>BACKEND</dd></div>
              <div><dt>Mode</dt><dd>BUILD</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="projects section-shell" id="projetos">
        <div className="section-heading">
          <div>
            <p className="section-index">01 / PROJETOS SELECIONADOS</p>
            <h2>Sistemas em produção e experimentos de engenharia.</h2>
          </div>
          <p>Uma seleção que conecta produto, inteligência artificial, arquitetura de software e pesquisa aplicada.</p>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => {
            const content = (
              <>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.eyebrow}</span>
                  {project.href && <span className="project-arrow"><Arrow /></span>}
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className="tags" aria-label={`Tecnologias de ${project.title}`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </>
            );

            return project.href ? (
              <a className={`project-card ${project.accent ? "project-card-accent" : ""}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                {content}
              </a>
            ) : (
              <article className="project-card project-card-accent" key={project.title}>{content}</article>
            );
          })}
        </div>

        <div className="more-projects">
          <div className="more-projects-heading">
            <p className="section-index">OUTROS EXPERIMENTOS</p>
            <a href="https://github.com/ghcalado?tab=repositories" target="_blank" rel="noreferrer">
              Ver todos no GitHub <Arrow />
            </a>
          </div>
          <div className="project-list">
            {additionalProjects.map((project, index) => (
              <a href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <span className="project-list-number">0{index + 5}</span>
                <span><b>{project.title}</b><small>{project.label}</small></span>
                <em>{project.metric}</em>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-band" id="experiencia">
        <div className="section-shell experience-layout">
          <div className="experience-intro">
            <p className="section-index section-index-light">02 / EXPERIÊNCIA</p>
            <h2>Do problema real ao sistema funcionando.</h2>
            <p>Atuo no ciclo completo: descoberta, arquitetura, implementação, segurança, entrega e evolução.</p>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-meta"><span>2026 — atual</span><span>Cliente real</span></div>
              <h3>Desenvolvedor Líder</h3>
              <h4>Sou mais Walder Cursos · EdTech de IA</h4>
              <p>Desenvolvi para um cliente real uma plataforma escalável de geração de material didático inteligente, combinando produto, engenharia de prompt, RAG, guardrails e infraestrutura em nuvem.</p>
            </article>
            <article>
              <div className="timeline-meta"><span>Abril 2026</span><span>Freelance</span></div>
              <h3>Desenvolvedor de Software</h3>
              <h4>RS Pet · SaaS B2B</h4>
              <p>Construí uma plataforma para gestão de pedidos, estoque e clientes, incluindo análise preditiva com RFM scoring, forecast de receita e alertas de ruptura.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="stack section-shell" id="stack">
        <div className="section-heading compact-heading">
          <div>
            <p className="section-index">03 / CAPACIDADES</p>
            <h2>Uma stack orientada a resolver.</h2>
          </div>
          <p>Ferramentas são escolhas de projeto. O objetivo permanece o mesmo: sistemas claros, confiáveis e úteis.</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article key={group.title}>
              <span>0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="sobre">
        <div className="about-copy">
          <p className="section-index">04 / SOBRE</p>
          <h2>Curiosidade técnica com responsabilidade de produto.</h2>
          <p>Sou estudante de Ciência da Computação na Afya Unima, em Maceió. Gosto de entender sistemas por inteiro: dos dados e algoritmos à experiência de quem usa. Meu trabalho combina arquitetura limpa, integridade de dados, automação e aprendizado contínuo.</p>
          <p>Já entreguei software para clientes reais, construí pipelines completos de machine learning e transformei documentação jurídica em uma experiência de consulta com IA.</p>
        </div>
        <div className="profile-facts">
          <div><span>Formação</span><b>Ciência da Computação</b><small>Afya Unima · 2026–2030</small></div>
          <div><span>Base</span><b>Maceió, AL</b><small>Brasil · GMT−3</small></div>
          <div><span>Idiomas</span><b>PT · EN · ES</b><small>Nativo · C1 · A2</small></div>
          <div><span>Princípios</span><b>Clean · DRY · Modular</b><small>Clareza antes de complexidade</small></div>
        </div>
      </section>

      <section className="credentials section-shell" aria-labelledby="credentials-title">
        <p className="section-index">FORMAÇÃO CONTÍNUA</p>
        <h2 id="credentials-title">Certificações & repertório.</h2>
        <div className="credential-grid">
          <article><span>01</span><div><h3>Python</h3><p>Santander Open Academy · 2026</p></div></article>
          <article><span>02</span><div><h3>Oxe H4ck3r Conf3r3nc3</h3><p>Oxe Hacker Club · 2026</p></div></article>
          <article><span>03</span><div><h3>English Course</h3><p>Wizard by Pearson · C1</p></div></article>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-inner">
          <p className="section-index section-index-light">05 / CONTATO</p>
          <h2>Vamos construir algo <span>relevante.</span></h2>
          <p>Estou aberto a conversas sobre desenvolvimento backend, inteligência artificial, produtos digitais e oportunidades de aprendizado.</p>
          <div className="contact-links">
            <a href="mailto:ghabrielcalado@gmail.com">ghabrielcalado@gmail.com <Arrow /></a>
            <a href="https://github.com/ghcalado" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/ghabriel-calado-7132a33b6" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio"><span className="brand-mark">GC</span><span>Ghabriel Calado</span></a>
        <p>Backend · Inteligência Artificial · Produto</p>
        <p>© 2026 · Maceió, Brasil</p>
      </footer>
    </main>
  );
}
