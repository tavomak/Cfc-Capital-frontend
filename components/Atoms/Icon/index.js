import styles from './styles.module.scss';

const Icon = ({ icon, bgColor, absolute }) => (
  <span className={`${styles.container} ${bgColor} ${absolute && styles.containerAbsolute}`}>
    <span className={styles.icon}>
      {icon}
    </span>
  </span>
);

export default Icon;
