import React, { useContext } from 'react'
import { ApiData } from './ContextApi';
import Container from './Container';
import arr5 from "../assets/arr5.png"
import arr6 from "../assets/arr6.png"
import arr7 from "../assets/arr7.png"
import arr8 from "../assets/arr8.png"

import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Product from '../pages/Product';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-[50%] right-[20px] bg-[red] h-[30px] w-[30px] rounded-full z-[2] text-[#fff] text-center text-[20px] leading-[30px]"
            onClick={onClick}
        >
            <IoIosArrowForward className='inline-block' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-[50%] left-[20px] bg-[red] h-[30px] w-[30px] rounded-full z-[2] text-[#fff] text-center text-[20px] leading-[30px]"
            onClick={onClick}
        >
            <IoIosArrowBack className='inline-block' />

        </div>
    );
}


const Newarrival = () => {

    let data = useContext(ApiData)
    console.log(data);


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <>
            <section className='py-4'>
                <Container>


                    <div className="py-5">
                        <h2 className='font-bold font-dm text-[39px] text-[#262626]'>New Arrivals</h2>
                    </div>


                    <Slider {...settings}>

                        {data.map((item) => (
                            <div className="">
                                <div className="">
                                    <Link to="/Product">
                                    <img src={item.thumbnail} alt="" />
                                    </Link>
                                </div>
                                <div className="">
                                    <h2>{item.title}</h2>
                                    <h3>{item.price}</h3>
                                </div>
                            </div>
                        ))}

                    </Slider>

                    <div className="flex justify-between py-[64px]">

                       
                        <div className="w-[24%] h-full">
                            <img src={arr5} alt="" />
                        </div>
                        <div className="w-[24%] h-full">
                            <img src={arr6} alt="" />
                        </div>
                        <div className="w-[24%] h-full">
                            <img src={arr7} alt="" />
                        </div>
                        <div className="w-[24%] h-full">
                            <img src={arr8} alt="" />
                        </div>

                    </div>

                </Container>
            </section>
        </>
    )
}

export default Newarrival



