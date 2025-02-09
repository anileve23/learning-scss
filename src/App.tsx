import { ThemeContext } from './context/ThemeContex';
import { useContext } from 'react';
import './styles/_main.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import Recipies from './components/Recipies';
import AboutUs from './components/AboutUs';
import HolidaysSeasons from './components/HolidaysSeasons';

function App() {
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.theme || 'light';

  return (
    <Router>
      <div className={currentTheme}>
        <Navbar />
        <Routes>
          <Route path="/learning-scss" element={<Navigate to="/about-us" />} />
          
          <Route path="/recipe-of-the-day" element={<RecipeOfTheDay />} />
          <Route path="/recipies" element={<Recipies />} />
          <Route path="/holidays-seasons" element={<HolidaysSeasons />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/about-us" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
