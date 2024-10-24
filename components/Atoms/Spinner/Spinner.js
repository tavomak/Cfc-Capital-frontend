import styles from './styles.module.css';

const Loader = ({ width, height, type, style }) =>
  type === 'dots' ? (
    <span
      className={styles.skChase}
      style={{ width: width || '20px', height: height || '20px', ...style }}
    >
      <span className={styles.skChaseDot} />
      <span className={styles.skChaseDot} />
      <span className={styles.skChaseDot} />
      <span className={styles.skChaseDot} />
      <span className={styles.skChaseDot} />
      <span className={styles.skChaseDot} />
    </span>
  ) : (
    <span
      className={styles.loader}
      style={{ width: width || '20px', height: height || '20px' }}
    />
  );

export default Loader;
