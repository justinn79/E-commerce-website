import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

import { MdLocalShipping } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>JUNO</title>
      </Head>

      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>

      <footer>
        <div className="shippingDetails">
          <hr color="#83b1cf"></hr>
          <div className="shippingInfo">
            <div className="freeShipping">
              <MdLocalShipping size={40}/>
              <h3>
                Free Standard Shipping!
                <br></br>
                (5-10 Business Days)
              </h3>
            </div>
            <div className="fastShipping">
              <FaShippingFast size={40}/>
              <h3>
                Fast Shipping!
                <br></br>
                (1-3 Business Days)
              </h3>
            </div>
          </div>
        </div>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout