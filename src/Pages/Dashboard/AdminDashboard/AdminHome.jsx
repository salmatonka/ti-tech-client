import React, { useContext } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'
import { MdOutlineDashboard } from "react-icons/md";
import DashboardNav from '../DashboardHome/DashboardNav';
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const AdminHome = () => {
  const { user } = useContext(AuthContext)

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axios.get('https://ti-server-585b.onrender.com/admin-stats');
      return res.data;
    }
  });


  // const getData = async () => {
  //   try {
  //     const res = await fetch('http://localhost:5000/admin-stats')
  //     if (!res?.ok) throw new Error('Network error')
  //     const data = await res.json()
  //     console.log(data)
  //   } 
  //   catch (error) {
  //     console.error('Fetch Data', error?.message)
  //   }
  // }
  // getData()  ...ata map korte hy useEffect mot



const data = [
  {
    name: 'Processor',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'SSD',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Accessories',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'RAM',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Gaming',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Router',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  }
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


  return (
    <div className=' '>
      {/* <h2 className="py-3 text-2xl font-semibold flex justify-center items-center">
        <span>
          Hi' Welcome to  { user?.displayName ? user?.displayName : 'Back' }
        </span>
      </h2> */}

      {/* DashboardNav */}
      <DashboardNav />

      {/* 4 cards .......... */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 px-4'>
        <div className="stat border border-gray-200 border-l-4 border-l-blue-300 rounded">
          <div className='flex justify-between items-center'>
            <div>
              <h5 className="text-2xl font-semibold text-gray-700">${stats?.products}</h5>
              <p className=" text-gray-400">Total Products</p>
            </div>
            <div className='flex items-center justify-center bg-blue-100 bg-opacity-20 text-blue-300 rounded w-12 h-12'>
              <FaShoppingBag className='h-6  w-6' />
            </div>

          </div>
        </div>
        <div className="stat border border-gray-200 border-l-4 border-l-blue-300 rounded">
          <div className='flex justify-between items-center'>
            <div>
              <h5 className="text-2xl font-semibold text-gray-700">${stats?.wishlists}</h5>
              <p className=" text-gray-400">Total Wishlists</p>
            </div>
            <div className='flex items-center justify-center bg-blue-100 bg-opacity-20 text-blue-300 rounded w-12 h-12'>
              <LuNotebookPen className='h-6  w-6' />
            </div>

          </div>
        </div>
        <div className="stat border border-gray-200 border-l-4 border-l-blue-300 rounded">
          <div className='flex justify-between items-center'>
            <div>
              <h5 className="text-2xl font-semibold text-gray-700">${stats?.orders}</h5>
              <p className=" text-gray-400">Total Orders</p>
            </div>
            <div className='flex items-center justify-center bg-blue-100 bg-opacity-20 text-blue-300 rounded w-12 h-12'>
              <IoMdCart className='h-6  w-6' />
            </div>

          </div>
        </div>
        <div className="stat border border-gray-200 border-l-4 border-l-blue-300 rounded">
          <div className='flex justify-between items-center'>
            <div>
              <h5 className="text-2xl font-semibold text-gray-700">${stats?.users}</h5>
              <p className=" text-gray-400">Total Users</p>
            </div>
            <div className='flex items-center justify-center bg-blue-100 bg-opacity-20 text-blue-300 rounded w-12 h-12'>
              <FaUser className='h-6  w-6' />
            </div>

          </div>
        </div>

      </div>

      <div className='pt-10'>
       <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
      </div>




    </div>
  )
}

export default AdminHome
