import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        <div>
            <h3>{heroBanner.midText}</h3>
            <p className="hero-banner-product">{heroBanner.smallText}</p>
            <h1>{heroBanner.largeText1}</h1>
        </div>
        <img src={urlFor(heroBanner.image)} alt="image" className="hero-banner-image"/>

        <div>
            <Link href={`/product/${heroBanner.product}`}>
                <button type="button">{heroBanner.buttonText}</button>
            </Link>
            <div className="desc">
                <h5>Description</h5>
                <p>{heroBanner.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner