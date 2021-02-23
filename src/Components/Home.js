import React from 'react';
import '../App.css';


function Home(props) {
    console.log("props ", props)
    return (
        <div>

            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.macrumors.com/article-new/2017/09/iphonexdesign-800x669.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                </span>
                    <span>
                        Price: $1000.00
                </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler({ price: 1000, name: "i-phone 12" })}
                    >
                        Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
