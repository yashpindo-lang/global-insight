import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  const navItems = [
    { to: '/', label: 'Dashboard' },
    { to: '/library', label: 'Library' },
    { to: '/law', label: 'International law' },
    { to: '/cases', label: 'Case studies' },
    { to: '/workspace', label: 'Workspace' }
  ];

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

        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button className="nav-button">Create report</button>
      </header>

      <Outlet />
    </div>
  );
}
