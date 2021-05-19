import { Link } from 'react-router-dom';

import Title from '../Title/Title';
import Category from './Category/Category';

import camiseta from '../../assets/images/categories/camiseta.jpg';
import sapato from '../../assets/images/categories/sapato.jpg';
import short from '../../assets/images/categories/short.jpg';

const Categories = () => {
  return (
    <>
      <section className="py-5 section-bg">
        <div className="container">
          <Title title="CATEGORIAS" />
          <div className="row">
            <div className="col-6 col-md-4 mb-4 mb-md-0 mx-auto">
              <Link to="/camisas">
                <Category image={camiseta} title="camisas" />
              </Link>
            </div>
            <div className="col-6 col-md-4 mx-auto mb-4 mb-md-0 ">
              <Link to="/sapatos">
                <Category image={sapato} title="sapatos" />
              </Link>
            </div>
            <div className="col-6 col-md-4 mx-auto mb-4 mb-md-0">
              <Link to="/shorts">
                <Category image={short} title="shorts" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
