import React from 'react';
import {useParams} from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {destinationListData} from '../utils/constant.jsx';
import {corousalBg} from "../utils/corousalBg.jsx"; 
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import GoTop from './GoTop.jsx';
// import "./App.css";

const PlaceInfo = ()=>{

    const [filterValue,setFilterValue] = React.useState("overview");


    const {id} = useParams();

    const place = destinationListData.find((value,index)=>{
        return value.id == Number(id);
    })

    const handleFilter = (newFilterValue)=>{
        setFilterValue(newFilterValue);
    }

    console.log(filterValue);

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow/>
    };

    return(
        <div className="mt-[65px] mb-10 pb-20 overflow-hidden bg-gray-200">
            <div className="sm:h-[500px] overflow-hidden relative sm:w-[80%] m-auto">
            <Slider {...settings}>
            <div>
                <img src={`/${place.img}`} className=""/>
            </div>
            <div>
                <img src="/lake.jpg" className="brightness-90"/>
            </div>
            </Slider>
            {/* <div className="absolute bg-red-500 top-[50%] sm:top-[50%] sm:left-[35%]"> */}
            <div className="absolute bg-black/30 top-0 bottom-0 left-0 right-0 flex justify-center items-center">
                <div>
                <h1 className="text-6xl text-white font-extrabold">{place.placeName} Tour </h1>
                <div className="flex justify-center items-center text-white text-2xl pt-2">
                <img src="/location-icon.jpg" className="h-[20px]" />
                {/* <span className="px-2 font-medium">Address: </span> */}
                <p className="pl-2">{place.placeName}, Sikkim </p>
                </div>
                </div>
            </div>
            </div>
            <div className="w-[90%] sm:w-[80%] m-auto sm:flex sm:justify-between mt-10 font-medium bg-white p-4 rounded-lg">
                <div className="flex items-center sm:block">
                    <p>Price</p>
                    <p className="pl-5 sm:pl-0 sm:pt-2 text-yellow-500">From : ₹{place.price}</p>
                </div>
                <div className="my-3 sm:my-0 flex items-center sm:block">
                    <p>Duration</p>
                    <p className="pl-5 sm:pl-0 sm:pt-2 text-yellow-500"> {place.duration} days</p>
                </div>
                <div className="flex items-center sm:block">
                    <p>Difficulty Level</p>
                    <p className="pl-5 sm:pl-0 sm:pt-2 text-yellow-500">{place.difficultyLevel}</p>
                </div>
                <div className="mt-3 sm:mt-0 flex items-center sm:block">
                    <p>Peoples</p>
                    <p className="pl-5 sm:pl-0 sm:pt-2 text-yellow-500"> 2 - 5 </p>
                </div>
            </div>
            <div className="mt-14 w-[95%] sm:w-[80%] m-auto flex">
                <div className="">
                    <button className=" px-5 py-2 font-medium cursor-pointer"
                    onClick={()=>{handleFilter("overview")}}
                    style={{
                        backgroundColor: filterValue == "overview"? "white" : "",
                        border: filterValue == "overview"? "1px solid white" : ""
                    }}
                    >
                        Overview
                    </button>
                </div>
                <div className="font-medium">
                    <button className="px-5 py-2 cursor-pointer"
                    onClick={()=>{handleFilter("itenary")}}
                    style ={{
                        backgroundColor: filterValue == "itenary"? "white" : "",
                        border: filterValue == "itenary"? "1px solid white": ""
                    }}
                    >
                        Itenary
                    </button>
                </div>
                <div className="font-medium">
                    <button className="px-4 py-2 cursor-pointer"
                    onClick={()=>{handleFilter("reviews")}}
                    style ={{
                        backgroundColor: filterValue == "reviews"? "white" : "",
                        border: filterValue == "reviews"? "1px solid white": ""
                    }}
                    >
                        Reviews
                    </button>
                </div>
            </div>
            <div className="w-[95%] sm:w-[80%] m-auto p-6 bg-white">
                <h1 className="text-2xl font-bold text-yellow-500">
                    {filterValue == "overview" && "Tour Overview" }
                    {filterValue == "itenary" && "Tour Itenary" }
                    {filterValue == "reviews" && "Guests Reviews" }
                </h1>
                <div>
                {
                filterValue == "overview" && 
                <div>
                <p className="text-gray-700 pt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, ducimus! Ex, necessitatibus suscipit id sunt dicta odit. Quo reprehenderit et recusandae necessitatibus corporis cumque architecto, dolor tempora officia perspiciatis nisi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum unde rerum dignissimos necessitatibus ducimus cupiditate, officia earum pariatur totam nobis quidem ipsam quo nemo quam eligendi, velit debitis nulla?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquam adipisci quo commodi error deleniti eveniet nesciunt voluptatem quis? Dolore obcaecati ullam atque consectetur id? Iste at et omnis consequatur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iste deleniti molestiae itaque fuga, voluptate nisi atque cum culpa consequuntur ducimus libero consectetur tempora laboriosam quas laborum voluptatem quod cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum harum odit voluptate voluptas sequi eaque, fugit veniam totam eius ea dignissimos. Magni numquam omnis veritatis officia obcaecati nemo eligendi dolorum.
                </p>
                <p className="text-gray-700 pt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, ducimus! Ex, necessitatibus suscipit id sunt dicta odit. Quo reprehenderit et recusandae necessitatibus corporis cumque architecto, dolor tempora officia perspiciatis nisi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum unde rerum dignissimos necessitatibus ducimus cupiditate, officia earum pariatur totam nobis quidem ipsam quo nemo quam eligendi, velit debitis nulla?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquam adipisci quo commodi error deleniti eveniet nesciunt voluptatem quis? Dolore obcaecati ullam atque consectetur id? Iste at et omnis consequatur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iste deleniti molestiae itaque fuga, voluptate nisi atque cum culpa consequuntur ducimus libero consectetur tempora laboriosam quas laborum voluptatem quod cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum harum odit voluptate voluptas sequi eaque, fugit veniam totam eius ea dignissimos. Magni numquam omnis veritatis officia obcaecati nemo eligendi dolorum.
                </p>
                <p className="text-gray-700 pt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, ducimus! Ex, necessitatibus suscipit id sunt dicta odit. Quo reprehenderit et recusandae necessitatibus corporis cumque architecto, dolor tempora officia perspiciatis nisi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum unde rerum dignissimos necessitatibus ducimus cupiditate, officia earum pariatur totam nobis quidem ipsam quo nemo quam eligendi, velit debitis nulla?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquam adipisci quo commodi error deleniti eveniet nesciunt voluptatem quis? Dolore obcaecati ullam atque consectetur id? Iste at et omnis consequatur.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iste deleniti molestiae itaque fuga, voluptate nisi atque cum culpa consequuntur ducimus libero consectetur tempora laboriosam quas laborum voluptatem quod cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum harum odit voluptate voluptas sequi eaque, fugit veniam totam eius ea dignissimos. Magni numquam omnis veritatis officia obcaecati nemo eligendi dolorum.
                </p>
                </div>
                }   

                {
                    filterValue == "itenary" && 
                    <div className='pt-4'>
                        <p className="pt-3"><span className="font-bold sm:wr-6">Day 1: </span> This is a first day tour plan design by our experts. Good Luck</p>
                        <p className="pt-3"><span className="font-bold sm:wr-6">Day 2: </span> This is a first day tour plan design by our experts. Good Luck</p>
                        <p className="pt-3"><span className="font-bold sm:wr-6">Day 3: </span> This is a first day tour plan design by our experts. Good Luck</p>
                        <p className="pt-3"><span className="font-bold sm:wr-6">Day 4: </span> This is a first day tour plan design by our experts. Good Luck</p>
                        <p className="pt-3"><span className="font-bold sm:wr-6">Day 5: </span> This is a first day tour plan design by our experts. Good Luck</p>

                    </div>
                }

                {
                    filterValue == "reviews" && 
                    <div className="pt-6">
                        <p> <span className='font-bold'>No Reviews Yet!</span> but hey who needs review its an amazing website with 
                            with essential information related to tour and travel along with cool animation
                            . Indeed 10/10
                        </p>
                    </div>
                }
            </div>
            <GoTop/>
        </div>
        </div>
    )
}

export default PlaceInfo;