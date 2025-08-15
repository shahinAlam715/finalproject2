import React from 'react'
import Container from './Container'
import sp1 from "../assets/sp1.png"
import sp2 from "../assets/sp2.png"
import sp3 from "../assets/sp3.png"
import sp4 from "../assets/sp4.png"
import arr9 from "../assets/arr9.png"

const Special = () => {
  return (
    <section className='my-[64px]'>
            <Container>
                        <div className="">
                            <img src={arr9} alt="" />
                        </div>

                <div className="py-[64px]">
                    <div className="py-[20px]">
                        <h1 className='font-laki font-bold text-[39px] text-[#262626]'>Special Offers</h1>
                    </div>
                    <div className="flex justify-between">
                        <img className='w-[300px] h-full' src={sp1} alt="" />
                        <img className='w-[300px] h-full' src={sp2} alt="" />
                        <img className='w-[300px] h-full' src={sp3} alt="" />
                        <img className='w-[300px] h-full' src={sp4} alt="" />
                    </div>
                </div>
            </Container>
        </section>
  )
}

export default Special