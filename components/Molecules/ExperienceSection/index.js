const ExperienceSection = ({ shape }) => (
  <section className={`pb-5 py-lg-5 bg-${shape}-shape`}>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3 className="text-center text-dark-blue fw-bolder fs-2">
            Tenemos la experiencia
            <br />
            para enfrentar el futuro
          </h3>
          <ul className="d-lg-flex justify-content-between w-100 pt-5">
            <li className="px-4 w-100">
              <div className="card shadow p-4 text-center bg-secondary-gradient">
                <h4 className="text-dark-blue fw-bolder fs-3 mb-0">
                  19
                </h4>
                <p className="text-dark-blue fs-4 mb-0">
                  AÑOS
                </p>
              </div>
            </li>
            <li className="px-4 w-100 my-4 my-lg-0">
              <div className="card shadow p-4 text-center bg-secondary-gradient">
                <h4 className="text-dark-blue fw-bolder fs-3 mb-0">
                  4000
                </h4>
                <p className="text-dark-blue fs-4 mb-0">
                  PYMES
                </p>
              </div>
            </li>
            <li className="px-4 w-100">
              <div className="card shadow p-4 text-center bg-secondary-gradient">
                <h4 className="text-dark-blue fw-bolder fs-3 mb-0">
                  600
                </h4>
                <p className="text-dark-blue fs-4 mb-0">
                  MMUS$
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
