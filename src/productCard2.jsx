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
        id: 5,
        name: 'Cookies',
        price: 'Rp 10.000',
        image: cookies,
        description: 'Cookies renyah berbagai rasa. Memiliki tekstur dan rasa yang pas, cocok untuk teman ngopi atau camilan.'
    },
    {
        id: 6,
        name: 'Doughnuts',
        price: 'Rp 7.000',
        image: donat,
        description: 'Doughnut klasik yang dilengkapi taburan gula halus atau glaze. Cocok untuk sarapan atau cemilan sore hari.'
    },
    {
        id: 7,
        name: 'Bagels',
        price: 'Rp 8.000',
        image: bagel,
        description: 'Bagels yang cocok untuk sarapan atau brunch. Tekstur kenyal dengan rasa gurih dan varian isi yang beragam.'
    },
    {
        id: 8,
        name: 'Pie',
        price: 'Rp 25.000',
        image: tartpie,
        description: 'Pie dengan krim custard lembut dan buah segar pilihan. Crust yang renyah dan pas dengan isian yang kaya rasa.'
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
