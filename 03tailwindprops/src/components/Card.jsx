import React from 'react'

const Card = ({username,btnText="visit me"}) => {
    console.log(username);
    
  return (
    <div>
       <div class="max-w-sm rounded-2xl shadow-lg bg-white p-6 text-center">
    <img
      class="w-24 h-24 mx-auto rounded-full shadow-md"
      src="https://randomuser.me/api/portraits/men/32.jpg"
      alt="Profile Picture"
    />
    <h2 class="text-xl font-semibold mt-4 text-gray-800">{username}</h2>
    <button
      class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      {btnText}
    </button>
  </div>
    </div>
  )
}

export default Card
