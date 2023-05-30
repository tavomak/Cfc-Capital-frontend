import styles from './styles.module.scss';

const Divider = ({ theme, className }) => (
  <div className={className}>
    <span className={`${styles.divider} ${styles[theme]}`} />
  </div>
);

export default Divider;
