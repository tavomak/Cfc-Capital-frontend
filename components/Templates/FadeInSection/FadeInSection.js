import { useRef } from 'react';
import { motion, scale, useInView } from 'motion/react';

const FadeInSection = ({ children, className, delay = 0, as = 'section' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const MotionElement = motion[as];

  return (
    <MotionElement
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 28, scale: 0.95 }
      }
    >
      {children}
    </MotionElement>
  );
};

export default FadeInSection;
