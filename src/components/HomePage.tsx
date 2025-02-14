import { Link } from 'react-router-dom';
import styles from '../components/HomePage.module.scss';

const HomePage = () => {
  return (
    <div className='background'>
      <div className={styles.overlay}>
        <h1 className={styles.title}>🍴 Welcome to Evelicious 🍴</h1>
        <p className={styles.subtitle}>Savor the Art of Cooking</p>
        <p className={styles.description}>
          At <span className={styles.highlight}>Evelicious</span>, we believe that food is more than just sustenance—it's an experience, 
          a memory, and a journey through flavors. Our collection of <strong>100+ handpicked recipes</strong> is designed to bring joy 
          to your kitchen and ignite your love for cooking. 🥘✨
        </p>
        <Link to="/recipies">
          <button className={styles.exploreButton}>Explore Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
