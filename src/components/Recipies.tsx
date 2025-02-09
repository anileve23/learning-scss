import { useState, useEffect } from 'react';
import styles from '../components/Recipies.module.scss';

export const recipes = [
    {
      name: "Spaghetti Bolognese",
      image: "Spaghetti-Bolognese",
      ingredients: [
        "200g spaghetti",
        "300g ground beef",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "400g canned tomatoes",
        "2 tbsp olive oil",
        "1 tsp dried oregano",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Cook spaghetti according to package instructions.",
        "In a pan, heat olive oil over medium heat, and sauté onion and garlic until soft.",
        "Add ground beef and cook until browned.",
        "Add canned tomatoes, oregano, salt, and pepper. Simmer for 15 minutes.",
        "Serve the sauce over the cooked spaghetti."
      ]
    },
    {
      name: "Chicken Alfredo",
      image: "Chicken-Alfredo",
      ingredients: [
        "2 chicken breasts, grilled and sliced",
        "200g fettuccine pasta",
        "1 cup heavy cream",
        "1 cup grated Parmesan cheese",
        "2 cloves garlic, minced",
        "2 tbsp butter",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Cook fettuccine according to package instructions.",
        "In a pan, melt butter over medium heat and sauté garlic until fragrant.",
        "Add heavy cream and Parmesan cheese, stirring until the sauce thickens.",
        "Add the grilled chicken slices and cooked pasta, mixing well.",
        "Season with salt and pepper to taste and serve."
      ]
    },
    {
      name: "Beef Tacos",
      image: "Beef-Tacos",
      ingredients: [
        "500g ground beef",
        "1 packet taco seasoning",
        "12 taco shells",
        "1 cup shredded cheddar cheese",
        "1 cup lettuce, shredded",
        "1 tomato, diced",
        "1/2 onion, diced",
        "1/2 cup sour cream",
        "1/4 cup salsa"
      ],
      instructions: [
        "Cook ground beef in a pan over medium heat until browned.",
        "Add taco seasoning and cook according to packet instructions.",
        "Warm taco shells in the oven according to package directions.",
        "Fill each taco shell with beef mixture, cheese, lettuce, tomato, and onion.",
        "Top with sour cream and salsa and serve."
      ]
    },
    {
      name: "Caesar Salad",
      image: "Caesar-Salad",
      ingredients: [
        "1 head Romaine lettuce, chopped",
        "1/2 cup Caesar dressing",
        "1/4 cup grated Parmesan cheese",
        "1 cup croutons"
      ],
      instructions: [
        "Toss lettuce in a large bowl with Caesar dressing.",
        "Top with Parmesan cheese and croutons.",
        "Serve immediately."
      ]
    },
    {
      name: "Grilled Cheese Sandwich",
      image: "grilled-cheese",
      ingredients: [
        "2 slices bread",
        "2 slices cheddar cheese",
        "2 tbsp butter"
      ],
      instructions: [
        "Butter one side of each slice of bread.",
        "Place cheese between the slices, buttered side out.",
        "Grill on medium heat until golden brown on both sides and cheese is melted."
      ]
    },
    {
      name: "Vegetable Stir Fry",
      image: "vegetable-stir-fry",
      ingredients: [
        "1 cup broccoli florets",
        "1 cup carrots, sliced",
        "1 bell pepper, sliced",
        "1 onion, sliced",
        "2 tbsp soy sauce",
        "1 tbsp olive oil",
        "1 tsp garlic, minced"
      ],
      instructions: [
        "Heat olive oil in a pan over medium heat.",
        "Add garlic and sauté until fragrant.",
        "Add the vegetables and stir-fry for 5-7 minutes.",
        "Add soy sauce and cook for an additional 2 minutes.",
        "Serve immediately."
      ]
    },
    {
      name: "Margherita Pizza",
      image: "Margherita-Pizza",
      ingredients: [
        "1 pizza dough",
        "1 cup tomato sauce",
        "200g fresh mozzarella, sliced",
        "1/4 cup fresh basil leaves",
        "1 tbsp olive oil"
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce over it.",
        "Top with mozzarella cheese and fresh basil.",
        "Drizzle with olive oil and bake for 10-12 minutes until crust is golden."
      ]
    },
    {
      name: "Lentil Soup",
      image: "Lentil-Soup",
      ingredients: [
        "1 cup lentils, rinsed",
        "1 onion, chopped",
        "2 carrots, chopped",
        "2 celery stalks, chopped",
        "2 cloves garlic, minced",
        "1 can diced tomatoes",
        "4 cups vegetable broth",
        "1 tsp cumin",
        "Salt and pepper to taste"
      ],
      instructions: [
        "In a large pot, sauté onion, carrots, celery, and garlic until softened.",
        "Add lentils, diced tomatoes, vegetable broth, and cumin.",
        "Bring to a boil, then reduce heat and simmer for 30-40 minutes, until lentils are tender.",
        "Season with salt and pepper, and serve."
      ]
    },
    {
      name: "Chicken Tenders",
      image: "Chicken-Tenders",
      ingredients: [
        "4 chicken breasts, cut into strips",
        "1 cup breadcrumbs",
        "1/2 cup flour",
        "2 eggs, beaten",
        "1 tsp garlic powder",
        "1 tsp paprika",
        "Salt and pepper to taste",
        "Vegetable oil for frying"
      ],
      instructions: [
        "Mix breadcrumbs, flour, garlic powder, paprika, salt, and pepper in a shallow dish.",
        "Dip chicken strips in eggs, then coat with breadcrumb mixture.",
        "Heat oil in a pan over medium heat and fry chicken until golden brown on both sides.",
        "Drain on paper towels and serve."
      ]
    },
    {
      name: "BBQ Ribs",
      image: "BBQ-Ribs",
      ingredients: [
        "2 racks baby back ribs",
        "1/4 cup brown sugar",
        "1/4 cup paprika",
        "1 tbsp garlic powder",
        "1 tbsp onion powder",
        "1 tsp cumin",
        "1 tsp salt",
        "1 tsp black pepper",
        "1 cup BBQ sauce"
      ],
      instructions: [
        "Preheat oven to 300°F (150°C).",
        "Mix brown sugar, paprika, garlic powder, onion powder, cumin, salt, and pepper to make the rub.",
        "Rub the spice mixture all over the ribs and wrap them in foil.",
        "Bake for 2.5 hours, then remove from the foil.",
        "Brush BBQ sauce over the ribs and grill for 10-15 minutes, basting with more sauce."
      ]
    },
    {
      name: "Fish Tacos",
      image: "Fish-Tacos",
      ingredients: [
        "500g white fish fillets",
        "1 tsp chili powder",
        "1 tsp cumin",
        "1 tsp paprika",
        "12 soft taco shells",
        "1 cup cabbage, shredded",
        "1/4 cup cilantro, chopped",
        "1 lime, cut into wedges",
        "1/4 cup sour cream"
      ],
      instructions: [
        "Season fish fillets with chili powder, cumin, and paprika.",
        "Cook fish in a pan over medium heat for 3-4 minutes per side.",
        "Warm taco shells and fill with fish, cabbage, cilantro, and a drizzle of sour cream.",
        "Serve with lime wedges."
      ]
    },
    {
      name: "Pasta Primavera",
      image: "Pasta-Primavera",
      ingredients: [
        "200g pasta of choice",
        "1 zucchini, sliced",
        "1 bell pepper, sliced",
        "1 cup cherry tomatoes, halved",
        "2 tbsp olive oil",
        "1/4 cup Parmesan cheese",
        "1 tsp garlic, minced",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Cook pasta according to package instructions.",
        "In a pan, heat olive oil and sauté garlic until fragrant.",
        "Add zucchini, bell pepper, and cherry tomatoes, and sauté for 5 minutes.",
        "Mix cooked pasta with vegetables, and top with Parmesan cheese.",
        "Season with salt and pepper, and serve."
      ]
    },
    {
      name: "Cheese Quesadilla",
      image: "Cheese-Quesadilla",
      ingredients: [
        "2 flour tortillas",
        "1 cup shredded cheddar cheese",
        "1/4 cup sour cream",
        "1/4 cup salsa"
      ],
      instructions: [
        "Place cheese between the tortillas and cook on a griddle over medium heat until golden brown on both sides.",
        "Serve with sour cream and salsa."
      ]
    },
    {
      name: "Vegetable Soup",
      image: "Vegetable-Soup",
      ingredients: [
        "1 onion, chopped",
        "2 carrots, chopped",
        "2 celery stalks, chopped",
        "1 zucchini, chopped",
        "1 can diced tomatoes",
        "4 cups vegetable broth",
        "1 tsp basil",
        "1 tsp thyme",
        "Salt and pepper to taste"
      ],
      instructions: [
        "In a large pot, sauté onion, carrots, celery, and zucchini until softened.",
        "Add diced tomatoes, vegetable broth, basil, and thyme.",
        "Bring to a boil, then simmer for 20-30 minutes.",
        "Season with salt and pepper and serve."
      ]
    },
    {
      name: "Pancakes",
      image: "Pancakes",
      ingredients: [
        "1 cup flour",
        "1 tbsp sugar",
        "1 tbsp baking powder",
        "1/2 tsp salt",
        "1 cup milk",
        "1 egg",
        "1 tbsp melted butter"
      ],
      instructions: [
        "In a bowl, mix flour, sugar, baking powder, and salt.",
        "Whisk in milk, egg, and melted butter until smooth.",
        "Cook pancakes on a griddle over medium heat until bubbles form, then flip and cook until golden brown."
      ]
    },
    
  ]

const Recipies = () => {
  const [images, setImages] = useState<any>({});

  useEffect(() => {
    const loadImages = async () => {
      const imageImports = await Promise.all(
        recipes.map(async (recipe) => {
          try {
            const image = await import(`../assets/${recipe.image}.jpg`);
            return { [recipe.image]: image.default };
          } catch (error) {
            console.error("Error loading image for", recipe.image, error);
            return { [recipe.image]: null };
          }
        })
      );

      const imagesObject = Object.assign({}, ...imageImports);
      setImages(imagesObject);
    };

    loadImages();
  }, []);

  return (
    <div className={`${styles.contentWrapper} background`}>
        <h1 className={`text ${styles.title}`}>🍴 100 Recipies 🍴</h1>
      <div className={styles.recipeList}>
        {recipes.map((recipe, index) => (
          <div key={index} className={`background ${styles.recipeCard}`}>
            {images[recipe.image] ? (
              <img
                src={images[recipe.image]}
                alt={recipe.name}
                className={styles.recipeImage}
              />
            ) : (
              <p>Image not available</p> 
            )}
            <h2 className={`text ${styles.recipeTitle}`}>{recipe.name}</h2>
            <h3 className={`text ${styles.sectionTitle}`}>Ingredients:</h3>
            <ul className={`text ${styles.ingredients}`}>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h3 className={`text ${styles.sectionTitle}`}>Instructions:</h3>
            <ol className={`text ${styles.instructions}`}>
              {recipe.instructions.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipies;
