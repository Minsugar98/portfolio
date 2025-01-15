import { useState } from 'react';
import styles from './RightSide.module.css';
import { useTheme } from '../../context/ThemeContext.jsx';
import { HiX } from 'react-icons/hi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function RightSide() {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };
  return (
    <>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="메뉴 토글"
      >
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      <div
        className={`${styles.rightSide} ${isOpen ? styles.open : ''} ${
          isDark ? styles.dark : styles.light
        }`}
      >
        <div className={styles.rightSideContent}>
          <ul className={isDark ? styles.darkText : styles.lightText}>
            <li onClick={() => handleNavigate('/')}>HOME</li>
            <li onClick={() => handleNavigate('/about')}>ABOUT</li>
            <li onClick={() => handleNavigate('/project')}>PROJECT</li>
            <li onClick={() => handleNavigate('/contact')}>CONTACT</li>
          </ul>
        </div>
      </div>
    </>
  );
}
