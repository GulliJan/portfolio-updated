import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '@/pages/Home';
import { AboutPage } from '@/pages/AboutPage';
import { SkillsPage } from '@/pages/SkillsPage';
import { WorkPage } from '@/pages/WorkPage';
import { ExperiencePage } from '@/pages/ExperiencePage';
import { CommunityPage } from '@/pages/CommunityPage';

/**
 * Scroll to top on route change, except when navigating to a hash anchor
 * (e.g. /#contact) — in that case the browser already handles the scroll.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/community" element={<CommunityPage />} />
        {/* Anything unmatched falls back to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
