
// import React, { useContext, useState, useRef, useEffect } from 'react';
// import Container from '../Components/Container';
// import { Link } from 'react-router-dom';
// import { IoIosArrowForward } from 'react-icons/io';
// import { IoGridSharp } from 'react-icons/io5';
// import { FaListAlt } from 'react-icons/fa';
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import { ApiData } from '../Components/ContextApi';
// import Post from '../Components/Post';
// import Pagination from '../Components/Pagination'; // ✅ Make sure this path is correct

// const Product = () => {
//   const data = useContext(ApiData);

//   const [perPage, setPerPage] = useState(6);
//   const [currentPage, setCurrentPage] = useState(1);

//   const lastPage = perPage * currentPage;
//   const firstPage = lastPage - perPage;
//   const allPage = data.slice(firstPage, lastPage);

//   const pageNumber = Array.from({ length: Math.ceil(data.length / perPage) }, (_, i) => i + 1);

//   // ✅ Manage dropdowns in a single object
//   const [dropdowns, setDropdowns] = useState({
//     category: false,
//     color: false,
//     brand: false,
//     price: false
//   });

//   const dropdownRefs = {
//     category: useRef(),
//     color: useRef(),
//     brand: useRef(),
//     price: useRef()
//   };

//   const toggleDropdown = (key) => {
//     setDropdowns((prev) => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       Object.keys(dropdowns).forEach((key) => {
//         if (dropdownRefs[key].current && dropdownRefs[key].current.contains(e.target)) {
//           // do nothing
//         } else {
//           setDropdowns((prev) => ({ ...prev, [key]: false }));
//         }
//       });
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <section>
//       <Container>
//         <div className="py-4">
//           <h1 className='text-[49px] font-bold font-dm py-5 text-[#262626]'>Products</h1>
//           <h3 className='flex items-center gap-x-2'>
//             <Link to="/" className='text-[20px]'>Home</Link>
//             <IoIosArrowForward className='text-[20px]' />
//             <Link to="/product" className='text-[20px]'>Products</Link>
//           </h3>
//         </div>

//         <div className="flex">
//           {/* Sidebar */}
//           <div className="w-1/4 px-2">

//             {/* Dropdown Generator */}
//             {["category", "color", "brand", "price"].map((type) => (
//               <div key={type}>
//                 <h2
//                   className='text-[20px] font-laki font-bold text-[#262626] pb-4 flex items-center justify-between cursor-pointer'
//                   ref={dropdownRefs[type]}
//                   onClick={() => toggleDropdown(type)}
//                 >
//                   {`Shop by ${type.charAt(0).toUpperCase() + type.slice(1)}`}
//                   <MdOutlineArrowDropDown className='text-[38px]' />
//                 </h2>

//                 {dropdowns[type] && (
//                   <ul className='py-4'>
//                     {[1, 2, 3, 4, 5].map((item) => (
//                       <React.Fragment key={item}>
//                         <li className='py-4'>
//                           <a href="#" className='text-[16px] font-dm text-[#262626]'>
//                             {type === "price" ? `$0.00 - $9.99` : `${type.charAt(0).toUpperCase() + type.slice(1)} ${item}`}
//                           </a>
//                         </li>
//                         <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
//                       </React.Fragment>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}

//           </div>

//           {/* Products */}
//           <div className="w-3/4 px-2">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex gap-2">
//                 <IoGridSharp className='text-[24px]' />
//                 <FaListAlt className='text-[24px]' />
//               </div>

//               <div className="flex items-center gap-x-2">
//                 <h2 className='text-[16px] font-laki text-[#262626]'>Show:</h2>
//                 <select
//                   className="border-2 font-laki text-[#262626] py-1 px-3"
//                   value={perPage}
//                   onChange={(e) => setPerPage(Number(e.target.value))}
//                 >
//                   <option value={6}>6</option>
//                   <option value={12}>12</option>
//                   <option value={24}>24</option>
//                 </select>
//               </div>
//             </div>

//             {/* Product Cards */}
//             <Post allPage={allPage} />

//             {/* Pagination */}
//             <Pagination pageNumber={pageNumber} setCurrentPage={setCurrentPage} currentPage={currentPage} />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Product;









import React from 'react'

import Container from '../Components/Container'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { IoGridSharp } from 'react-icons/io5'
import { FaListAlt } from 'react-icons/fa'
import { useContext } from 'react'
import { ApiData } from '../Components/ContextApi'
import { useState } from 'react'
import Post from '../Components/Post'
import Pagination from '../Components/Post'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useRef } from 'react'
import { useEffect } from 'react'



const Product = () => {

    let data = useContext(ApiData)

    let [Perpage, setPerpage] = useState(6)
    let [CurrentPage, setCurrentPage] = useState(1)
    let lastPage = Perpage * CurrentPage
    let firstPage = lastPage - Perpage

    let allPage = data.slice(firstPage, lastPage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil(data.length / Perpage); i++) {

        pageNumber.push(i)

    }
    
    let [abc, setabc] = useState(false)
    let [abc1, setabc1] = useState(false)
    let [abc2, setabc2] = useState(false)
    let [abc3, setabc3] = useState(false)
    

    let abcRef = useRef()
    let abc1Ref = useRef()
    let abc2Ref = useRef()
    let abc3Ref = useRef()
   

   useEffect(()=>{
     document.addEventListener("click", (e)=>{
       
        if(abcRef.current.contains(e.target)){
            setabc(!abc)
        }else{
            setabc(false)
        }

        if(abc1Ref.current.contains(e.target)){
            setabc1(!abc1)
        }else{
            setabc1(false)
        }

        if(abc2Ref.current.contains(e.target)){
            setabc2(!abc2)
        }else{
            setabc2(false)
        }


        if(abc3Ref.current.contains(e.target)){
            setabc3(!abc3)
        }else{
            setabc3(false)
        }

        
    })
   },[abc,abc1,abc2,abc3])

    return (
        <>

            <section>

                <Container>
                    <div className="py-4">
                        <h1 className='text-[49px] font-bold font-dm py-5 text-[#262626]'>Products</h1>
                        <h3 className='flex items-center gap-x-2'> <Link to="/" className='text-[20px]'>Home</Link> <IoIosArrowForward className='text-[20px]' /> <Link to="/product" className='text-[20px]'>Products</Link></h3>
                    </div>


                    <div className="flex">

                        <div className="w-1/4 px-2">
                            
                            <div className="">
                                 <h2 className='text-[20px] font-laki font-bold text-[#262626] pb-4 flex 
                                items-center justify-between' ref={abcRef}>Shop by Category <MdOutlineArrowDropDown  
                                className='text-[38px]'/></h2>
                               
                            {abc &&
                            
                                <ul className='py-4'>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Category 1</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Category 2</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Category 3</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Category 4</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Category 5</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    
                                </ul>
                            }
                            </div>


                            <div className="">
                                 <h2 className='text-[20px] font-laki font-bold text-[#262626] pb-4 flex 
                                items-center justify-between' ref={abc1Ref}>Shop by Color <MdOutlineArrowDropDown  
                                className='text-[38px]'/></h2>
                               
                            {abc1 &&
                            
                                <ul className='py-4'>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Category 1</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Category 2</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Category 3</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Category 4</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Category 5</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    
                                </ul>
                            }
                            </div>



                            <div className="">
                                 <h2 className='text-[20px] font-laki font-bold text-[#262626] pb-4 flex 
                                items-center justify-between' ref={abc2Ref}>Shop by Brand <MdOutlineArrowDropDown  
                                className='text-[38px]'/></h2>
                               
                            {abc2 &&
                            
                                <ul className='py-4'>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Brand 1</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Brand 2</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Brand 3</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Brand 4</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>Brand 5</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    
                                </ul>
                            }
                            </div>



                            <div className="">
                                 <h2 className='text-[20px] font-laki font-bold text-[#262626] pb-4 flex 
                                items-center justify-between' ref={abc3Ref}>Shop by Price <MdOutlineArrowDropDown  
                                className='text-[38px]'/></h2>
                               
                            {abc3 &&
                            
                                <ul className='py-4'>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>$0.00 - $9.99</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>$0.00 - $9.99</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>$0.00 - $9.99</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>$0.00 - $9.99</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    <li className='py-4'><a href="#" className='text-[16px] font-dm text-[#262626]'>$0.00 - $9.99</a></li>
                                    <div className="h-[1px] w-full bg-[#F0F0F0]"></div>
                                    
                                </ul>
                            }
                            </div>

                           
                                 
                        </div>


                        <div className="w-3/4 px-2">
                            <div className="">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <IoGridSharp className='text-[24px]' />
                                        <FaListAlt className='text-[24px]' />
                                    </div>

                                    <div className="flex text-end items-center gap-x-2">
                                        <div className="">
                                            <h2 className='text-[16px] font-laki text-[#262626]'>Show:</h2>
                                        </div>
                                        <div className="border-2 overflow-hidden font-laki text-[#262626] py-1 px-3">
                                            <label htmlFor="">
                                                <select name="" id="">
                                                    <option value="">10</option>
                                                    <option value="">10</option>
                                                    <option value="">10</option>
                                                    <option value="">10</option>
                                                    <option value="">10</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <Post allPage={allPage} />
                           <Pagination  pageNumber={pageNumber}/>

                        </div>
                    </div>

                </Container>

            </section>

        </>


    )
}

export default Product