import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContex";
import Spaghetti from '../assets/Spaghetti Carbonara.jpg';
import styles from '../components/RecipeOfTheDay.module.scss'

const RecipeOfTheDay = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';

  const recipe = {
    title: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish with a creamy egg sauce, pancetta, and cheese.',
    ingredients: [
      '200g spaghetti',
      '100g pancetta',
      '2 large eggs',
      '50g Pecorino Romano cheese',
      '50g Parmesan cheese',
      'Freshly ground black pepper',
      'Salt',
    ],
    instructions: [
      'Boil the spaghetti in salted water until al dente.',
      'While the pasta cooks, heat a pan and cook the pancetta until crispy.',
      'In a bowl, whisk eggs, Pecorino, Parmesan, and black pepper.',
      'Drain the pasta, reserving some of the pasta water.',
      'Toss the pasta with pancetta and egg mixture, adding pasta water as needed to create a creamy sauce.',
      'Serve with extra cheese and pepper on top.',
    ],
    imageUrl: Spaghetti,
  };

  return (
    <div className='background'>
      <h1 className={`text ${styles.title}`}>{recipe.title}</h1>
      <img className={styles.picture} src={recipe.imageUrl} alt={recipe.title} />
      <p className={`text ${styles.description}`}>{recipe.description}</p>

      <div>
        <h2 className={`text ${styles.h2}`}>Ingredients</h2>
        <ul className={`text ${styles.ul}`}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className={`text ${styles.h2}`}>Instructions</h2>
        <ol className={`text ${styles.ol}`}>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeOfTheDay;
