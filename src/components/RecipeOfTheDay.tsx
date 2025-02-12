import { useState, useEffect } from 'react';
import { recipes } from './Recipies';
import styles from '../components/RecipeOfTheDay.module.scss';

const RecipeOfTheDay = () => {
  const [randomRecipe, setRandomRecipe] = useState<any>(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const savedDate = localStorage.getItem('savedDate');
    const currentDate = new Date().toLocaleDateString();

    if (savedDate === currentDate) {
      const savedRecipeIndex = localStorage.getItem('savedRecipeIndex');
      if (savedRecipeIndex) {
        const recipe = recipes[parseInt(savedRecipeIndex)];
        setRandomRecipe(recipe);
        loadImage(recipe);
        return;
      }
    }

    const randomIndex = Math.floor(Math.random() * recipes.length);
    const selectedRecipe = recipes[randomIndex];

    localStorage.setItem('savedRecipeIndex', randomIndex.toString());
    localStorage.setItem('savedDate', currentDate);

    setRandomRecipe(selectedRecipe);
    loadImage(selectedRecipe);
  }, []);

  const loadImage = async (selectedRecipe: any) => {
    try {
      const imageModule = await import(`../assets/${selectedRecipe.image}.jpg`);
      setImage(imageModule.default);
    } catch (error) {
      console.error('Error loading image for', selectedRecipe.image, error);
    }
  };

  if (!randomRecipe || !image) return <div>Loading...</div>;

  return (
<div className="background">
      <h1 className={`text ${styles.title}`}>🍴 {randomRecipe.name} 🍴</h1>
      <div className={styles.recipeContainer}>
        <div className={styles.centerColumn}>
          <img
            className={styles.picture}
            src={image}
            alt={randomRecipe.name}
          />
        </div>

        <div className={styles.leftColumn}>
          <h2 className={`text ${styles.subtitle}`}>🥕 Ingredients</h2>
          <ul className={`text ${styles.ul}`}>
            {randomRecipe.ingredients.map((ingredient: string, index: number) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className={styles.rightColumn}>
          <h2 className={`text ${styles.subtitle}`}>🍳 Instructions</h2>
          <ol className={`text ${styles.ol}`}>
            {randomRecipe.instructions.map((instruction: string, index: number) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeOfTheDay;
