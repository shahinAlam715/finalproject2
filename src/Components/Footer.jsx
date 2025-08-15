import React from 'react'
import Container from './Container'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import n1 from "../assets/n1.png"

const Footer = () => {
  return (
    <section className='bg-[#F5F5F3] py-[64px]'>
        <Container>
            <div className="flex justify-between">
                <div className="w-1/7">
                    <div className="my-4">
                        <h2 className='font-laki font-bold text-[16px] text-[#262626]'>MENU</h2>
                    </div>
                    <div className="">
                        <ul>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Home</a></li>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Shop</a></li>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]'  href="#">About</a></li>
                            <li className='my-2' ><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Contact</a></li>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Journal</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-1/7">
                    <div className="my-4">
                        <h2 className='font-laki font-bold text-[16px] text-[#262626]'>SHOP</h2>
                    </div>
                    <div className="">
                        <ul>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Category 1</a></li>
                            <li className='my-2' ><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Category 2</a></li>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]'  href="#">Category 3</a></li>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Category 4</a></li>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Category 5</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-1/7">
                    <div className="my-4">
                        <h2 className='font-laki font-bold text-[16px] text-[#262626]'>HELP</h2>
                    </div>
                    <div className="">
                        <ul>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Privacy Policy</a></li>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Terms & Conditions</a></li>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]'  href="#">Special E-shop</a></li>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Shipping</a></li>
                            <li className='my-2'><a className='font-laki text-[14px] text-[#6D6D6D]' href="#">Secure Payments</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-2/7">
                        <div className="ml-[100px]">
                            <h2 className='font-laki font-bold text-[16px] text-[#262626] my-4' >(052) 611-5711</h2>
                            <h3 className='font-laki font-bold text-[14px] text-[#262626]'>company@domain.com</h3>
                            <p className='font-laki text-[14px] text-[#6D6D6D] my-2'>575 Crescent Ave. Quakertown, PA 18951</p>
                        </div>
                </div>
                <div className="w-2/7">
                   <div className="my-4 ml-[100px]">
                     <img className='h-[28px] w-[121px]' src={n1} alt="" />
                   </div>
                </div>
            </div>


            <div className="flex justify-between items-center mt-[50px]">
                <div className="flex gap-x-3">
                    <FaFacebookF  className='w-[16px] h-[16px]'/>
                    <FaLinkedinIn className='w-[16px] h-[16px]'/>
                    <RiInstagramFill className='w-[16px] h-[16px]'/>
                </div>
                <div className="">
                    <h3 className='font-laki text-[14px] text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h3>
                </div>
            </div>

        </Container>
    </section>
  )
}

export default Footer