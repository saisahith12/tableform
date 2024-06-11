import React, { useState } from 'react';
import { FaCloudDownloadAlt, FaEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import {useNavigate} from "react-router-dom";



const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = [
    { id: 1, name: 'Luffy', email: 'luffy@example.com',Status: 'Active', PhoneNumber:'12356789'},
    { id: 2, name: 'Zoro', email: 'zoro@example.com',Status: 'Active', PhoneNumber:'987654321' },
    { id: 3, name: 'Sanji', email: 'sanji@example.com',Status: 'Active', PhoneNumber:'987456321' },
    { id: 4, name: 'Jimbe', email: 'jimbe@example.com',Status: 'Active', PhoneNumber:'123456789' },
    { id: 5, name: 'Brook', email: 'brook@example.com',Status: 'Active', PhoneNumber:'147852369' },

    // Add more data as needed
  ];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nav=useNavigate()
  return (
    <div className="">
        <div className="m-4 flex justify-center">
        <input
          type="text"
          className="border p-2 ml-60"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex bg-green-700 w-44 ml-5 rounded-full">
            <FaCloudDownloadAlt className='h-8 w-5 ml-3 m-2 text-white'/>
        <button className=' font-bold text-white' >Export to Excel</button>
        </div>
        <div className='flex bg-blue-400 w-44 ml-5 rounded-full '>
          <FaPlus className='h-8 w-3 ml-3 m-2 text-white'/>
            <button className='font-bold text-white' 
            onClick={() => nav('/employee-create')}>Create Employee</button>
        </div>
        
      </div>
         <div className="container mx-auto p-4 flex content-center">
      
      <table className="w-full  border border-black-600 p-10 ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white ">ID</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white ">Name</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white ">Email</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white ">Status</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white ">Phone Number</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-black text-white ">Action</th>



          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b border-gray-200 md:justify-center ">{item.id}</td>
              <td className="py-2 px-4 border-b border-gray-200 ">{item.name}</td>
              <td className="py-2 px-4 border-b border-gray-200 ">{item.email}</td>
              <td className="py-2 px-4 border-b border-gray-200 ">{item.Status}</td>
              <td className="py-2 px-4 border-b border-gray-200 ">{item.PhoneNumber}</td>
              <td className="py-6 px-1 border-b border-gray-200  flex"> <FaEye/> <CiEdit className='ml-8 '/></td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
   
  );
};

export default Table;
