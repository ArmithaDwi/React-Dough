// HomePage.js
import React, { Component } from "react";
import './styles.css';


// Gambar
import bagel from './assets/bagel.png';
import bread from './assets/bread.png';
import cake from './assets/cake.png';
import cookies from './assets/cookies.png';
import cupcake from './assets/cupcake.png';
import donat from './assets/donat.png';
import logo from './assets/dough2.png';
import pie from './assets/pie.png';
import tartpie from './assets/tartpie.png';


class HomePage extends Component {
    render() {
        const [detailProduk, setDetailProduct] = useState(null);

        if (detailProduk) {
            return <ProductDetail product={detailProduk} onNavigateHome={() => setDetailProduct(null)} />;
        }

        return (
            <div className='homepage'>
                <header className='header'>
                    <div className='logo'>
                        <img src={logo} alt="Logo" />
                        <h2>Dough</h2>
                    </div>
                    <nav className='nav'>
                        <a href='#' onClick={() => setDetailProduct(null)}>Home</a>
                        <a href='/products'>Products</a>
                        <a href='/cart'>Cart</a>
                        <a href='/login'>Login</a>
                    </nav>
                </header>

                <div className='banner'>
                    <h2>Welcome!<br></br>Find your Doughlicious in here</h2>
                </div>

                <div className="kotak">
                    <div className="kotak-card1">
                        <h3>5% Discount</h3>
                        <p>For First Customer & Orderer</p>
                    </div>

                    <div className="kotak-card2">
                        <h3>10% Discount</h3>
                        <p>For Every Purchase of 2 Boxes</p>
                    </div>

                    <div className="kotak-card3">
                        <h3>Buy 1 Get 1</h3>
                        <p>Every Purchase on Friday Yay</p>
                    </div>
                </div>

                <h2 className="featured">Our Best Demure Products</h2>
                <div className='product-list1'>
                    {/* Product 1 */}
                    <div className='product-card'>
                        <img src={bread} alt='Bread' />
                        <div className='product-info'>
                            <h3>Bread</h3>
                            <p>Rp 15.000</p>
                            <button onClick={() => setDetailProduct(product)}>Add to Cart</button>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className='product-card'>
                        <img src={cake} alt='Cakes' />
                        <div className='product-info'>
                            <h3>Cake</h3>
                            <p>Rp 40.000</p>
                            <button onClick={() => setDetailProduct(product)}>Add to Cart</button>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className='product-card'>
                        <img src={cupcake} alt='Cupcakes' />
                        <div className='product-info'>
                            <h3>Cupcake</h3>
                            <p>Rp 10.000</p>
                            <button onClick={() => setDetailProduct(product)}>Add to Cart</button>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className='product-card'>
                        <img src={pie} alt='Tart Pie' />
                        <div className='product-info'>
                            <h3>Tart Pie</h3>
                            <p>Rp 20.000</p>
                            <button onClick={() => setDetailProduct(product)}>Add to Cart</button>
                        </div>
                    </div>
                </div>

                <h2 className="featured">Our Best Cutesy Products</h2>
                <div className='product-list2'>
                    {/* Product 5 */}
                    <div className='product-card'>
                        <img src={cookies} alt='Cookies' />
                        <div className='product-info'>
                            <h3>Cookies</h3>
                            <p>Rp 10.000</p>
                            <button onClick={() => setDetailProduct(product)}>Add to Cart</button>
                        </div>
                    </div>

                    {/* Product 6 */}
                    <div className='product-card'>
                        <img src={donat} alt='Doughnuts' />
                        <div className='product-info'>
                            <h3>Doughnuts</h3>
                            <p>Rp. 7.000</p>
                            <button onClick={() => setDetailProduct(product)}>Add to Cart</button>
                        </div>
                    </div>

                    {/* Product 7 */}
                    <div className='product-card'>
                        <img src={bagel} alt='Bagels' />
                        <div className='product-info'>
                            <h3>Bagels</h3>
                            <p>Rp 8.000</p>
                            <button onClick={() => setDetailProduct(product)}>Add to Cart</button>
                        </div>
                    </div>

                    {/* Product 8 */}
                    <div className='product-card'>
                        <img src={tartpie} alt='Pie' />
                        <div className='product-info'>
                            <h3>Pie</h3>
                            <p>Rp 25.000</p>
                            <button onClick={() => setDetailProduct(product)}>Add to Cart</button>
                        </div>
                    </div>
                </div>

                <footer className='footer'>
                    <p>&copy; 2024 Dough. All rights reserved.</p>
                    <div className='social-media'>
                        <a href='#'>Facebook</a> <a href='#'>Twitter</a> <a href='#'>Instagram</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default HomePage;