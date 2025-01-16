import styles from './SkillCard.module.css';
import { useTheme } from '../../context/ThemeContext';

export default function SkillCard({ skill }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`${styles.skillCard} ${isDark ? styles.dark : styles.light}`}
    >
      <p>{skill.name}</p>
    </div>
  );
}
