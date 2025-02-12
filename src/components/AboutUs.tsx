import styles from '../components/AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className='background'>
        <h1 className={`text ${styles.title}`}>🍴 Welcome to Evelicious 🍴</h1>
        <p className={`text ${styles.description}`}>
          At Evelicious, we believe that food is more than just sustenance—it's an experience, a memory, and a journey through flavors. 
          Our collection of 100+ handpicked recipes is designed to bring joy to your kitchen and ignite your love for cooking. 🥘✨
        </p>
        
        <h2 className={`text ${styles.subtitle}`}>🌿 Our Philosophy</h2>
        <p className={`text ${styles.description}`}>
          We craft and curate recipes that blend tradition with innovation, ensuring that every bite is packed with taste and love. 
          Whether you're a seasoned chef or a home cook, our easy-to-follow guides will help you create magic on a plate. 🍳👨‍🍳
        </p>
        
        <h2 className={`text ${styles.subtitle}`}>🔥 Why Evelicious?</h2>
        <p className={`text ${styles.description}`}>
          "Where flavors are so good, you'll EVE-ntually love." Our recipes cater to all taste buds, from savory to sweet, 
          classic to modern. We’re here to make cooking exciting, accessible, and above all—delicious! 🍕🍰
        </p>
        
        <h2 className={`text ${styles.subtitle}`}>🤝 Join Us!</h2>
        <p className={`text ${styles.description}`}>
          Become part of our food-loving community. Share your creations, explore new flavors, and let’s make every meal an Evelicious experience. 
          Follow us on social media for daily inspiration! 📸✨
        </p>
      </div>
  );
};

export default AboutUs;
