import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

//products and bannerData are used as props from the data fetched from the
//getServerSideProps function below
const Home = ({ products, bannerData }) => (
      <div>
        <div className="storeTitle">
          <div className="title">
              <h1>JUNRO</h1>
          </div>
          <h3 className="storeDesc">Your one stop shop for finding gaming consoles!</h3>
      </div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className="products-heading">
        <h2>Our Products</h2>
        <p>Available Online and in Store!</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[1]}/>
    </div>
  );

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    // const salesQuery = '*[_type == ""]';
    // const saleProducts = await client.fetch(salesQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return{
      props: { products, bannerData }
    }
  }


export default Home;