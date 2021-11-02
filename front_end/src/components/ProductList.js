import React from 'react';
import { useFilterContext } from '../context/filter_context';
import ListView from './ListView';
import GridView from './GridView';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return <h5>Sorry, no products matched your search</h5>;
  }

  if (!grid_view) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
