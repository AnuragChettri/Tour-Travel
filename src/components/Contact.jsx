import React from 'react';
import GoTop from './GoTop';

const Contact = ()=>{
    
    return(
        <div className="pt-[66px] pb-44 border-b-[1px] border-gray-300 bg-gray-300">
            <div className="w-full h-[400px] flex justify-center items-center bg-[url(lake.jpg)] brightness-90 bg-cover">
                <div className="w-[95%] sm:w-[60%] text-yellow-500">
                <h1 className="text-xl text-center font-bold">Get in Touch With Us</h1>
                <h1 className="text-5xl text-center font-bold"> CONTACT US</h1>
                <hr className="my-6 border-[2px] border-yellow-500" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Molestias error autem laborum quia ducimus. Voluptates maiores nemo dolorum veritatis! Nostrum
                    aperiam iure eligendi quasi explicabo itaque architecto. Omnis, ut. Possimus.
                </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex sm:flex-row w-[80%] m-auto justify-around items-center mt-12 py-6 bg-white">
                <div className="flex flex-col items-center">
                    <img src="/location-icon.jpg" className="h-[30px] w-[30px]"/>
                    <p className="font-medium text-yellow-600 text-lg">Phone no</p>
                    <p className="font-light">91+ 9876543212</p>
                </div>
                <div className="pt-8 sm:pt-0 flex flex-col items-center">
                    <img src="/location-icon.jpg" className="h-[30px] w-[30px]"/>
                    <p className="font-medium text-yellow-600 text-lg">Address</p>
                    <p className="font-light">Gangtok, Sikkim</p>
                </div>
                <div className="pt-8 sm:pt-0 flex flex-col items-center">
                    <img src="/location-icon.jpg" className="h-[30px] w-[30px]"/>
                    <p className="font-medium text-yellow-600 text-lg">E-mail</p>
                    <p className="font-light">demotech@gmail.com</p>
                </div>
            </div>
        <GoTop/>
        </div>
    )
}

export default Contact;