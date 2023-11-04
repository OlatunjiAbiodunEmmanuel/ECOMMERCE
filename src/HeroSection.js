import React from 'react'
import img1 from './gallery/banner-illustration-e-commerce-icon-set-e-commerce-background-icon-illustration-banner-209696030.webp'
import img2 from './gallery/shopping-cart-card-icon-discounts_116441-26066.avif'
import img3 from './gallery/why-ecommerce-need-mobile-apps.jpg'

const HeroSection = () => {
    let imgStyle={
        height:'90vh'
    }


  return (
    <div className='containe-fluid mb-2'>
        
    <div id="carouselExampleIndicators" class="carousel slide">    
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img3} style={imgStyle} class="d-block w-100" alt="..."/>

    </div>
    <div class="carousel-item">
      <img src={img2} style={imgStyle} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img1} style={imgStyle} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default HeroSection