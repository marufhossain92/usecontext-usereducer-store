import { storeData } from "../Data"
import Product from "../components/Product"

const Home = () => {
  return (
    <div>
        <h1 className='text-3xl font-semibold text-center mt-2 py-4'>useContext + useReducer Store</h1>
        
          <h2 className="text-2xl font-semibold tracking-wide py-4 pl-8">New In</h2>
          <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-3 px-8">
          {storeData.map((item) =>(
            <Product key={item.id} item={item} />
          ))}
        </div>
    </div>
  )
}

export default Home