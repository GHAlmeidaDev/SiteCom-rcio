import { useDispatch } from 'react-redux';

import Stars from '../../Stars/Stars';

import { addToCart } from '../../../redux/products/products_actions';

import './SingleProductInfo.scss';

const SingleProductInfo = ({ name, brand, price, stars, desription, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="singleProduct">
        <h3 className="singleProduct__title">{name}</h3>
        <p className="singleProduct__brand">
          {' '}
          <span className="singleProduct__brand--span">BRAND:</span> {brand}
        </p>
        <h4 className="singleProduct__price">R${price}</h4>
        <Stars stars={stars} />
        <p className="singleProduct__desc">{desription}</p>
      </div>
      <button
        onClick={() => dispatch(addToCart(id))}
        type="button"
        className="btn btn-primary"
      >
        Adicionar no Carrinho
      </button>
    </>
  );
};

export default SingleProductInfo;
