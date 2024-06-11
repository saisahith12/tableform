import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OrganizationForm = () => {
  const [organization, setOrganization] = useState({
    FirstName: '',
    MiddleName: '',
    LastName: '',
    DateofBirth: '',
    DateofJoining: '',
    phoneNumber: '',   
    Email: '',
    Designation: '',
    Project: '',
    TeamSelection: '',
    Manager: '',
  
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrganization({ ...organization, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', organization);
    // Add your form submission logic here
  };

  return (
    <div className="pb-10">
      <div className="flex justify-between ">
        {/* <div>
          <Sidebar />
        </div> */}
        <div className="mr-24 w-2/3 items-center">
          <div className=" bg-orange-500  to-neutral-400 p-4 rounded-lg mt-10 w-full">
            <p className="text-center text-white text-2xl font-bold">
              Employee-Create
            </p>
          </div>
          <form className=" rounded-lg p-5 mt-4" onSubmit={handleSubmit}>
            <div className="flex justify-between pt-5">
              <div>
                
                <input
                  type="text"
                  name="name"
                  value={organization.name}
                  onChange={handleChange}
                  className="p-2 rounded border border-black ml-2 justify-center"
                  placeholder="First Name "
                />
              </div>
              <div>
                
                <input
                  type="text"
                  name="name"
                  value={organization.name}
                  onChange={handleChange}
                  className="p-2 rounded border border-black ml-2"
                  placeholder="Middle Name"
                />
              </div>
              <div>
                
                <input
                  type="text"
                  name="name"
                  value={organization.name}
                  onChange={handleChange}
                  className="p-2 rounded border border-black ml-2 "
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex justify-between pt-5">
              <div>
                
                <input
                  type="text"
                  name="date"
                  value={organization.date}
                  onChange={handleChange}
                  className="p-2 rounded border border-black ml-2"
                  placeholder="Date of Birth"
                />
              </div>
              <div>

              <input
                  type="text"
                  name="date"
                  value={organization.date}
                  onChange={handleChange}
                  className="p-2 rounded border border-black ml-2"
                  placeholder="Date of Joining"
                />
               
              </div>
              <div>
                
                <input
                  type="text"
                  name="website"
                  value={organization.website}
                  onChange={handleChange}
                  className="p-2 rounded border border-black ml-2"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="flex justify-between pt-5">
              <div>
                
                <input
                  type="text"
                  name="Email"
                  value={organization.Email}
                  onChange={handleChange}
                  className="p-2 rounded border border-black ml-2"
                  placeholder="Email ID"
                />
              </div>
              <div>
                
              <select
                  name="designation"
                  value={organization.designation}
                  onChange={handleChange}
                  className="p-2 px-9 rounded border border-black mr"
                >
                  <option value="" disabled>
                    Designation
                  </option>
                  <option value="Manager">Manager</option>
                  <option value="Salesmanager">Salesmanager</option>
                  <option value="Employee">Employee</option>
                </select>
              </div>
              <div>
                
                <select
                  name="project"
                  value={organization.project}
                  onChange={handleChange}
                  className="p-2 px-7 rounded border border-black mr"
                >
                  <option value="" disabled>
                    Project
                  </option>
                  <option value="Nike">Nike</option>
                  <option value="Weatherforecast">Weatherforecast</option>
                  <option value="Movieland">Movieland</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between pt-5 ">
              <div>
              <select
                  name="TeamSelection"
                  value={organization.TeamSelection}
                  onChange={handleChange}
                  className="p-2 px-9 rounded border border-black ml-2 "
                >
                  <option value="" disabled>
                    Team Selection
                  </option>
                  <option value="jntuk">jntuk</option>
                  <option value="jntuh">jntuh</option>                
                </select>
              </div>
              <div>
                
                <input
                  type="text"
                  name="Manager"
                  value={organization.Manager}
                  onChange={handleChange}
                  className="p-2  rounded border border-black mr-44"
                  placeholder="Enter Contact mobile"
                />
              </div>
              <div>
               <FaSearch className=' flex h-8 w-5  '/>
              </div>
             
            </div>

            <div className="flex justify-evenly mt-20">
              <button
                className="bg-blue-700 hover:bg-white hover:text-black text-white w-36 h-8 rounded-lg"
                type="submit"
              >
                Save
              </button>
              <button
                className="bg-red-700 hover:bg-white hover:text-black text-white w-36  h-9 rounded-lg"
                type="button"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrganizationForm;
