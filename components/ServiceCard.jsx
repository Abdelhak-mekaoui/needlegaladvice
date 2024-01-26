import React from 'react';

export default function ServiceCard({ menu }) {
  const IconComponent = menu.icon;

  return (
    <div className="flex flex-col items-center bg-white justify-evenly border-solid rounded p-4 shadow-md mb-4 h-[200px] card hover:bg-[#2d5391] text-[#2d5391] hover:text-white transition duration-300">
      <IconComponent size={40} />
      <p className="text-center font-bold hover:text-white">
        {menu.title}
      </p>
      <p className="text-center">{menu.description}</p>
    </div>
  );
}
