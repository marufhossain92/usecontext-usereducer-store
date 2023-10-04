import React, { useContext } from 'react'
import { StoreContext } from '../context-and-reducer/StoreContext'
import BasketProduct from '../components/BasketProduct';

const Basket = () => {
  const {products, total} = useContext(StoreContext);

  return (
    <div className='w-full max-w-3xl mx-auto'>
      <h1 className='text-3xl text-center font-semibold pt-2 py-4'>Basket</h1>
      <div className='flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium'>
        <h3>Your Basket</h3>
        <p className='text-lg font-medium'>Price: ${total.toFixed(2)}</p>
      </div>
      {products.map(product =>
        <BasketProduct key={product.id} item={product} />
      )}
    </div>
  )
}

export default Basket