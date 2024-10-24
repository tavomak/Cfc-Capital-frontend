import { FaAngleUp } from 'react-icons/fa';

import styles from './styles.module.css';

const GoToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button type="button" className={styles.goToTop} onClick={handleClick}>
      <span className={`text-3xl ${styles.icon}`}>
        <FaAngleUp />
      </span>
    </button>
  );
};

export default GoToTopButton;
