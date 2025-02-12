import styles from '../components/HolidaysSeasons.module.scss'
import { useState } from 'react';

const HolidaysSeasons = () => {
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

  const handleQuizAnswer = (answer: string) => {
    setQuizAnswer(answer);
  };

  return (
      <div className="background">
        <h1 className={`text ${styles.title}`}>🍴 Holidays & Seasons 🍴</h1>
        <p className={`text ${styles.subtitle1}`}>Welcome to our Holidays & Seasons page! Explore seasonal ingredients, holiday recipes, fun facts, and even play a quiz to test your holiday knowledge!</p>

        <section className={`text ${styles.funFacts}`}>
          <h2 className={`text ${styles.subtitle}`}>Seasonal Ingredients 🌱</h2>
          <p className={`text ${styles.ptext}`}>Each season brings its own unique ingredients that can elevate your cooking. Here are some key seasonal ingredients:</p>
          
          <ul className={`text ${styles.funFactsList}`}>
            <li>Spring: Fresh asparagus, peas, and strawberries </li>
            <li>Summer: Tomatoes, corn, zucchini, and berries </li>
            <li>Fall: Apples, squash, pumpkin, and root vegetables </li>
            <li>Winter: Kale, citrus fruits, and hearty greens </li>
          </ul>
        </section>

        <section className={`text ${styles.funFacts}`}>
          <h2 className={`text ${styles.subtitle}`}>Holiday Recipes 🍽️</h2>
          <p className={`text ${styles.ptext}`}>Get inspired with these delicious holiday recipes perfect for any festive gathering:</p>
          
          <ul className={`text ${styles.funFactsList}`}>
            <li>Christmas: Roast turkey with cranberry sauce, gingerbread cookies</li>
            <li>Thanksgiving: Pumpkin pie, mashed potatoes, and stuffing </li>
            <li>New Year’s Eve: Champagne cocktails, shrimp cocktail, and appetizers </li>
            <li>Valentine's Day: Chocolate fondue, heart-shaped pancakes </li>
            <li>Halloween: Pumpkin soup, spooky cupcakes </li>
          </ul>
        </section>

        <section className={`text ${styles.funFacts}`}>
          <h2 className={`text ${styles.subtitle}`}>Themed Cooking Ideas 🎨</h2>
          <p className={`text ${styles.ptext}`}>Create themed meals based on the holidays to bring a little extra fun to your table:</p>
          <ul className={`text ${styles.funFactsList}`}>
            <li>Build a “Christmas Feast” with classic dishes like roast ham, mashed potatoes, and hot cocoa! ☃️</li>
            <li>For Halloween, make a “Monster Feast” with “eyeball” meatballs and “witch’s brew” punch. 👻🍷</li>
            <li>Celebrate Spring with a “Farm-to-Table” dinner featuring fresh salads and grilled vegetables. 🌿🥗</li>
            <li>Prepare a cozy “Winter Comfort Meal” with hearty soups, stews, and roasted meats. 🍲❄️</li>
          </ul>
        </section>

        <section className={`text ${styles.funFacts}`}>
          <h2 className={`text ${styles.subtitle}`}>Fun Facts about Holidays & Food 🤓</h2>
          <p className={`text ${styles.ptext}`}>Did you know? 🤔</p>
          <ul className={`text ${styles.funFactsList}`}>
            <li>Did you know that Americans eat around 46 million turkeys each Thanksgiving?</li>
            <li>In Sweden, the Christmas holiday season begins with a feast on December 24th, called "Julbord," which includes pickled herring, gravlax, and more! </li>
            <li>The largest pumpkin pie ever made weighed over 3,000 pounds and was created in Ohio in 2005!</li>
            <li>In Mexico, "Día de los Muertos" (Day of the Dead) is celebrated with colorful altars, sugar skulls, and delicious foods like tamales and pan de muerto. </li>
          </ul>
        </section>

        <section className={`text ${styles.holidayQuiz} ${styles.centeredSection}`}>
  <h2 className={`text ${styles.subtitle}`}>Test Your Knowledge! 🎓</h2>
  <p className={`text ${styles.ptext}`}>How well do you know your holiday traditions? Take this quick quiz to find out!</p>
  
  <div className={`text ${styles.quiz}`}>
    <p className={`text ${styles.ptext}`}>What is the most popular dish served during Thanksgiving in the U.S.? 🍽️</p>
    <button className={styles.quizButton} onClick={() => handleQuizAnswer('Turkey')}>Turkey 🦃</button>
    <button className={styles.quizButton} onClick={() => handleQuizAnswer('Ham')}>Ham 🍖</button>
    <button className={styles.quizButton} onClick={() => handleQuizAnswer('Pizza')}>Pizza 🍕</button>
  </div>
  
  <div className={`text ${styles.quiz}`}>
    <p className={`text ${styles.ptext}`}>Which holiday is known for the tradition of decorating a Christmas tree? 🎄</p>
    <button className={styles.quizButton} onClick={() => handleQuizAnswer('Christmas')}>Christmas 🎅</button>
    <button className={styles.quizButton} onClick={() => handleQuizAnswer('Halloween')}>Halloween 🎃</button>
    <button className={styles.quizButton} onClick={() => handleQuizAnswer('Easter')}>Easter 🐰</button>
  </div>

  <div className={`text ${styles.quiz}`}>
    <p className={`text ${styles.ptext}`}>What vegetable is typically carved into a jack-o'-lantern for Halloween? 🎃</p>
    <button className={styles.quizButton} onClick={() => handleQuizAnswer('Pumpkin')}>Pumpkin 🎃</button>
    <button className={styles.quizButton} onClick={() => handleQuizAnswer('Carrot')}>Carrot 🥕</button>
    <button className={styles.quizButton} onClick={() => handleQuizAnswer('Squash')}>Squash 🍂</button>
  </div>

  {quizAnswer && (
    <p className={`text ${styles.quizResult}`}>
      Your answer: <strong>{quizAnswer}</strong>!
      {quizAnswer === 'Turkey' ? (
        <span className="text"> Correct! Turkey is the traditional Thanksgiving dish. 🦃🎉</span>
      ) : quizAnswer === 'Christmas' ? (
        <span className="text"> Correct! Christmas is known for decorating the Christmas tree. 🎄🎅</span>
      ) : quizAnswer === 'Pumpkin' ? (
        <span className="text"> Correct! A pumpkin is carved into a jack-o'-lantern for Halloween. 🎃</span>
      ) : (
        <span className="text"> Oops! Try again. The correct answers are Turkey, Christmas, and Pumpkin. 🦃🎄🎃</span>
      )}
    </p>
  )}
</section>
      </div>
  )
}

export default HolidaysSeasons;
