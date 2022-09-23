import React from 'react'
import Link from 'next/link';

const Canceled = () => {
  return (
    <div className="canceledPage">
        <h1>The process of your order has been cancelled.</h1>
        <Link href="/">
            <button
            type="button"
            className="btn"
            >
                Continue Shopping
            </button>
        </Link>
    </div>
  )
}

export default Canceled