import { connect } from 'react-redux';
import { deleteProduct } from '../../../redux/products/products.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faAnchor } from '@fortawesome/free-solid-svg-icons';

function ProductItem(props) {
  const { img, name, description, price, id, pinned, setPinned } = props;

  return (
    <div className='card mt-4'>
      <div
        className='ml-2 mt-2'
        onClick={() => (pinned === id ? setPinned('') : setPinned(id))}
      >
        {id !== pinned ? (
          <FontAwesomeIcon icon={faThumbtack} />
        ) : (
          <FontAwesomeIcon icon={faAnchor} />
        )}
      </div>

      <div className='img-container'>
        <img className='card-img' src={img} alt='img' />
      </div>

      <div className='card-body'>
        <p className='card-title'>{name}</p>
        <div className='card-text'>Descirption: {description}</div>
        <div className='card-text'>Price: {price}</div>
      </div>
      <button
        type='button'
        onClick={() => props.deleteProduct(id)}
        className='delete'
      >
        Delete
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
