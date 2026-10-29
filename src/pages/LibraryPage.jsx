import { useMemo, useState } from 'react';
import { resourceLibrary } from '../data/mockData';

export default function LibraryPage() {
  const [filter, setFilter] = useState('All');

  const filteredResources = useMemo(() => {
    if (filter === 'All') return resourceLibrary;
    return resourceLibrary.filter(
      (item) => item.type === filter || item.country === filter || item.perspective.includes(filter)
    );
  }, [filter]);

  return (
    <main>
      <section className="panel">
        <div className="panel-head">
          <div>
            <span className="eyebrow">Resource library</span>
            <h2>Evidence and source types</h2>
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
    </main>
  );
}
