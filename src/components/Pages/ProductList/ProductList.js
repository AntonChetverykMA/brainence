import { connect } from 'react-redux';
import { useState } from 'react';

import ProductItem from './ProductItem';

function ProductList(props) {
  const { products } = props;
  const [pinned, setPinned] = useState('');
  const [search, setSearch] = useState('');
  const productsCopy = [
    ...products.sort((product) => (product.id === pinned ? -1 : 1)),
  ].filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='products-container'>
      <form className='mt-4'>
        <div className='form-group row'>
          <label htmlFor='search' className='col-sm-2 col-form-label'>
            Search
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control-plaintext'
              id='search'
              value={search}
              placeholder='search'
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
        </div>
      </form>
      <div className='products-list-container'>
        {productsCopy.length ? (
          productsCopy.map((product) => (
            <ProductItem
              {...product}
              key={product.id}
              pinned={pinned}
              setPinned={setPinned}
            />
          ))
        ) : (
          <div>No items</div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
