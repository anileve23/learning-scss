import { ThemeContext } from './context/ThemeContex';
import { useContext } from 'react';
import './styles/_main.scss';
import Navbar from './components';

function App() {
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.theme || 'light';

  return (
    <div className={currentTheme}>
      <Navbar />
      <div className="background flex">
        <h1 className="text">Hello world!</h1>
        <button
          className={`switch-button ${currentTheme === 'dark' ? 'dark-theme-button' : ''}`}
          onClick={() => themeContext?.setTheme?.(currentTheme === 'light' ? 'dark' : 'light')}
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}

export default App;
