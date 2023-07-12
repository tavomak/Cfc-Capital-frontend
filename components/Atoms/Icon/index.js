import {
  FaRegClock,
  FaRegCheckCircle,
  FaRegStar,
  FaChartBar,
  FaUniversity,
  FaHandHoldingUsd,
  FaUserCheck,
  FaTruck,
  FaFileSignature,
} from 'react-icons/fa';
import styles from './styles.module.scss';

const Icon = ({ icon, bgColor, absolute }) => {
  const getIcon = (service) => {
    const serviceIcon = {
      0: <FaRegClock />,
      1: <FaRegCheckCircle />,
      2: <FaRegStar />,
      factoring: <FaChartBar />,
      leasing: <FaTruck />,
      leaseback: <FaFileSignature />,
      star: <FaUniversity />,
      people: <FaUserCheck />,
      money: <FaHandHoldingUsd />,
    }[service?.toLowerCase()] || icon;
    return serviceIcon;
  };
  return (
    <span className={`${styles.container} ${bgColor} ${absolute && styles.containerAbsolute}`}>
      <span className={styles.icon}>
        {getIcon(icon)}
      </span>
    </span>
  );
};

export default Icon;
