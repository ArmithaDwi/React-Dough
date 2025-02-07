import React from 'react';

import bread from './assets/bread.png';
import cake from './assets/cake.png';
import cupcake from './assets/cupcake.png';
import cookies from './assets/cookies.png';
import donat from './assets/donat.png';
import pie from './assets/pie.png';
import bagel from './assets/bagel.png';
import tartpie from './assets/tartpie.png';

const product = [
    {
        id: 1,
        name: 'Bread',
        price: 'Rp 15.000',
        image: bread,
        description: 'Roti segar yang dipanggang setiap hari menggunakan bahan berkualitas, dan tekstur yang lembut.'
    },
    {
        id: 2,
        name: 'Cake',
        price: 'Rp 40.000',
        image: cake,
        description: 'Kue bertekstur lembut dan rasa manis yang pas, dihiasi dengan berbagai lapisan krim dan topping.'
    },
    {
        id: 3,
        name: 'Cupcake',
        price: 'Rp 10.000',
        image: cupcake,
        description: 'Cupcake lembut dengan berbagai topping menarik seperti cokelat, krim keju, dan buah-buahan segar.'
    },
    {
        id: 4,
        name: 'Tart Pie',
        price: 'Rp 20.000',
        image: pie,
        description: 'Tart Pie selai buah-buahan. Memiliki rasa manis dan asam yang seimbang, dengan crust yang renyah.'
    }
];

const Product = ({ onProductClick }) => (
    <div className='product-list'>
        {product.map((product) => (
            <div className='product-card' key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className='product-info'>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={() => onProductClick(product)}>Add to Cart</button>
                </div>
            </div>
        ))}
    </div>
);

export default Product;
