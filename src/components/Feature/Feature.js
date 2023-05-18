import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
  return (
    <div className='flex items-center sm:ms-20 md:ms-22 lg:ms-16'>
      <div>
      <CheckBadgeIcon className="h-5 w-5 text-green-300" />
      </div>
      <p className='ms-2 text-white text-xl'>{feature}</p>
    </div>
  );
};

export default Feature;