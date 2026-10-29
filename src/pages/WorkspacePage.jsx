import { caseStudies } from '../data/mockData';

export default function CasesPage() {
  return (
    <main>
      <section className="panel">
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
      </section>
    </main>
  );
}
