import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const resourceLibrary = [
  {
    id: 1,
    title: 'UN Convention on the Rights of the Child',
    type: 'International law',
    publisher: 'United Nations',
    date: '1989',
    country: 'Global',
    perspective: 'Legal rights / child protection',
    summary: 'Core treaty text and commentary materials for students researching child rights, protection and state obligations.',
    link: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child',
    credibility: 'High',
    relevance: 'Very high',
    status: 'Verified source metadata only'
  },
  {
    id: 2,
    title: 'World Bank Data and Development Reports',
    type: 'Statistics',
    publisher: 'World Bank',
    date: 'Current dataset',
    country: 'Global',
    perspective: 'Development / economic indicators',
    summary: 'Country-level datasets and institutional reports for comparing development outcomes, inequality and public policy.',
    link: 'https://data.worldbank.org/',
    credibility: 'High',
    relevance: 'High',
    status: 'Needs dataset verification before use in a final argument'
  },
  {
    id: 3,
    title: 'UNESCO Education Monitoring Reports',
    type: 'Academic / policy',
    publisher: 'UNESCO',
    date: 'Recent publications',
    country: 'Global',
    perspective: 'Education access / literacy',
    summary: 'Institutional insight into education systems, inequality and global policy trends for research questions about access and inclusion.',
    link: 'https://www.unesco.org/en',
    credibility: 'High',
    relevance: 'High',
    status: 'Policy summaries available; verify specific figures separately'
  },
  {
    id: 4,
    title: 'Amnesty International Human Rights Reports',
    type: 'NGO research',
    publisher: 'Amnesty International',
    date: 'Recent reporting',
    country: 'Country-specific',
    perspective: 'Human rights / civil liberties',
    summary: 'Reports and advocacy material on rights abuses, detention, freedom of expression and accountability.',
    link: 'https://www.amnesty.org/en/',
    credibility: 'High',
    relevance: 'High',
    status: 'Source reports should be checked against primary documentation'
  },
  {
    id: 5,
    title: 'The Lancet Child and Adolescent Health',
    type: 'Academic journal',
    publisher: 'The Lancet',
    date: 'Peer-reviewed',
    country: 'Global',
    perspective: 'Health / medicine / social determinants',
    summary: 'Peer-reviewed articles on public health, social conditions and health systems across countries.',
    link: 'https://www.thelancet.com/',
    credibility: 'Very high',
    relevance: 'High',
    status: 'Academic peer review provides strong credibility; verify details in context'
  },
  {
    id: 6,
    title: 'UNHCR Global Refugee Statistics and Briefs',
    type: 'Government / humanitarian',
    publisher: 'UNHCR',
    date: 'Current reporting',
    country: 'Global',
    perspective: 'Migration / displacement / protection',
    summary: 'Institutional reports on displacement patterns, legal protections and humanitarian contexts.',
    link: 'https://www.unhcr.org/',
    credibility: 'High',
    relevance: 'Very high',
    status: 'Institutional reporting; compare with national government records when needed'
  }
];

const lawExplorer = [
  {
    name: 'UN Convention on the Rights of the Child',
    region: 'Global',
    type: 'Human rights treaty',
    description: 'Research rights related to education, health, safety and protection for children under international law.'
  },
  {
    name: 'Paris Agreement',
    region: 'Global',
    type: 'Climate agreement',
    description: 'Explore national obligations, international cooperation and climate policy commitments.'
  },
  {
    name: 'Convention Relating to the Status of Refugees',
    region: 'Global',
    type: 'Refugee protection',
    description: 'Use this treaty to examine legal definitions, protection duties and state responsibilities.'
  },
  {
    name: 'Convention on the Elimination of All Forms of Discrimination Against Women',
    region: 'Global',
    type: 'Rights treaty',
    description: 'Support investigations into discrimination, access to education and governance frameworks.'
  }
];

const caseStudies = [
  {
    title: 'Climate change and displacement in coastal communities',
    country: 'Bangladesh',
    focus: 'Resilience, migration, adaptation',
    status: 'Needs source verification before final conclusions'
  },
  {
    title: 'Access to education in conflict-affected regions',
    country: 'Sudan',
    focus: 'Human rights, policy, schooling',
    status: 'Open to comparative analysis'
  },
  {
    title: 'Digital privacy and surveillance debates',
    country: 'India',
    focus: 'Technology, civil liberties',
    status: 'Cross-check legal documents and civil society reports'
  },
  {
    title: 'Women’s participation in government and civic life',
    country: 'Rwanda',
    focus: 'Representation, institutions',
    status: 'Build from primary and secondary sources'
  }
];

const comparisons = [
  { country: 'United Kingdom', focus: 'Education policy and climate commitments', note: 'Strong institutional record; compare with public policy and court rulings.' },
  { country: 'Kenya', focus: 'Youth policy and digital access', note: 'Useful for comparing national implementation and rights-based frameworks.' },
  { country: 'Germany', focus: 'Climate and industrial transition', note: 'Compares state investment, policy design and civic participation.' },
  { country: 'Brazil', focus: 'Environmental governance and Indigenous rights', note: 'Use for legal, social and environmental perspective comparisons.' }
];

const folders = [
  'Climate and migration',
  'Human rights / education',
  'Global governance',
  'Case study archive'
];

const bibliography = [
  'UN Human Rights Council reports',
  'World Bank datasets',
  'Academic journal articles',
  'National government documents'
];

const questionSuggestions = [
  'How do international legal frameworks shape responses to climate-related displacement?',
  'What are the strongest arguments for and against government regulation in this issue?',
  'How do policy responses differ between countries with similar economic conditions?',
  'What evidence is used by NGOs, governments and academics to frame this debate?'
];

const assistantInsight = {
  verifiedFact: 'International law and policy often work at different levels: treaties create frameworks, while national policy determines implementation.',
  analysis: 'Students should distinguish treaty obligations, domestic law and political interpretation when assessing a global issue.',
  warning: 'No live verification can be claimed in this demo without an active search API and source-checking workflow.'
};

function App() {
  const [topic, setTopic] = useState('Climate change and migration');
  const [filter, setFilter] = useState('All');
  const [country, setCountry] = useState('Kenya');
  const [comparison, setComparison] = useState('Germany');

  const filteredResources = useMemo(() => {
    if (filter === 'All') return resourceLibrary;
    return resourceLibrary.filter((item) => item.type === filter || item.country === filter || item.perspective.includes(filter));
  }, [filter]);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">GI</div>
          <div>
            <div className="brand-name">GLOBAL INSIGHT</div>
            <div className="brand-tag">Research Hub</div>
          </div>
        </div>

        <nav className="main-nav">
          <a href="#dashboard">Dashboard</a>
          <a href="#library">Library</a>
          <a href="#law">International law</a>
          <a href="#cases">Case studies</a>
          <a href="#workspace">Workspace</a>
        </nav>

        <button className="nav-button">Create report</button>
      </header>

      <main>
        <section className="hero" id="dashboard">
          <div className="hero-copy">
            <span className="eyebrow">Research with transparency</span>
            <h1>Explore global issues with credible evidence and student-friendly context.</h1>
            <p>
              Global Insight helps students research any topic through international law, UN and NGO resources, academic journals,
              government publications, statistics, case studies and comparative global perspectives.
            </p>

            <div className="search-panel">
              <input
                aria-label="Research topic"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                placeholder="Search a global issue, law, country or question"
              />
              <button>Research now</button>
            </div>

            <div className="chip-row">
              {['Climate change', 'Migration', 'Human rights', 'Education', 'Trade', 'Technology'].map((chip) => (
                <button key={chip} className="chip" onClick={() => setTopic(chip)}>{chip}</button>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="signal-card">
              <div className="signal-head">
                <span className="dot" />
                <span>Source integrity</span>
              </div>
              <div className="metric-row">
                <strong>87%</strong>
                <span>institutional coverage</span>
              </div>
              <p>Each result is tagged by source type, publisher, credibility and whether it has been independently verified.</p>
            </div>

            <div className="mini-grid">
              <div className="mini-stat">
                <span>Sources</span>
                <strong>23 categories</strong>
              </div>
              <div className="mini-stat">
                <span>Countries</span>
                <strong>80+</strong>
              </div>
              <div className="mini-stat">
                <span>Case studies</span>
                <strong>240</strong>
              </div>
              <div className="mini-stat highlight">
                <span>Verified fact</span>
                <strong>AI checked</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div><span>Global law treaties</span><strong>18+</strong></div>
          <div><span>Academic journals</span><strong>120+</strong></div>
          <div><span>NGO briefs</span><strong>300+</strong></div>
          <div><span>Verification model</span><strong>Source-first</strong></div>
        </section>

        <section className="panel-grid upper-grid">
          <div className="panel panel-large">
            <div className="panel-head">
              <div>
                <span className="eyebrow">AI research assistant</span>
                <h2>Research question generator</h2>
              </div>
              <button className="soft-button">Generate</button>
            </div>

            <div className="prompt-box">
              <p>Current topic:</p>
              <h3>{topic}</h3>
            </div>

            <ul className="question-list">
              {questionSuggestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>

          <div className="panel panel-large">
            <div className="panel-head">
              <div>
                <span className="eyebrow">Fact-checking</span>
                <h2>Verified facts vs analysis</h2>
              </div>
            </div>

            <div className="fact-box verified">
              <label>Verified fact</label>
              <p>{assistantInsight.verifiedFact}</p>
            </div>

            <div className="fact-box analysis">
              <label>Analysis</label>
              <p>{assistantInsight.analysis}</p>
            </div>

            <div className="warning-box">
              <strong>Important:</strong> {assistantInsight.warning}
            </div>
          </div>
        </section>

        <section className="panel" id="library">
          <div className="panel-head">
            <div>
              <span className="eyebrow">Resource library</span>
              <h2>Curated evidence base</h2>
            </div>
            <div className="filter-row">
              {['All', 'International law', 'Statistics', 'Academic / policy', 'NGO research', 'Government / humanitarian'].map((option) => (
                <button
                  key={option}
                  className={filter === option ? 'filter active' : 'filter'}
                  onClick={() => setFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="resource-grid">
            {filteredResources.map((resource) => (
              <article key={resource.id} className="resource-card">
                <div className="resource-topline">
                  <span className="tag">{resource.type}</span>
                  <span className="credibility">{resource.credibility}</span>
                </div>
                <h3>{resource.title}</h3>
                <p>{resource.summary}</p>
                <div className="meta-list">
                  <span>Publisher: {resource.publisher}</span>
                  <span>Published: {resource.date}</span>
                  <span>Country: {resource.country}</span>
                  <span>Perspective: {resource.perspective}</span>
                  <span>Relevance: {resource.relevance}</span>
                </div>
                <div className="source-status">{resource.status}</div>
                <a href={resource.link} target="_blank" rel="noreferrer">Open source</a>
              </article>
            ))}
          </div>
        </section>

        <section className="panel-grid">
          <div className="panel" id="law">
            <div className="panel-head">
              <div>
                <span className="eyebrow">International law explorer</span>
                <h2>Legal frameworks</h2>
              </div>
            </div>

            <div className="list-stack">
              {lawExplorer.map((law) => (
                <div key={law.name} className="stack-item">
                  <div>
                    <h3>{law.name}</h3>
                    <span>{law.region} · {law.type}</span>
                  </div>
                  <p>{law.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel" id="cases">
            <div className="panel-head">
              <div>
                <span className="eyebrow">Case study explorer</span>
                <h2>Comparative deep dives</h2>
              </div>
            </div>

            <div className="case-list">
              {caseStudies.map((item) => (
                <div key={item.title} className="case-item">
                  <div className="case-header">
                    <strong>{item.title}</strong>
                    <span>{item.country}</span>
                  </div>
                  <p>{item.focus}</p>
                  <small>{item.status}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="panel" id="comparison">
          <div className="panel-head">
            <div>
              <span className="eyebrow">Global perspectives comparison</span>
              <h2>Country and viewpoint comparison</h2>
            </div>
          </div>

          <div className="comparison-controls">
            <label>
              Country A
              <select value={country} onChange={(event) => setCountry(event.target.value)}>
                {comparisons.map((item) => (
                  <option key={item.country} value={item.country}>{item.country}</option>
                ))}
              </select>
            </label>

            <label>
              Country B
              <select value={comparison} onChange={(event) => setComparison(event.target.value)}>
                {comparisons.map((item) => (
                  <option key={item.country} value={item.country}>{item.country}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="comparison-grid">
            {comparisons
              .filter((item) => item.country === country || item.country === comparison)
              .map((item) => (
                <div key={item.country} className="comparison-card">
                  <h3>{item.country}</h3>
                  <span>{item.focus}</span>
                  <p>{item.note}</p>
                </div>
              ))}
          </div>
        </section>

        <section className="panel-grid workspace-grid" id="workspace">
          <div className="panel workspace-panel">
            <div className="panel-head">
              <div>
                <span className="eyebrow">Research workspace</span>
                <h2>Saved research folders</h2>
              </div>
            </div>

            <div className="folder-list">
              {folders.map((folder) => (
                <div key={folder} className="folder-item">
                  <span>{folder}</span>
                  <button className="soft-button">Open</button>
                </div>
              ))}
            </div>
          </div>

          <div className="panel workspace-panel">
            <div className="panel-head">
              <div>
                <span className="eyebrow">Bibliography</span>
                <h2>Generator</h2>
              </div>
              <button className="soft-button">Export report</button>
            </div>

            <ul className="bibliography-list">
              {bibliography.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
