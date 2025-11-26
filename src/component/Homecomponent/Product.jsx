import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Globalstate } from '../../App';

const Product = () => {
  const [user, setUser] = useState([])

  
  const val = useContext(Globalstate)
  const { cart, setCart } = val

  useEffect(() => {
    const getData = async () => {
      try {
        const dt = await axios.get('https://fakestoreapi.com/products')
        setUser(dt.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getData()
  }, [])

  
  const add = (pro) => {
   
    const already = cart.find((item) => item.id === pro.id)
    if (already) {
      alert('🛒 Already added to cart!')
      return
    }
    setCart((cur) => [...cur, pro])
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-yellow-50 min-h-screen">
      {user.map((cur) => (
        <div
          key={cur.id}
          className="bg-white rounded-2xl shadow-lg p-4 w-72 hover:shadow-2xl transition-all duration-300"
        >
          <img
            src={cur.image}
            alt={cur.title}
            className="h-48 w-full object-contain mb-4"
          />
          <h2 className="font-bold text-lg mb-2 text-gray-800">{cur.title}</h2>
          <h3 className="text-amber-600 font-semibold mb-2">${cur.price.toFixed(2)}</h3>
          <p className="text-sm text-gray-600 mb-3">
            {cur.description.slice(0, 100)}...
          </p>
          <div className="flex justify-center">
            <button
              className="bg-amber-500 text-white font-semibold px-4 py-2 rounded-2xl hover:bg-amber-600 transition-all duration-300"
              onClick={() => add(cur)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
