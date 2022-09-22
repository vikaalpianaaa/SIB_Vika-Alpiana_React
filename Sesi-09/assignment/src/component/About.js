import React from 'react';
import hand from '../img/aboutme.png';

function About() {
  return (
    <main>
      <div className="container max-w-7xl mx-auto px-4 md:px-8 md:mt-10 mt-2 mb-16 md:mb-0">
        <div className="block md:flex">
          <div className="bg-pattern bg-cover flex justify-center md:w-7/12 w-full">
            <img src={hand} alt="https://storyset.com/work" className="w-11/12 h-auto md:w-full lg:w-9/12" />
          </div>
          <div className="w-full md:w-6/12 text-white order-first">
            <h1
              className="relative font-bold text-nama leading-snug mt-10 ml-5 xl:ml-0 duration-300 ease-linear
                            before:duration-300 
                            before:ease-linear
                            before:content-['About'] 
                            before:absolute 
                            before:text-7xl
                            lg:before:text-8xl 
                            before:-z-10
                            before:-left-8
                            before:top-2/4
                            before:-translate-y-2/4
                            before:text-gray-400
                            before:opacity-10
            "
            >
              About Me
            </h1>
            <p className=" font-normal text-lg leading-relaxed opacity-60 mt-16">
            My name is Vika Alpiana, I'm from Grobogan, Central Java. I am a Semester 5 Student of the Informatics Engineering Study Program at Dian Nuswantoro University Semarang batch 2020 Active in campus organizations, I have the ability to learn quickly, adapt easily, to a new environment, communicative and able to solve problems creatively. I have an interest in the field of informatics and technology so I want to look for opportunities to develop skills in these fields
            </p>
    
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
