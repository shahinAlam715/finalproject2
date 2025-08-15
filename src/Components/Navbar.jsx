import React, { useEffect, useRef, useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { FaBarsStaggered } from 'react-icons/fa6'
import Container from './Container'
import { TiArrowSortedDown } from 'react-icons/ti'
import cart from "../assets/cart.png"
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {

    let [info, setinfo] = useState(false)
    let [info1, setinfo1] = useState(false)
    let [info2, setinfo2] = useState(false)

    let amiRef = useRef()
    let ami1Ref = useRef()
    let ami2Ref = useRef()



    useEffect(() => {

        document.addEventListener("click", (e) => {

            if (amiRef.current.contains(e.target)) {
                setinfo(!info)
            } else {
                setinfo(false)
            }

            if (ami1Ref.current.contains(e.target)) {
                setinfo1(!info1)
            } else {
                setinfo1(false)
            }

             if (ami2Ref.current.contains(e.target)) {
                setinfo2(!info2)
            } else {
                setinfo2(false)
            }

        })

    }, [info, info1, info2])


    return (
        <section className='bg-[#F5F5F3] py-4'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-1/4 relative">
                        <div className="flex gap-x-2 items-center" ref={amiRef}>
                            <FaBarsStaggered className='text-[20px]' />
                            <h2 className='font-dm text-[14px] text-[#262626]'>Shop by Category</h2>

                            {info &&

                                <div className="bg-[#262626] py-3 px-5 w-[263px] absolute top-[53px] left-0 z-2 group">
                                    <ul>
                                        <li className='py-2'><a className='font-dm text-[14px] text-[#FFFFFFB2]
                                 hover:text-[#fff] hover:pl-6 hover:ease-in-out ' href="#">Accesories</a></li>
                                        <li className='py-2'><a className='font-dm text-[14px] text-[#FFFFFFB2] hover:text-[#fff]
                                   hover:pl-6 hover:ease-in-out ' href="#">Furniture</a></li>
                                        <li className='py-2'><a className='font-dm text-[14px] text-[#FFFFFFB2]
                                 hover:text-[#fff] hover:pl-6 hover:ease-in-out ' href="#">Electronics</a></li>
                                        <li className='py-2'><a className='font-dm text-[14px] text-[#FFFFFFB2] hover:text-[#fff]
                                   hover:pl-6 hover:ease-in-out ' href="#">Clothes</a></li>
                                        <li className='py-2'><a className='font-dm text-[14px] text-[#FFFFFFB2]
                                 hover:text-[#fff] hover:pl-6 hover:ease-in-out ' href="#">Bags</a></li>
                                        <li className='py-2'><a className='font-dm text-[14px] text-[#FFFFFFB2] hover:text-[#fff]
                                   hover:pl-6 hover:ease-in-out ' href="#">Home appliances</a></li>
                                    </ul>
                                </div>

                            }

                        </div>
                    </div>


                    <div className="w-2/4">
                        <div className="relative">
                            <div className="">
                                <input className='w-full h-[50px] rounded-full bg-[#fff] px-4' type="text" placeholder='Search Products' />
                            </div>
                            <div className="absolute top-[50%] right-5 translate-y-[-50%]">
                                <FaSearch className='text-[20px]' />
                            </div>
                        </div>
                    </div>


                    <div className="w-1/4">
                        <div className="flex justify-end gap-x-8">
                            <div className="flex relative" ref={ami1Ref}>
                                <FaUser className='text-[20px]' />
                                <TiArrowSortedDown className='text-[20px]' />

                                {info1 &&
                                    <div className="absolute top-[53px] left-[-100px] z-2">
                                        <button className='w-[200px] h-[50px] font-dm text-[14px] bg-[#262626] text-[#fff] hover:bg-[#fff] hover:text-[#262626] hover:ease-in-out'>My Account</button>
                                        <button className='w-[200px] h-[50px] font-dm text-[14px] bg-[#262626] text-[#fff] hover:bg-[#fff] hover:text-[#262626] hover:ease-in-out'>Log Out</button>
                                    </div>
                                }

                            </div>

                            <div className="relative" ref={ami2Ref}>
                                <FaShoppingCart className='text-[20px]' />

                                { info2 && 
                                
                                <div className="">
                                    <div className="absolute z-[2] top-[51px] left-[-280px] border-1 border-[rgba(38,38,38,0.25)]">
                                        <div className="flex  bg-[#F5F5F3] py-2 px-2 w-[400px]">
                                            <div className="w-1/4">
                                                <div className="">
                                                    <img className='h-[80px] w-[80px]' src={cart} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-2/4">
                                                <div className="mx-auto">
                                                    <h2 className='font-laki text-[14px] font-bold text-[#262626] text-center mt-3'>Black Smart Watch</h2>
                                                    <h3 className='font-laki text-[14px] font-bold text-[#262626] ml-[19%] mt-2'>$44.00</h3>
                                                </div>
                                            </div>
                                            <div className="w-1/4">
                                                <div className="ml-[50px] mt-[50%] translate-y-[-50%]">
                                                    <RxCross2 className='text-[24px]' />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="py-2 px-2 w-[400px] bg-[#fff]">
                                            <div className="">
                                                <h2 className='font-laki pl-2 text-[14px] font-bold text-[#262626] mt-3'>Subtotal: $44.00</h2>
                                            </div>

                                            <div className="flex justify-between">
                                                <button className='border-1 h-[50px] mt-4 w-[148px] border-[#262626] my-2
                                                                             mx-2 bg-[#262626] text-[#fff] hover:bg-[#fff] hover:text-[#262626] duration-300
                                                                              ease-in-out'>View Cart</button>

                                                <button className='border-1 h-[50px] mt-4 w-[148px] border-[#262626] my-2
                                                                             mx-2 bg-[#262626] text-[#fff] hover:bg-[#fff] hover:text-[#262626] duration-300
                                                                              ease-in-out'>Checkout</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                }



                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar