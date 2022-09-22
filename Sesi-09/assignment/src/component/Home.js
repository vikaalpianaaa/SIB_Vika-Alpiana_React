import React from 'react';
import idea from '../img/home.png';
import arrow from '../img/Group1.png';
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  return (
    <main>
      <div className="max-w-7xl container mx-auto px-4 md:px-8 md:mt-4 mt-2">
        <div className="md:flex block blue-center text-white mb-14 md:mb-0">
          <div className="bg-purple bg-cover flex justify-center md:w-6/12 w-full">
            <img src={idea} alt="https://storyset.com/work" className="w-11/12" />  </div>
          <div className="flex items-center md:w-6/12 w-full order-first">
            <div className="w-2/12">
            </div>
            <div className="w-10/12">
              <h1 className=" text-nama font-light">
                Welcome My Portofolio!
                <span class="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h3 class="text-nama font-bold">I'm Vika Alpiana!</h3>
              <p className=" text-lg font-normal leading-relaxed opacity-60">
                I'm a student from dian nuswantoro University, focus on web developer and frontend
                developer.
              </p>
              <Link
                to="/overview"
                className="flex space-x-4 items-center my-10 hover:text-prl hover:opacity-70"
              >
                <p className=" font-semibold text-base leading-tight">Lets Connect</p>
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
