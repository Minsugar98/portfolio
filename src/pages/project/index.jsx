import styles from './index.module.css';
import projectData from '../../assets/data/project.json';
import ProjectCard from '../../components/projectCard/ProjectCard';

export default function Project() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectContent}>
        {projectData.project.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
