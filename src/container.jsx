import React, { useState } from "react";
import HomePage from "./HomePage";
import ProductDetail from './ProductDetail';

import bagel from './assets/bagel.png';
import bread from './assets/bread.png';
import cake from './assets/cake.png';
import cookies from './assets/cookies.png';
import cupcake from './assets/cupcake.png';
import donat from './assets/donat.png';
import pie from './assets/pie.png';
import tartpie from './assets/tartpie.png';

const Container = () => {
    const [detailProduct, setDetailProduct] = useState(null);

    const handleProductClick = (product) => {
        setDetailProduct(product);
    };

    const handleNavigateHome = () => {
        setDetailProduct(null);
    };


    const product = [
        { id: 1, name: 'Bread', price: 'Rp 15.000', image: bread },
        { id: 2, name: 'Cake', price: 'Rp 40.000', image: cake },
        { id: 3, name: 'Cupcake', price: 'Rp 10.000', image: cupcake },
        { id: 4, name: 'Tart Pie', price: 'Rp 20.000', image: pie },
        { id: 5, name: 'Cookies', price: 'Rp 10.000', image: cookies },
        { id: 6, name: 'Doughnuts', price: 'Rp 7.000', image: donat },
        { id: 7, name: 'Bagels', price: 'Rp 8.000', image: bagel },
        { id: 8, name: 'Pie', price: 'Rp 25.000', image: tartpie },
    ];


    return (
        <div className="container">
            {selectedProduct ? (
                <ProductDetail
                    product={detailProduct}
                    onNavigateHome={handleNavigateHome} 
                />
            ) : (
                <HomePage onProductClick={handleProductClick} />
            )}
        </div>
    );
};

export default Container;
