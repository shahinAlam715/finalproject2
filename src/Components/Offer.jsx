import React from 'react'
import Container from './Container'
import Banbot1 from '../assets/banbot1.png'
import Banbot2 from '../assets/banbot2.png'
import Banbot3 from '../assets/banbot3.png'

const Offer = () => {
  return (
    <section className='py-[64px]'>
            <Container>
                <div className="flex justify-between">

                    <div className="w-2/4">
                        <div className="">
                            <img className='w-full h-[616px]' src={Banbot3} alt="" />
                        </div>
                    </div>

                    <div className="w-2/4">
                        <div className="">
                            <img className='w-full pl-4' src={Banbot1} alt="" />
                            <img className='w-full pl-4 mt-8' src={Banbot2} alt="" />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
  )
}

export default Offer