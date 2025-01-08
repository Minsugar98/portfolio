import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import styles from './index.module.css';

export default function Nav() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>Minsu</div>
      <button className={styles.starButton} onClick={toggleTheme}>
        {isDark ? (
          <FaSun color="#ffd700" size={20} />
        ) : (
          <FaMoon color="#537188" size={20} />
        )}
      </button>
    </div>
  );
}
