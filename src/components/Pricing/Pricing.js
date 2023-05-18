import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
  const pricingData = [
    {id: 0, name: 'Free', price: 0, features:[
      `It's Fully Free`,
      'Limited Facilities',
      'Only for One Month',
      'One chance per account',
      'For our Advertisement'
    ]},
    {id: 1, name: 'Modarate', price: 9.99, features:[
      `It's for Middleclass`,
      'Less Limit Facilities',
      'For Half Year',
      'Renewable',
      'Its Commertial Package'
    ]},
    {id: 2, name: 'Premium', price: 19.99, features:[
      `It's for Large Companys`,
      'Full Facilities Allowed',
      'One Year Subscription',
      'Auto Renewable',
      'Full Commercial Package'
    ]},
  ]
  return (
    <div>
      <h1 className='text-4xl font-bold bg-orange-200 py-4 text-gray-800'>Best Deals for Today</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
      {
        pricingData.map(data=><PriceOption key={data.id} data={data}></PriceOption>)
      }
      </div>
    </div>
  );
};

export default Pricing;