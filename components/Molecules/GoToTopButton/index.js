import { FaAngleUp } from 'react-icons/fa';
import styles from './styles.module.scss';

const GoToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      type="button"
      className={styles.goToTop}
      onClick={handleClick}
    >
      <span className={`fs-3 ${styles.icon}`}>
        <FaAngleUp />
      </span>
    </button>
  );
};

export default GoToTopButton;
