import styles from './index.module.css';
import ReactTypingEffect from 'react-typing-effect';

export default function Landing() {
  const messages = [
    'React 개발 경험이 있습니다.',
    'TypeScript 개발 경험이 있습니다.',
    'NextJs 개발 경험이 있습니다.',
    'Full-Stack 개발 경험이 있습니다.',
  ];

  return (
    <div className={styles.landingContainer}>
      <h1 className={styles.greeting}>안녕하세요</h1>
      <h1 className={styles.introduction}>저는 풀스택 개발자 김민수입니다.</h1>
      <h1 className={styles.message}>
        <ReactTypingEffect
          text={messages}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={100}
          cursor="|"
        />
      </h1>
    </div>
  );
}
