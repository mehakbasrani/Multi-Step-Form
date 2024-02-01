import React, { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext';

const Payment = () => {

  const {userData, setUserData} = useContext(StepperContext)
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  }

  return (
    <>
    <div>
      <div className="flex flex-col">
        <div className="w-full mx-2 flex-1">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Account Holder Name
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text" 
                   onChange={handleChange} 
                   value={userData["accname"] || ""} 
                   name="accname" 
                   placeholder="Name"
                   className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
          </div>
        </div>

          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Account Number
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text" 
                   onChange={handleChange} 
                   value={userData["accountno"] || ""} 
                   name="accountno" 
                   placeholder="Account Number"
                   className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
          </div>
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            IFSC Code
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text" 
                   onChange={handleChange} 
                   value={userData["ifsc"] || ""} 
                   name="ifsc" 
                   placeholder="IFSC"
                   className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Branch
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text" 
                   onChange={handleChange} 
                   value={userData["branchname"] || ""} 
                   name="branchname" 
                   placeholder="Branch"
                   className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Payment
