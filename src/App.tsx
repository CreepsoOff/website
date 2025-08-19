import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { ThemeToggle } from './components/ThemeToggle';
import { SocialLinks } from './components/SocialLinks';
import { Home } from '@/pages/Home';
import { OverlayProTT } from '@/pages/OverlayProTT';
import { About } from '@/pages/About';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <ThemeToggle />
        <SocialLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overlay-pro-tt" element={<OverlayProTT />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
