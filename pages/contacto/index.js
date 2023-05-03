import Layout from 'components/Templates/Layout';
import FormContact from 'components/Molecules/FormContact';
import styles from './styles.module.scss'

const Contacto = () => {  
  return (
    <Layout
      title="Contacto"
      description="Escríbenos para fomentar tu capacidad de desarrollar negocios que crezcan y se proyecten en el tiempo"
    >
      <div className={`container-fluid position-relative ${styles.contactHero}`}>
        <div className={`${styles.contactHeroOverlay}`}></div>
        <div className="container pb-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-end align-items-end mb-5">
            <div className="col-lg-6">
              <h2 className="text-dark-blue display-font fs-1 font-weight-bold">Contacto</h2>
              <h3 className="text-white">Aquí estamos</h3>
            </div>
            <div className="col-lg-6">
              <div className="card p-5 mb-5" style={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <FormContact type="Contacto"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
 
export default Contacto;