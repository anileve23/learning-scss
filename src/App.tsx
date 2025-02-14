import { ThemeContext } from './context/ThemeContex';
import { useContext } from 'react';
import './styles/_main.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import Recipies from './components/Recipies';
import AboutUs from './components/AboutUs';
import HolidaysSeasons from './components/HolidaysSeasons';
import HomePage from './components/HomePage';

function App() {
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.theme || 'light';

  return (
    <Router basename="/learning-scss">
      <div className={currentTheme}>
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe-of-the-day" element={<RecipeOfTheDay />} />
            <Route path="/recipies" element={<Recipies />} />
            <Route path="/holidays-seasons" element={<HolidaysSeasons />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
