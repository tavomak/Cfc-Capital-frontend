import Layout from 'components/Templates/Layout';
import styles from './styles.module.scss';

const Contacto = () => {
  const memorial = [
    {
      year: '2021',
      url: '/memorias_fichas/2021_asdfqwer.pdf'
    },
    {
      year: '2020',
      url: '/memorias_fichas/2020_nMe3h.pdf'
    },
    {
      year: '2019',
      url: '/memorias_fichas/2019_qylwK.pdf'
    },
    {
      year: '2018',
      url: '/memorias_fichas/2018_9RhLS.pdf'
    },
    {
      year: '2017',
      url: '/memorias_fichas/2017_6cnGO.pdf'
    },
    {
      year: '2016',
      url: '/memorias_fichas/2016_drVaK.pdf'
    },
    {
      year: '2015',
      url: '/memorias_fichas/2015_4s4Ft.pdf'
    },
    {
      year: '2014',
      url: '/memorias_fichas/2014_ycsFj.pdf'
    },
    {
      year: '2013',
      url: '/memorias_fichas/2013_bNa0L.pdf'
    },
    {
      year: '2012',
      url: '/memorias_fichas/2012_tjmj2.pdf'
    },
    {
      year: '2011',
      url: '/memorias_fichas/2011_P3I8Y.pdf'
    },
    {
      year: '2010',
      url: '/memorias_fichas/2010_bLG8o.pdf'
    },
    {
      year: '2009',
      url: '/memorias_fichas/2009_Iu7Cq.pdf'
    },
    {
      year: '2008 complemento',
      url: '/memorias_fichas/complementario-2008_z2qcG.pdf'
    },
    {
      year: '2008',
      url: '/memorias_fichas/2019_qylwK.pdf'
    },
    {
      year: '2007',
      url: '/memorias_fichas/2007_422ta.pdf'
    },
  ] 
  return (
    <Layout
      title="Memorias"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >
      <div className={`container-fluid bg-grey py-5`}>
        <div className="container">
          <div className="row pb-5">
            <div className="col-12">
              <h1 className="text-soft-purple">Memorias Anuales</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="d-flex flex-wrap">
                {memorial.map((item) => (
                  <li key={item.year} className={`mb-5 ${styles.item}`}>
                    <h4>Memoria {item.year}</h4>
                    <a href={item.url} target="_blanc" rel="noopener noreferrer" className="btn btn-primary">
                      <small>
                        Descargar
                      </small>
                    </a>
                    <hr />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
 
export default Contacto;