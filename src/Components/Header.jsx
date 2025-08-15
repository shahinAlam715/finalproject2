import React from 'react'
import Container from './Container'
import n1 from "../assets/n1.png"

const Header = () => {
  return (

    <>
   <section className='py-4'>
        <Container>
                <div className="flex">
                    <div className="">
                        <img src={n1} alt="" />
                    </div>
                    <div className="mx-auto">
                        <ul className='flex gap-5'>
                            <li><a className='font-dm text-[14px] text-[#767676]
                             hover:text-[#262626] hover:font-bold' href="#">Home</a></li>
                              <li><a className='font-dm text-[14px] text-[#767676]
                             hover:text-[#262626] hover:font-bold' href="#">Shop</a></li>
                              <li><a className='font-dm text-[14px] text-[#767676]
                             hover:text-[#262626] hover:font-bold' href="#">About</a></li>
                              <li><a className='font-dm text-[14px] text-[#767676]
                             hover:text-[#262626] hover:font-bold' href="#">Contacts</a></li>
                              <li><a className='font-dm text-[14px] text-[#767676]
                             hover:text-[#262626] hover:font-bold' href="#">Journal</a></li>

                        </ul>
                    </div>
                </div>
        </Container>
   </section>
    </>
  )
}

export default Header