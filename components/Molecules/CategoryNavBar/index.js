import { useRouter } from 'next/router';

const CategoryNavBar = ({ categories }) => {
  const router = useRouter();
  const handleSelect = (e) => {
    const { value } = e.target;
    console.log({ value });
    if (!(value === 'no-selected')) {
      router.push(`/prensa/categoria/${value}`);
    }
  };
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="d-md-none">
            <h2 className="fs-4 text-center">Explorar por categoría</h2>
            <select className="form-select" onChange={(e) => handleSelect(e)}>
              <option value="no-selected">Seleccionar</option>
              {categories.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="d-none d-md-block">
            <h2 className="fs-4 text-center">Explorar por categoría</h2>
            <ul className="d-flex flex-wrap justify-content-center mb-0">
              {categories.map((item) => (
                <li key={item.slug} className="p-3">
                  <a href={`/prensa/categoria/${item.slug}`} className="btn btn-primary">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavBar;
