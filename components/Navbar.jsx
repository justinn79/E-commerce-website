import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          JUNRO
        </Link>
      </p>

      <div className="navbar-options">
        <span className="options">
          <Link href="/">
            Home
          </Link>
        </span>

        <span className="options">
          <Link href="../aboutus">
            About Us
          </Link>
        </span>

        <span className="options">
          <Link href="../contact">
            Contact
          </Link>
        </span>
      </div>

      <button 
        type="button" 
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}

    </div>
  )
}

export default Navbar