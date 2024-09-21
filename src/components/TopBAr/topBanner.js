import React from 'react';

import CountdownTimer from './CountdownTimer';


function TopBanner() {

  return (

    <header className="flex flex-wrap flex-col justify-center items-center px-16 py-3.5 tracking-tight text-white bg-purple-800 max-md:px-5 mr-4">

      <div className="flex justify-center flex-wrap gap-10 max-w-full w-[969px]">

        <p className="text-xs font-semibold text-center text-wrap ">

          FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.

        </p>

        <div className="flex justify-center flex-1 gap-4 self-start">

          <p className="grow my-auto text-xs font-medium">

            Until the end of the sale:

          </p>

          <CountdownTimer />

        </div>

      </div>

    </header>

  );

}


export default TopBanner;
