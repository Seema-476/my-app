import React from 'react'
import programingImg from '../../assets/images/png/programing_img.png'
import dot_circleImg from '../../assets/images/svg/dot_circle.svg'
const Hero = () => {
  return (
    <div>
      <div className='bg-black py-[110px]'>
        <div className='max-w-[1180px] mx-auto px-3'>
          <h2 className='font-bold text-[40px] leading-[44px] text-center text-red-700 pb-11'>The Perks of the Gravel Host Partner Program</h2>
          <p className='font-normal text-[18px] leading-[24.3px] text-center text-[#fcfcfc] max-w-[825px] mx-auto pb-[54px]'>The Perks of the Gravel Host Partner Program
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus facilisi donec
            egestas egestas pellentesque magna.</p>
          <div className='flex flex-row flex-wrap mx-[-12px]'>
            <div className="w-[50%] px-3">
              <img src={programingImg} alt="program" className='w-full max-w-[575px]' />
            </div>
            <div className='w-[50%] px-3 flex flex-col justify-center'>
              <div className='flex items-baseline'>
                <img src={dot_circleImg} alt="dot_circle" />
                <p className='font-normal text-[18px] leading-6 text-white ps-[10px]'>Generous affiliate payouts with increased commissions for
                  high-volume partners.</p>
              </div>
              <div className='flex items-baseline pt-[20px]'>
                <img src={dot_circleImg} alt="dot_circle" />
                <p className='font-normal text-[18px] leading-6 text-white ps-[10px]'>Discount code to share with your community.</p>
              </div>
              <div className='flex items-baseline pt-[20px]'>
                <img src={dot_circleImg} alt="dot_circle" />
                <p className='font-normal text-[18px] leading-6 text-white ps-[10px]'>Complimentary or heavily discounted services.</p>
              </div>
              <div className='flex items-baseline pt-[20px]'>
                <img src={dot_circleImg} alt="dot_circle" />
                <p className='font-normal text-[18px] leading-6 text-white ps-[10px]'>24/7/365 priority support on all of your services.</p>
              </div>
              <div className='flex items-baseline pt-[20px]'>
                <img src={dot_circleImg} alt="dot_circle" />
                <p className='font-normal text-[18px] leading-6 text-white ps-[10px]'>Designated and experienced partner management team to help you with advice, strategy, and marketing on your projects.</p>
              </div>
              <div className='flex items-baseline pt-[20px]'>
                <img src={dot_circleImg} alt="dot_circle" />
                <p className='font-normal text-[18px] leading-6 text-white ps-[10px]'>Gain access to partner-only events, such as talks from
                  industry leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
