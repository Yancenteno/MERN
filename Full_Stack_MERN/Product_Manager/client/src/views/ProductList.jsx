import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const ProductList = (props) => {
    const { products, removeFromDom } = props;

    return (
        <div>
            {products.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={`/products/${product._id}`}> {product.title}, {product.price}, {product.description} </Link>
                        |
                        <Link to={`/products/${product._id}/edit`} >Edit</Link>
                        |
                        <DeleteButton successCallback={() => removeFromDom(product._id)} />
                    </p>
                );
            })}
        </div>
    );
}

export default ProductList;
