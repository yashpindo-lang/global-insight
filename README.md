:root {
  --bg: #061a32;
  --bg-soft: #0d2342;
  --panel: rgba(255, 255, 255, 0.06);
  --panel-strong: rgba(255, 255, 255, 0.12);
  --line: rgba(154, 177, 212, 0.2);
  --text: #f4f8ff;
  --muted: #b7c6dd;
  --blue: #7ec7ff;
  --blue-strong: #48a7ff;
  --shadow: rgba(6, 26, 50, 0.4);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(72, 167, 255, 0.24), transparent 36%),
    radial-gradient(circle at bottom right, rgba(120, 155, 255, 0.18), transparent 34%),
    var(--bg);
  color: var(--text);
}

a {
  color: var(--blue);
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

.page-shell {
  max-width: 1380px;
  margin: 0 auto;
  padding: 24px 20px 48px;
}

.topbar {
  position: sticky;
  top: 16px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(10, 19, 34, 0.7);
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 60px rgba(7, 16, 28, 0.28);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #dfeeff, #6ab4ff);
  color: var(--bg);
  font-weight: 800;
}

.brand-name {
  font-weight: 800;
  letter-spacing: 0.12em;
  font-size: 0.76rem;
}

.brand-tag {
  font-size: 0.7rem;
  color: var(--muted);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.main-nav a {
  color: var(--muted);
  font-size: 0.93rem;
}

.nav-button,
button {
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav-button,
.soft-button,
.search-panel button {
  border-radius: 12px;
  padding: 12px 18px;
  background: linear-gradient(135deg, #83d0ff, #4a7dff);
  color: #061522;
  font-weight: 700;
}

.nav-button:hover,
button:hover {
  transform: translateY(-1px);
}

.hero {
  display: grid;
  grid-template-columns: 1.35fr 0.9fr;
  gap: 28px;
  padding: 42px 0 28px;
}

.hero-copy h1 {
  margin: 16px 0 16px;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  max-width: 700px;
}

.hero-copy p {
  max-width: 640px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
}

.eyebrow {
  display: inline-block;
  color: var(--blue);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  font-weight: 700;
}

.search-panel {
  display: flex;
  gap: 10px;
  margin-top: 28px;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.search-panel input {
  flex: 1;
  min-height: 58px;
  padding: 0 18px;
  border-radius: 12px;
  border: 1px solid transparent;
  background: rgba(144, 168, 197, 0.04);
  color: var(--text);
  outline: none;
}

.search-panel input::placeholder {
  color: rgba(196, 212, 233, 0.7);
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.chip,
.filter {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--muted);
  border-radius: 999px;
  padding: 10px 14px;
}

.filter.active {
  border-color: rgba(126, 199, 255, 0.7);
  color: var(--text);
  background: rgba(126, 199, 255, 0.12);
}

.hero-panel {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.signal-card,
.panel,
.mini-stat,
.resource-card,
.stack-item,
.case-item,
.comparison-card {
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 18px 40px rgba(5, 14, 26, 0.12);
}

.signal-card {
  padding: 20px;
}

.signal-head {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-size: 0.85rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #63f0b0;
  box-shadow: 0 0 18px rgba(99, 240, 176, 0.8);
}

.metric-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin: 20px 0 10px;
}

.metric-row strong {
  font-size: clamp(2rem, 4vw, 3rem);
}

.metric-row span,
.signal-card p,
.resource-card p,
.case-item p,
.comparison-card p,
.stack-item p,
.warning-box {
  color: var(--muted);
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.mini-stat {
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mini-stat span {
  color: var(--muted);
  font-size: 0.8rem;
}

.mini-stat strong {
  font-size: 1.12rem;
}

.highlight {
  background: linear-gradient(135deg, rgba(126, 199, 255, 0.17), rgba(74, 125, 255, 0.1));
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 8px 0 24px;
}

.stats-bar > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
}

.stats-bar span {
  color: var(--muted);
}

.panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.panel {
  padding: 24px;
}

.panel-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.panel-head h2,
.resource-card h3,
.stack-item h3,
.case-item strong,
.comparison-card h3 {
  margin: 8px 0 0;
}

.prompt-box {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(126, 199, 255, 0.08);
  padding: 18px;
  margin-bottom: 18px;
}

.prompt-box p {
  margin: 0 0 8px;
  color: var(--muted);
}

.prompt-box h3 {
  margin: 0;
  font-size: 1.4rem;
}

.question-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.question-list li,
.bibliography-list li {
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
}

.fact-box {
  padding: 16px 18px;
  border-radius: 18px;
  margin-bottom: 16px;
  border: 1px solid var(--line);
}

.fact-box label {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

.fact-box p {
  margin: 0;
  line-height: 1.7;
}

.fact-box.verified {
  background: rgba(99, 240, 176, 0.08);
}

.fact-box.analysis {
  background: rgba(126, 199, 255, 0.08);
}

.warning-box {
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(255, 214, 107, 0.08);
  border: 1px solid rgba(255, 214, 107, 0.26);
  line-height: 1.6;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.resource-card {
  padding: 20px;
}

.resource-card h3 {
  font-size: 1.18rem;
}

.resource-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(126, 199, 255, 0.08);
  color: var(--blue);
  font-size: 0.72rem;
  font-weight: 700;
}

.credibility {
  color: #9fe9c5;
  font-size: 0.72rem;
  font-weight: 700;
}

.meta-list {
  display: grid;
  gap: 8px;
  margin: 18px 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.source-status {
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  color: var(--muted);
  margin-bottom: 14px;
}

.list-stack,
.case-list,
.folder-list {
  display: grid;
  gap: 14px;
}

.stack-item,
.case-item,
.folder-item,
.comparison-card {
  padding: 18px;
}

.stack-item span,
.case-item small {
  color: var(--muted);
}

.case-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 8px;
}

.comparison-controls {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 18px;
}

.comparison-controls label {
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.comparison-controls select {
  min-height: 50px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 0 16px;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.comparison-card span {
  display: inline-block;
  margin-top: 8px;
  color: var(--blue);
}

.workspace-grid {
  margin-bottom: 0;
}

.folder-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.bibliography-list {
  display: grid;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (max-width: 980px) {
  .topbar,
  .panel-head,
  .hero,
  .panel-grid,
  .resource-grid,
  .comparison-grid,
  .stats-bar,
  .comparison-controls {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
  }

  .main-nav {
    width: 100%;
    justify-content: space-between;
  }

  .hero,
  .panel-grid,
  .resource-grid,
  .stats-bar,
  .comparison-grid,
  .comparison-controls {
    display: grid;
  }

  .resource-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .page-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .topbar {
    padding: 14px;
  }

  .main-nav {
    gap: 10px;
  }

  .search-panel {
    flex-direction: column;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }
}
