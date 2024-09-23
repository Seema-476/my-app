import React from 'react'
import natureImg from '../../assets/images/webp/nature.webp'
const Hero = () => {
  return (
    <div>
          <div>
              <h2 className="text-blue-400 text-[35px] text-center font-semibold pt-10">Hello World</h2>
              <img src={natureImg} alt="nature" className='max-w-[600px] mx-auto pt-10' />
          </div>
    </div>
  )
}

export default Hero
