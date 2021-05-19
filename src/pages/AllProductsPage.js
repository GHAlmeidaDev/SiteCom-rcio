import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../redux/products/products_actions';

import AllProducts from '../components/AllProducts/AllProducts';
import ClientSlider from '../components/ClientSlider/ClientSlider';


const AllProductsPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
  
      <AllProducts products={products} />
      <ClientSlider />
    </>
  );
};

export default AllProductsPage;
