import React from "react";
import styles from "./ProductDetail.module.css";
import "./ProductDetail.css";
// import Footer from "./footer";

const ProductDetail = () => {
    const inlineStyles = {
        productInfo: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
        },
        productPrice: {
            fontSize: "1.5rem",
            color: "#FF5722",
            margin: "10px 0",
        },
        addToCartButton: {
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
        orderNowButton: {
            backgroundColor: "#FF5722",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
    };

    return (
        <div>
            <div className='header'>
                <h1>Product Detail</h1>
                <nav className='navbar'>
                    <a href='#home'>Home</a>
                    <a href='#products'>Products</a>
                    <a href='#about'>About</a>
                    <a href='#contact'>Contact</a>
                </nav>
            </div>
            <div className='product-detail'>
                <div className='product-image'>
                    <img src='src/assets/leather-boots-min.jpg' alt='Product' />
                    <div className='product-variation'>
                        <img src='src/assets/leather-boots (1).jpg' alt='Variation 1' />
                        <img src='src/assets/leather-boots.jpg' alt='Variation 2' />
                        <img src='src/assets/leather-boots-min.jpg' alt='Variation 3' />
                    </div>
                </div>
                <div className={styles.productInfo}>
                    <h1 className='product-title'>Sepatu Boots Pria</h1>
                    <p style={inlineStyles.productPrice}>Rp. 1.050.790</p>
                    <div className='product-rating'>
                        <span>Rating: ★★★★☆</span>
                    </div>
                    <div className='product-size'>
                        <label>Size: </label>
                        <select>
                            <option value='41'>41</option>
                            <option value='42'>42</option>
                            <option value='43'>43</option>
                            <option value='44'>44</option>
                        </select>
                    </div>
                    <div className='product-quantity'>
                        <label>Jumlah: </label>
                        <input type='number' min='1' defaultValue='1' />
                    </div>
                    <div className='product-buttons'>
                        <button style={inlineStyles.addToCartButton}>
                            Tambah ke Keranjang
                        </button>
                        <button style={inlineStyles.orderNowButton}>Pesan</button>
                    </div>
                    <div className='product-description'>
                        <h2>Deskripsi Produk</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                            in et? Fugit, nobis eos saepe quas sequi illo. Qui dolore totam
                            sed sequi. Praesentium perspiciatis, labore animi deserunt iste
                            sint?
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;