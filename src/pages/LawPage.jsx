import { caseStudies, lawExplorer } from '../data/mockData';

export default function LawPage() {
  return (
    <main>
      <section className="panel">
        <div className="panel-head">
          <div>
            <span className="eyebrow">International law explorer</span>
            <h2>Global legal frameworks</h2>
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
      </section>

      <section className="panel" style={{ marginTop: '24px' }}>
        <div className="panel-head">
          <div>
            <span className="eyebrow">Case study explorer</span>
            <h2>Context-rich examples</h2>
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
      </section>
    </main>
  );
}
