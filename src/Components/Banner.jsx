import React from 'react'
import ban1 from "../assets/ban1.png"
import tow from "../assets/tow.jpg"
import three from "../assets/three.jpg"
import Slider from 'react-slick'


const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translateY(-50%)",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    padding: "10px 0",
                    color: "blue",
                    borderRight: "2px #fff solid",
                    color: "transparent"
                }}
            >
                {i + 1}
            </div>
        )

    };


    return (
        <>
            <Slider {...settings}>



                <div className="">
                    <img className='w-full h-[550px]' src={ban1} alt="" />
                </div>

                <div className="">
                    <img className='w-full h-[550px]' src={tow} alt="" />
                </div>

                <div className="">
                    <img className='w-full h-[550px]' src={three} alt="" />
                </div>

                <div className="">
                    <img className='w-full h-[550px]' src={ban1} alt="" />
                </div>


            </Slider>
        </>
    )
}

export default Banner