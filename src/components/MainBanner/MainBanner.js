import { Link } from 'react-router-dom';

import './MainBanner.scss';

const MainBanner = () => {
  return (
    <div className="banner">
      <div className="banner__hero">
        <h1 className="banner__title">
          Toda nossa loja
          <br />
          você encontra
          <br />
          aqui
        </h1>
        <Link to="/products" className="btn btn-black">
          Ver
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
