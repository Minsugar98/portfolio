import styles from './index.module.css';
import { useTheme } from '../../context/ThemeContext';
import SkillCard from '../../components/skillCard/SkillCard';
import skills from '../../assets/data/skills.json';
import avatar from '../../assets/images/ic_avatar.png';

export default function About() {
  const { isDark } = useTheme();
  return (
    <div className={styles.aboutContainer}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <div className={styles.aboutTitle}>
        <h1>About Me</h1>
      </div>
      <div
        className={`${styles.aboutContent} ${
          isDark ? styles.dark : styles.light
        }`}
      >
        <p>안녕하세요 풀스택 개발자 김민수 입니다.</p>
        <p>
          사용자 중심의 서비스를 만들기 위해 풀스택 개발자로 성장하고 있습니다.
          클린 코드와 확장 가능한 아키텍처를 추구하며, 효율적이고 지속 가능한
          솔루션을 만드는 것에 큰 관심을 가지고 있습니다.
        </p>
      </div>
      <div className={styles.aboutSkillTitle}>
        <h2>Skills</h2>
      </div>
      <div
        className={`${styles.aboutSkillContent} ${
          isDark ? styles.dark : styles.light
        }`}
      >
        <p>Skills</p>
        <div className={styles.SkillContent}>
          {skills.skills.map((skill) => (
            <SkillCard key={skill.img} skill={skill} />
          ))}
        </div>
        <p>Tools</p>
        <div className={styles.ToolsContent}>
          {skills.tools.map((tool) => (
            <SkillCard key={tool.name} skill={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
