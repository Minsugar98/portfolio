import styles from './LeftSide.module.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';
import { useTheme } from '../../context/ThemeContext';

export default function LeftSide() {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.leftSide} ${isDark ? styles.dark : ''}`}>
      <div className={styles.socialIcons}>
        <a
          href="https://github.com/Minsugar98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://sugar98.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTistory />
        </a>
        <a
          href="https://www.instagram.com/min_su_gar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
