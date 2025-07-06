import React from 'react'
import UberBg from '../assets/Uber.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div style={{ backgroundImage: `url(${UberBg})` }} 
        className="bg-cover bg-center h-screen pt-5 w-full bg-red-400 flex justify-between flex-col">
            <img className="w-16 ml-8" alt='Uber logo' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />
            <div className="bg-white py-5 px-4 pb-8">
                <h2 className='text-3xl font-bold '>Welcome to Uber</h2>
                <Link to="/user-login" className="w-full flex justify-center bg-black text-white py-3 px-5 mt-5 rounded-lg">
                    Get Started
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home