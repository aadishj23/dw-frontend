import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button({ path, text }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center ">
      <button
        onClick={() => {
          navigate(`${path}`);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
