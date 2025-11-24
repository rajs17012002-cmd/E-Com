import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

const Contact = () => {

  



  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col">
      <Header />

      <div className="flex justify-center items-center flex-grow py-10">
        <div className="bg-amber-300 p-10 rounded-3xl shadow-2xl w-[90%] max-w-[500px]">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-white">CONTACT US</h1>

          <form className="space-y-6">
           
            <div>
              <label className="block text-2xl font-semibold text-white mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-300"
                placeholder="Enter your name"
              />
            </div>

            
            <div>
              <label className="block text-2xl font-semibold text-white mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-300"
                placeholder="Enter your email"
              />
            </div>

            
            <div>
              <label className="block text-2xl font-semibold text-white mb-2">Address</label>
              <input
                type="text"
                className="w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-300"
                placeholder="Enter your address"
              />
            </div>

            
            <div>
              <label className="block text-2xl font-semibold text-white mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 bg-black text-amber-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-300"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-black text-amber-400 font-semibold px-8 py-3 rounded-2xl hover:bg-gray-900 hover:text-amber-300 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
