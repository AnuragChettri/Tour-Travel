import React from 'react';
import GoTop from './GoTop';

const About = ()=>{
    return (
        <div className="h-[700px] pt-[150px]">
        <div className="bg-[url(/public/gurudongmar.jpg)] bg-cover bg-fixed h-[400px]">
          <div className="bg-white sm:w-[30%] h-[100%]">
          <h1>Project using vite</h1>
          <p>Lorem ipsumdolor sit amet consectetur adipisicing elit. Ipsum officiis, aspernatur commodi iste rerum eligendi laboriosam necessitatibus, nobis voluptas quibusdam 
            at dolorum, corrupti perferendis nam vel eos. Neque, aliquam beatae.</p>
            <p>Lorem ipsumdolor sit amet consectetur adipisicing elit. Ipsum officiis, aspernatur commodi iste rerum eligendi laboriosam necessitatibus, nobis voluptas quibusdam 
            at dolorum, corrupti perferendis nam vel eos. Neque, aliquam beatae.</p>
          </div>
        </div>
        <GoTop/>
        </div>
    )
}

export default About;