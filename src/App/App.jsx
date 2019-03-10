import React from 'react';
import {
  body, header, footer, banner, main, productGallery, aside, socialButtons,
} from './App.css';

const App = () => (
  <div className={body}>
    <header className={header}>
      <img src="https://s3-us-west-1.amazonaws.com/amazon-product-carousel-images/filler/header.png" alt="amazon header" className={banner} />
    </header>
    <div className={main}>
      <div id="product-gallery-summary" className={productGallery} />
      <aside className={aside}>
        <img src="https://s3-us-west-1.amazonaws.com/amazon-product-carousel-images/filler/social-buttons.png" alt="social buttons" className={socialButtons} />
        <div id="sidebar" />
      </aside>
    </div>
    <div id="carousel" />
    <div id="reviews" />
    <footer className={footer}>
      <img className={banner} src="https://s3-us-west-1.amazonaws.com/amazon-product-carousel-images/filler/footer.png" alt="page footer" />
    </footer>
  </div>
);

export default App;
