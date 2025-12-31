import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  return (
    <div className=" my-[40px] mx-auto p-5 flex gap-[30px] justify-center items-center font-poppins max-w-[900px] ">
      <div className="w-80 bg-[#ffffff] p-[25px] rounded-5 shadow-[0 4px 10px rgba(0,0,0,0.1)] text-center ">

        <h2 className="my-[10px] mx-0 text-[22px] " >{currentUser.firstName} {currentUser.lastName}</h2>
        
        
        <button onClick={() => navigate('/dashboard')}
         className=""
        >Back to Dashboard</button>
      </div>
    </div>
  );
};

export default Profile;
