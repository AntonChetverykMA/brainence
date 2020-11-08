import { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../../redux/products/products.actions';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

function AddProduct(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState(0);
  let history = useHistory();

  return (
    <div className='d-flex justify-content-center'>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Name of product</label>
          <input
            type='text'
            className='form-control mb-4'
            id='name'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control mb-4'
            id='description'
            placeholder='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor='img'>Add link to img</label>
          <input
            type='text'
            className='form-control mb-4'
            id='img'
            placeholder='img'
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            className='form-control'
            id='price'
            placeholder='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button
          type='button'
          className='btn add'
          onClick={() => {
            if ((name, description, img, price)) {
              props.addProduct({ name, description, img, id: uuidv4(), price });
              history.push('/');
            } else alert('Fill in all the gaps');
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
