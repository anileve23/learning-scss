import { ThemeContext } from './context/ThemeContex';
import { useContext } from 'react';
import './styles/_main.scss';
import Navbar from './components';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import Recipies from './components/Recipies';
import AboutUs from './components/AboutUs';

function App() {
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.theme || 'light';

  return (
    <div className={currentTheme}>
      <Navbar />
      <RecipeOfTheDay/>
      <Recipies/>
      <AboutUs/>
    </div>
  );
}

export default App;
