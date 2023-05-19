import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from 'recharts';

const PhonePrice = () => {
  const [phones, setPhones] = useState([]);
  useEffect(()=>{
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
      const phones = data.data.data;
      const phoneData = phones.map(phone=>{
        const parts = phone.slug.split('-');
        const price = parseInt(parts[1]);
        const singlePhone = {
          name: phone.phone_name,
          price: price
        }
        return singlePhone;
      })
      setPhones(phoneData);
    })
  },[])
  return (
    <div>
        <BarChart width={1920} height={300} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <Tooltip></Tooltip>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Legend></Legend>
        </BarChart>
    </div>
  );
};

export default PhonePrice;