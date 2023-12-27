import React from 'react'
import "./Hero.css"
import Image from 'next/image'
import img1 from '../../../public/images/products/braided-leather-belt-1.jpg'
import img2 from '../../../public/images/products/canvas-tote-bag-1.jpg'
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Product Catalog</h1>
        <p>Discover a wide range of high-quality products at affordable prices.</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
     <div className='hero_img'>
      <Image src={img1} objectFit='cover' alt='Product'/>
      <Image src={img2} objectFit='cover' alt='Product'/>
     </div>

    </section>
  )
}

export default Hero