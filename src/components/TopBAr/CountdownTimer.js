import React from 'react';


function CountdownTimer() {

  const timeUnits = [

    { value: 63, unit: 'days' },

    { value: 9, unit: 'hours' },

    { value: 50, unit: 'minutes' },

    { value: 50, unit: 'sec.' }

  ];


  return (

    <div className="flex gap-1.5 text-lg font-bold whitespace-nowrap">

      {timeUnits.map(({ value, unit }, index) => (

        <React.Fragment key={unit}>

          <div className="grow">{value.toString().padStart(2, '0')}</div>

          <div className="my-auto text-xs">{unit}</div>

        </React.Fragment>

      ))}

    </div>

  );

}


export default CountdownTimer;