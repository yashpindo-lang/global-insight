import { useMemo, useState } from 'react';
import {
  assistantInsight,
  caseStudies,
  comparisonCountries,
  defaultBibliography,
  defaultFolders,
  lawExplorer,
  questionSuggestions,
  resourceLibrary
} from '../data/mockData';

export default function DashboardPage() {
  const [topic, setTopic] = useState('Climate change and migration');
  const [filter, setFilter] = useState('All');
  const [countryA, setCountryA] = useState('Kenya');
  const [countryB, setCountryB] = useState('Germany');

  const filteredResources = useMemo(() => {
    if (filter === 'All') return resourceLibrary;
    return resourceLibrary.filter(
      (item) => item.type === filter || item.country === filter || item.perspective.includes(filter)
    );
  }, [filter]);

  const filteredComparison = useMemo(
    () => comparisonCountries.filter((item) => item.country === countryA || item.country === countryB),
    [countryA, countryB]
  );

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Research with transparency</span>
          <h1>Explore global issues with strong evidence, law and clear student perspective.</h1>
          <p>
            GLOBAL INSIGHT gives students a structured way to research global issues by bringing together international law,
            government publications, NGOs, academic journals, statistics, case studies and multiple country perspectives.
          </p>

          <div className="search-panel">
            <input
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              placeholder="Search a topic, treaty, country or question"
              aria-label="Research topic"
            />
            <button>Research now</button>
          </div>

          <div className="chip-row">
            {['Climate change', 'Migration', 'Human rights', 'Education', 'Trade', 'Technology'].map((chip) => (
              <button key={chip} className="chip" onClick={() => setTopic(chip)}>
                {chip}
              </button>
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
            <p>Each result is tagged by source type, publication, credibility and relevance so students can assess evidence responsibly.</p>
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

      <section className="panel-grid">
        <div className="panel">
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
            {questionSuggestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
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
                <span>Published: {resource.publicationDate}</span>
                <span>Country: {resource.country}</span>
                <span>Perspective: {resource.perspective}</span>
                <span>Relevance: {resource.relevance}</span>
              </div>
              <div className="source-status">{resource.sourceStatus}</div>
              <a href={resource.sourceUrl} target="_blank" rel="noreferrer">
                Open source
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="panel-grid">
        <div className="panel">
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

        <div className="panel">
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

      <section className="panel">
        <div className="panel-head">
          <div>
            <span className="eyebrow">Global perspectives comparison</span>
            <h2>Country and viewpoint comparison</h2>
          </div>
        </div>

        <div className="comparison-controls">
          <label>
            Country A
            <select value={countryA} onChange={(event) => setCountryA(event.target.value)}>
              {comparisonCountries.map((item) => (
                <option key={item.country} value={item.country}>
                  {item.country}
                </option>
              ))}
            </select>
          </label>

          <label>
            Country B
            <select value={countryB} onChange={(event) => setCountryB(event.target.value)}>
              {comparisonCountries.map((item) => (
                <option key={item.country} value={item.country}>
                  {item.country}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="comparison-grid">
          {filteredComparison.map((item) => (
            <div key={item.country} className="comparison-card">
              <h3>{item.country}</h3>
              <span>{item.focus}</span>
              <p>{item.note}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
