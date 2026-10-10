"use client";

import Image from "next/image";
import { useEffect, useSyncExternalStore } from "react";
import { copy, isLocale, languages, type Locale } from "./content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const linkedin = "https://www.linkedin.com/in/ghabriel-calado-7132a33b6/";
const navIds = ["#projetos", "#experiencia", "#ferramentas", "#certificados", "#contato"];

const projects = [
  { id: "01", title: "Reda1000", symbol: "R/", tone: "cyan", stack: ["LangGraph", "FastAPI", "ChromaDB", "Docker"], href: "https://github.com/ghcalado/reda1000_v1" },
  { id: "02", title: "PetLens", symbol: "P✳", tone: "violet", stack: ["PyTorch", "ResNet-18", "Streamlit"], href: "https://github.com/ghcalado/pets_deeplearning" },
  { id: "03", title: "InovaAL", symbol: "I/", tone: "orange", stack: ["Flask", "ChromaDB", "Hugging Face"], href: "https://github.com/ghcalado/inova-al" },
];

const tools = [
  ["Python", "python.svg"], ["FastAPI", "fastapi.svg"], ["Flask", "flask.svg"],
  ["PostgreSQL", "postgresql.svg"], ["Supabase", "supabase.svg"],
  ["LangGraph", "langgraph.svg"], ["LangChain", "langchain.svg"],
  ["Hugging Face", "huggingface.svg"], ["PyTorch", "pytorch.svg"],
  ["Scikit-learn", "scikitlearn.svg"], ["Pandas", "pandas.svg"],
  ["NumPy", "numpy.svg"], ["Docker", "docker.svg"], ["AWS", "aws.svg"],
  ["GitHub Actions", "githubactions.svg"], ["Pytest", "pytest.svg"],
  ["Streamlit", "streamlit.svg"], ["GitHub", "github.svg"],
];

const certificates = [
  ["Generative AI Fundamentals", "Databricks", "https://credentials.databricks.com/c49e5557-dd40-4660-9df4-61057207e9ac"],
  ["AI Agents Fundamentals", "Hugging Face", "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/ghcalado/2026-08-17.png"],
  ["Introduction to Model Context Protocol", "Anthropic", "https://verify.skilljar.com/c/egakyd4engn6"],
  ["Agents and Workflows", "OpenAI", "https://academy.openai.com/public/certificate/0tewpo522z"],
  ["Introduction to Agent Skills", "Anthropic", "https://verify.skilljar.com/c/tuazrg77bgop"],
  ["Claude Code 101", "Anthropic", "https://verify.skilljar.com/c/dav8a3ppc2x3"],
  ["Claude 101", "Anthropic", "https://verify.skilljar.com/c/em6uo986ev7z"],
  ["Python", "Santander Open Academy", "https://www.linkedin.com/in/ghabriel-calado-7132a33b6/details/certifications/"],
  ["English Course", "Wizard by Pearson", "https://www.linkedin.com/in/ghabriel-calado-7132a33b6/details/certifications/"],
];

const issuerIcons: Record<string, string> = {
  Databricks: "databricks.svg", "Hugging Face": "huggingface.svg",
  Anthropic: "anthropic.svg", OpenAI: "openai.svg",
  "Santander Open Academy": "santander.svg", "Wizard by Pearson": "wizard.png",
};

function Arrow({ down = false }: { down?: boolean }) {
  return <span aria-hidden="true">{down ? "↓" : "↗"}</span>;
}

function LanguageSwitcher({ locale, onChange, label, mobile = false }: {
  locale: Locale;
  onChange: (locale: Locale) => void;
  label: string;
  mobile?: boolean;
}) {
  return <div className={"language-switcher" + (mobile ? " language-switcher-mobile" : " language-switcher-header")} role="group" aria-label={label}>
    {languages.map(language => <button
      key={language.code}
      type="button"
      lang={language.code === "pt" ? "pt-BR" : language.code === "en" ? "en-US" : "es-ES"}
      title={language.label}
      aria-label={language.label}
      aria-pressed={locale === language.code}
      onClick={() => onChange(language.code)}
    ><span className="language-flag" aria-hidden="true"><Image src={basePath + language.flag} alt="" width={32} height={20} unoptimized /></span><span className="language-code" aria-hidden="true">{language.code.toUpperCase()}</span></button>)}
  </div>;
}

function readLocale(): Locale {
  if (typeof window === "undefined") return "pt";
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLocale(fromUrl)) return fromUrl;
  try {
    const saved = window.localStorage.getItem("portfolio-language");
    if (isLocale(saved)) return saved;
  } catch { /* Storage may be unavailable. */ }
  return "pt";
}

function subscribeLocale(callback: () => void) {
  window.addEventListener("portfolio-language-change", callback);
  window.addEventListener("popstate", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("portfolio-language-change", callback);
    window.removeEventListener("popstate", callback);
    window.removeEventListener("storage", callback);
  };
}

export default function Home() {
  const locale = useSyncExternalStore<Locale>(subscribeLocale, readLocale, () => "pt");
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : locale === "en" ? "en-US" : "es-ES";
  }, [locale]);

  function changeLocale(next: Locale) {
    try { window.localStorage.setItem("portfolio-language", next); } catch { /* Storage may be unavailable. */ }
    const url = new URL(window.location.href);
    if (next === "pt") url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    window.dispatchEvent(new Event("portfolio-language-change"));
  }

  return <><title>{t.title}</title><meta name="description" content={t.description} /><main id="topo">
    <header className="site-header">
      <a className="wordmark" href="#topo" aria-label={t.backToStart}><span className="wordmark-avatar"><Image src={basePath + "/avatar-ghabriel-humano.png"} alt="" width={42} height={42} /></span><span>GHABRIEL CALADO<small>{t.brandLine}</small></span></a>
      <nav className="desktop-nav" aria-label={t.navLabel}>{navIds.slice(0, 4).map((href, index) => <a href={href} key={href}>{t.nav[index]}</a>)}</nav>
      <LanguageSwitcher locale={locale} onChange={changeLocale} label={t.languageLabel} />
      <a className="header-contact" href="mailto:ghabrielcalado@gmail.com">{t.headerContact} <Arrow /></a>
      <details className="mobile-nav"><summary>{t.menu} <span className="mobile-current-flag" aria-hidden="true"><Image src={basePath + (languages.find(language => language.code === locale)?.flag ?? "/flags/br.svg")} alt="" width={32} height={20} unoptimized /></span><span aria-hidden="true">☰</span></summary><nav aria-label={t.mobileNavLabel}>{navIds.map((href, index) => <a href={href} key={href}>{t.nav[index]}</a>)}<div className="mobile-language"><span>{t.languageLabel}</span><LanguageSwitcher locale={locale} onChange={changeLocale} label={t.languageLabel} mobile /></div></nav></details>
    </header>

    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="hero-player-label">[ {t.hero.player.replace(" ", "_")} ]</p><p className="overline">{t.hero.availability}</p><h1 id="hero-title">{t.hero.greeting}<br /><em>Ghabriel.</em></h1><p className="hero-description">{t.hero.description}</p><div className="hero-actions"><a className="button button-primary" href="#projetos">{t.hero.projects} <Arrow down /></a><a className="button button-quiet" href={basePath + "/curriculo-ghabriel-calado.pdf"} download aria-label={t.hero.resumeLabel}>{t.hero.resume} <Arrow /></a></div><div className="hero-proof"><span>MACEIÓ / AL</span><span>{t.hero.proof}</span></div></div>
      <div className="avatar-scene"><div className="avatar-frame"><Image src={basePath + "/avatar-ghabriel.jpeg"} alt={t.hero.avatarAlt} fill priority sizes="(max-width: 900px) 90vw, 42vw" /></div><div className="avatar-stamp">{t.hero.stamp[0]}<br />{t.hero.stamp[1]}<span>↘</span></div></div>
    </section>
    <div className="ticker" aria-label={t.specialtiesLabel}><div className="ticker-inner">{t.specialties.map(item => <span className="ticker-item" key={item}>{item}</span>)}</div></div>

    <section className="section shell selected-projects" id="projetos"><div className="section-head"><div><p className="section-label">{t.projects.label}</p><h2>{t.projects.title[0]}<br /><em>{t.projects.title[1]}</em></h2></div><p>{t.projects.intro}</p></div><div className="project-grid">{projects.map((project, index) => {
      const translated = t.projects.cards[index];
      return <a key={project.id} className={"project-card project-" + project.tone} href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.open} ${project.title} ${t.projects.github}`}><div className="project-card-top"><span>{project.id} / {translated.kind}</span><span className="round-arrow"><Arrow /></span></div><div className="project-art"><span>{project.symbol}</span><span className="project-art-detail">{translated.flow}</span></div><div className="project-card-body"><h3>{project.title}</h3><p className="project-summary">{translated.summary}</p><p className="project-detail">{translated.detail}</p><div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div></a>;
    })}</div><a className="text-link" href="https://github.com/ghcalado?tab=repositories" target="_blank" rel="noopener noreferrer">{t.projects.all} <Arrow /></a></section>

    <section className="experience" id="experiencia"><div className="shell experience-grid"><div className="experience-lead"><p className="section-label">{t.experience.label}</p><h2>{t.experience.title[0]}<br />{t.experience.title[1]}</h2><p>{t.experience.intro}</p><div className="experience-avatar"><Image src={basePath + "/avatar-ghabriel-humano.png"} alt="" width={128} height={128} /><span>{t.experience.developing[0]}<br />{t.experience.developing[1]}</span></div></div><div className="experience-list"><article><div className="experience-meta"><span>{t.experience.current}</span><span>EDTECH · MACEIÓ</span></div><div className="experience-company"><h3>Higgs AI</h3><div className="experience-company-logo"><Image src={basePath + "/higgs-logo.png"} alt={t.experience.higgsAlt} fill sizes="(max-width: 640px) 154px, 190px" /></div></div><p className="role">{t.experience.higgsRole}</p><p>{t.experience.higgsText}</p><div className="metric"><strong>67–72%</strong><span>{t.experience.metric}</span></div></article><article><div className="experience-meta"><span>{t.experience.clientDate}</span><span>{t.experience.client}</span></div><div className="experience-company"><h3>RS Pet</h3><div className="experience-company-logo experience-company-logo-rspet" aria-label={t.experience.rsAlt}><span className="rs-pet-emblem"><Image src={basePath + "/rs-pet-logo.png"} alt="" fill sizes="60px" /></span><span className="rs-pet-wordmark"><strong>RS PET</strong><small>{t.experience.rsTagline}</small></span></div></div><p className="role">{t.experience.rsRole}</p><p>{t.experience.rsText}</p></article></div></div></section>

    <section className="section shell tools-section" id="ferramentas"><div className="section-head"><div><p className="section-label">{t.tools.label}</p><h2>{t.tools.title[0]}<br /><em>{t.tools.title[1]}</em></h2></div><p>{t.tools.intro}</p></div><div className="tool-grid">{tools.map(([name, icon], index) => <div className="tool-tile" key={name}><span className="tool-index">{String(index + 1).padStart(2, "0")}</span><div className="tool-icon"><Image src={basePath + "/icons/" + icon} alt={`${t.tools.icon} ${name}`} width={40} height={40} unoptimized /></div><div><strong>{name}</strong><span>{t.tools.categories[index]}</span></div></div>)}</div><div className="additional-tools">{t.tools.groups.map(group => <div key={group.name}><h3>{group.name}</h3><div>{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>

    <section className="about-band"><div className="shell about-grid"><div><p className="section-label">{t.about.label}</p><h2>{t.about.title[0]}<br />{t.about.title[1]}</h2></div><div><p className="about-large">{t.about.lead}</p><p>{t.about.text}</p><div className="about-facts">{t.about.facts.map(fact => <span key={fact}>↗ {fact}</span>)}</div></div></div></section>

    <section className="section shell certificates-section" id="certificados"><div className="section-head"><div><p className="section-label">{t.certificates.label}</p><h2>{t.certificates.title[0]}<br /><em>{t.certificates.title[1]}</em></h2></div><p>{t.certificates.intro}</p></div><div className="certificate-grid">{certificates.map(([name, issuer, href], index) => <a key={issuer + name} className="certificate-card" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${t.certificates.open} ${name}, ${issuer}`}><span className={"certificate-mark" + (issuer === "Wizard by Pearson" ? " certificate-mark-wide" : "")}><Image src={basePath + "/icons/" + issuerIcons[issuer]} alt="" width={issuer === "Wizard by Pearson" ? 96 : 34} height={34} unoptimized /></span><span className="certificate-info"><small>{issuer} · {t.certificates.dates[index]}</small><strong>{name}</strong><em>{href.includes("linkedin.com") ? t.certificates.linkedin : t.certificates.credential} <Arrow /></em></span></a>)}</div></section>

    <section className="contact-section" id="contato"><div className="shell contact-grid"><div><p className="section-label">{t.contact.label}</p><h2>{t.contact.title[0]}<br /><em>{t.contact.title[1]}</em></h2><p>{t.contact.intro}</p></div><div className="contact-actions"><a href="mailto:ghabrielcalado@gmail.com">{t.contact.email} <Arrow /><small>ghabrielcalado@gmail.com</small></a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/ghcalado" target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a></div></div></section>
    <footer className="site-footer shell"><a className="wordmark" href="#topo" aria-label={t.backToStart}><span className="wordmark-avatar"><Image src={basePath + "/avatar-ghabriel-humano.png"} alt="" width={42} height={42} /></span><span>GHABRIEL CALADO<small>{t.brandLine}</small></span></a><p>{t.footer.made} © 2026</p><a href="#topo">{t.footer.back} ↑</a></footer>
  </main></>;
}
