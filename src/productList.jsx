import React from 'react';

const product = [
    { id: 1, name: 'Bread', price: 'Rp 15.000', image: bread, description: 'Roti segar setiap hari.' },
    { id: 2, name: 'Cake', price: 'Rp 40.000', image: cake, description: 'Kue spesial untuk momen bahagia.' },
    { id: 3, name: 'Cupcake', price: 'Rp 10.000', image: cupcake, description: 'Cupcake lembut dengan berbagai topping.' },
    { id: 4, name: 'Tart Pie', price: 'Rp 20.000', image: pie, description: 'Tart Pie yang nikmat.' },
    { id: 5, name: 'Cookies', price: 'Rp 10.000', image: cookies, description: 'Cookies renyah dengan rasa cokelat.' },
    { id: 6, name: 'Doughnuts', price: 'Rp 7.000', image: donat, description: 'Doughnut klasik yang lezat.' },
    { id: 7, name: 'Bagels', price: 'Rp 8.000', image: bagel, description: 'Bagels sempurna untuk sarapan.' },
    { id: 8, name: 'Pie', price: 'Rp 25.000', image: tartpie, description: 'Pie manis yang penuh rasa.' },
];

const ProductList = ({ products, onProductClick }) => (
    <div className='product-list'>
        {products.map((product) => (
            <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                onClick={() => onProductClick(product)}
            />
        ))}
    </div>
);

export default ProductList;