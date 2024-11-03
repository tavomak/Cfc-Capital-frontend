import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from './styles.module.css';

const CategoryNavBar = ({ categories }) => {
  const router = useRouter();
  const [scrollTop, setScrollTop] = useState(0);
  const handleSelect = (e) => {
    const { value } = e.target;
    if (!(value === 'no-selected')) {
      router.push(`/prensa/categoria/${value}`);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section
      className={`${styles.categoryFilter} ${scrollTop > 350 ? styles.active : ''} ${scrollTop > 350 ? 'shadow' : ''}`}
    >
      <div className="container md:px-4 mx-auto">
        <div className="md:hidden">
          <h2 className={`text-center ${scrollTop > 350 && styles.hideTitle}`}>
            Explorar por categoría
          </h2>
          <select className="form-select" onChange={(e) => handleSelect(e)}>
            <option value="no-selected">Seleccionar</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden md:block">
          <h2
            className={`text-xl text-center ${scrollTop > 350 && styles.hideTitle}`}
          >
            Explorar por categoría
          </h2>
          <ul className="flex flex-wrap justify-center">
            {categories.map((item) => (
              <li key={item.slug} className="p-3">
                <a
                  href={`/prensa/categoria/${item.slug}`}
                  className="btn btn-gray"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavBar;
