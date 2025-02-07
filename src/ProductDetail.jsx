import React from "react";
import styles from "./ProductDetail.module.css";
import "./ProductDetail.css";

//import Footer from "./footer";

import logo from './assets/dough2.png';
// import cupcake from './assets/cupcake.png';
// import donat from './assets/donat.png';
// import bagel from './assets/bagel.png';
// import pie from './assets/pie.png';


const ProductDetail = ({product, onNavigateHome}) => {

    const inlineStyles = {
        productInfo: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
        },
        productPrice: {
            fontSize: "1.5rem",
            color: "#a33232",
            margin: "10px 0",
        },
        addToCartButton: {
            backgroundColor: "deeprose",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
        orderNowButton: {
            backgroundColor: "lightcoral",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
    };


    return (
        <div>
            <div className='product-detail'>
                <div className='product-image'>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.productInfo}>
                    <h1 className='product-title'>{product.name}</h1>
                    <p style={inlineStyles.productPrice}>{product.price}</p>
                    <div className='product-rating'>
                        <span>Rating: ★★★★☆</span>
                    </div>
                    <div className="flex">
                        <div className='product-size'>
                            <label>Size: </label>
                            <select>
                                <option value='Mini'>Mini</option>
                                <option value='Medium'>Medium</option>
                                <option value='Jumbo'>Jumbo</option>
                            </select>
                        </div>
                        <div className='product-quantity'>
                            <label>Jumlah: </label>
                            <input type='number' min='1' defaultValue='1' />
                        </div>
                    </div>
                    <div className='product-buttons'>
                        <button style={inlineStyles.addToCartButton}>
                            Tambah ke Keranjang
                        </button>
                        <button style={inlineStyles.orderNowButton}>Pesan</button>
                    </div>
                    <div className='product-description'>
                        <h3>Deskripsi Produk</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;