import styles from './index.module.css';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as VscIcons from 'react-icons/vsc';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import * as DiIcons from 'react-icons/di';
import * as BiIcons from 'react-icons/bi';
import { useTheme } from '../../context/ThemeContext';

export default function SkillCard({ skill }) {
  const { isDark } = useTheme();
  const getIconComponent = (iconName) => {
    const prefix = iconName.substring(0, 2);
    switch (prefix) {
      case 'Fa':
        return FaIcons[iconName];
      case 'Si':
        return SiIcons[iconName];
      case 'Vs':
        return VscIcons[iconName];
      case 'Ri':
        return RiIcons[iconName];
      case 'Io':
        return IoIcons[iconName];
      case 'Di':
        return DiIcons[iconName];
      case 'Bi':
        return BiIcons[iconName];
      default:
        return null;
    }
  };

  const IconComponent = getIconComponent(skill.img);

  return (
    <div
      className={`${styles.skillCard} ${isDark ? styles.dark : styles.light}`}
    >
      <IconComponent />
      <p>{skill.name}</p>
    </div>
  );
}
