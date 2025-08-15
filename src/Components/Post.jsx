import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({allPage}) => {
  return (
   <>
        <div className="flex flex-wrap justify-between">

                 {allPage.map((item)=>(
                    <div className="w-[32%]">
                    <div className="">
                        <Link>
                            <img className='w-[300px] h-full' src={item.thumbnail} alt="" />
                        </Link>
                    </div>
                        <div className="">
                            <h2>{item.title}</h2>
                            <h1>${item.price}</h1>
                        </div>
                </div>
                ))}

               </div>
   </>
  )
}

export default Post