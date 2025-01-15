import { useTheme } from '../../context/ThemeContext';
import styles from './FallingStars.module.css';

export default function FallingStars() {
  const { isDark } = useTheme();

  return (
    <div className={styles.starsContainer}>
      {isDark &&
        [...Array(35)].map((_, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              '--scale': Math.random() * (2.5 - 0.5) + 0.5,
              '--travel-distance': `${30 + Math.random() * 70}vh`,
            }}
          />
        ))}
    </div>
  );
}
