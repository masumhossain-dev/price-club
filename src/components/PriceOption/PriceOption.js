import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = (props) => {
  const {features, name, price} = props.data;
  return (
    <div className='bg-indigo-300 m-3 rounded-md p-3'>
      <div>
        <h3 className='text-6xl text-white font-bold'>
          {price}
        <span className='text-2xl font-medium'>/mon</span>
        </h3>
        <p className='text-2xl'>{name}</p>
      </div>
      <div className='mt-5'>
      {
        features.map((feature, idx)=><Feature key={idx} feature={feature}></Feature>)
      }
      </div>
      <button className='bg-green-300 px-4 py-2 text-xl font-bold my-5 rounded-md hover:bg-slate-500 hover:text-white transition duration-300'>Buy Now</button>
      
    </div>
  );
};

export default PriceOption;