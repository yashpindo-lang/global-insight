import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import LibraryPage from './pages/LibraryPage';
import LawPage from './pages/LawPage';
import CasesPage from './pages/CasesPage';
import WorkspacePage from './pages/WorkspacePage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/law" element={<LawPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
      </Route>
    </Routes>
  );
}
