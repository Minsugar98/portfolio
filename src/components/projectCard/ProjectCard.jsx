import styles from './ProjectCard.module.css';
import { useTheme } from '../../context/ThemeContext';
import Modal from 'react-modal';
import { useState } from 'react';

export default function ProjectCard({ project }) {
  const { isDark } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 9999,
    },
    content: {
      width: '50%',
      height: '50%',
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
      color: isDark ? '#ffffff' : '#000000',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10000,
    },
  };
  const handleProjectBtnClick = () => {
    window.open(project.github, '_blank');
  };
  return (
    <div className={isDark ? styles.projectCardDark : styles.projectCard}>
      <div className={styles.projectCardTitle}>
        <img
          className={styles.projectCardImage}
          src={`/images/${project.id}.png`}
          alt={project.title}
        />
        <div className={styles.projectCardTitleText}>{project.title}</div>
        <div className={styles.projectCardDescription}>
          {project.description}
        </div>
        <div className={styles.projectBtnContainer}>
          <button
            className={isDark ? styles.projectBtnDark : styles.projectBtn}
            onClick={handleProjectBtnClick}
          >
            Github
          </button>
          <button
            className={isDark ? styles.projectBtnDark : styles.projectBtn}
            onClick={() => setIsModalOpen(true)}
          >
            View details
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={customStyles}
        >
          <div className={styles.modalContent}>
            <video
              src={`/video/${project.id}.mp4`}
              autoPlay
              loop
              muted
              controls
              className={styles.modalVideo}
            />

            <div className={styles.modalMyWork}>
              <p>느낀점</p>
              {project.myWork.map((work) => (
                <div key={work} className={styles.modalMyWorkItem}>
                  {work}
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
