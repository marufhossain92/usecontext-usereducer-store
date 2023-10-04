import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context-and-reducer/StoreContext'

const Navbar = () => {
  const {products} = useContext(StoreContext);

  return (
    <div className='flex flex-row justify-evenly text-lg font-medium p-3 text-white bg-slate-400 justify-items-center'>
        <Link to="/" className='hover:text-black'>Home</Link>
        <Link to="/basket" className='hover:text-black'>
          Basket
          <span className='bg-red-500 rounded-full text-xs align-top text-white px-2 py-1 mx-1'>{products.length}</span>
        </Link>
    </div>
  )
}

export default Navbar