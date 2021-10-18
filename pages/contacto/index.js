import Layout from 'components/Templates/Layout';
import FormContact from 'components/Molecules/FormContact';
import useNotify from 'hooks/useNotify';

import styles from './styles.module.scss'

const Contacto = () => {
  console.log('Contacto');
  
  return (
    <Layout
      title="Contacto"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >
      <div className={`container-fluid position-relative ${styles.contactHero}`}>
        <div className={`${styles.contactHeroOverlay}`}></div>
        <div className="container pb-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-end align-items-end">
            <div className="col-lg-6">
              <h2 className="text-dark-blue display-font fs-1 font-weight-bold">Contacto</h2>
              <h3 className="text-white">Aquí estamos</h3>
            </div>
            <div className="col-lg-6">
              <div className="card p-5" style={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <FormContact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
 
export default Contacto;