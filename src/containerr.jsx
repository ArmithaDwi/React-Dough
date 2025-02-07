import React, { useState } from 'react';
import Header from './header';
import Banner from './banner';
import Diskon from './diskon';
import ProductCard from './productCard';
import ProductCard2 from './productCard2';
import ProductDetail from './ProductDetail';
import Footer from './footer';

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
    },
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




const Containerr = () => {
    const [detailProduct, setDetailProduct] = useState(null);

    const handleProductClick = (product) => {
        setDetailProduct(product);
    };

    const handleNavigateHome = () => {
        setDetailProduct(null);
    };

    return (
        <div>
            <Header onNavigateHome={handleNavigateHome} />
            {!detailProduct ? (
                <div>
                    <Banner />
                    <Diskon />
                    <h2 className="featured">Our Best Demure Products </h2>
                    <ProductCard onProductClick={handleProductClick} />
                    <h2 className="featured">Our Best Cutesy Products</h2>
                    <ProductCard2 onProductClick={handleProductClick} />
                </div>
            ) : (
                <ProductDetail product={detailProduct} onNavigateHome={handleNavigateHome} />
            )}
            <Footer />
        </div>
    );
};

export default Containerr;


