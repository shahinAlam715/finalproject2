import React, { useContext } from 'react'
import Container from './Container'
import { MdLocalShipping } from 'react-icons/md'
import { FaClockRotateLeft } from 'react-icons/fa6'


const Banbot = () => {
    
    
  return (
    <section>
            <Container className="py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <h1 className='text-[20px] font-bold text-[#262626]'>2</h1>
                            <h2 className='font-laki text-[16px] pl-2'>Two years warranty</h2>
                        </div>
                         <div className="flex items-center">
                           <MdLocalShipping  className='text-[24px]'/>
                            <h2 className='font-laki text-[16px] pl-2'>Free shipping</h2>
                        </div>
                         <div className="flex items-center">
                            <FaClockRotateLeft  className='text-[20px]'/>
                            <h2 className='font-laki text-[16px] pl-2'>Return policy in 30 days</h2>
                        </div>
                    </div>
                </Container>

                <div className="w-full h-[1px] bg-[#F0F0F0]"></div>
    </section>
    
  )
}

export default Banbot