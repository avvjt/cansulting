import React from 'react'

function SocialLinks() {
  return (
    <div className="flex flex-col gap-4 top-0 left-0 absolute p-4">
      <a href="https://www.linkedin.com/company/influidity-solution/" target="_blank" rel="noopener noreferrer">
        <div className="bg-[#71edbc] rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <span className="text-black font-bold">LI</span>
        </div>
      </a>
      <a href="https://www.instagram.com/influidity_solution/" target="_blank" rel="noopener noreferrer">
        <div className="bg-[#71edbc] rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <span className="text-black font-bold">IN</span>
        </div>
      </a>
      <a href="https://www.facebook.com/influiditysolution/" target="_blank" rel="noopener noreferrer">
        <div className="bg-[#71edbc] rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <span className="text-black font-bold">FB</span>
        </div>
      </a>
      <a href="https://x.com/Influidity" target="_blank" rel="noopener noreferrer">
        <div className="bg-[#71edbc] rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <span className="text-black font-bold">X</span>
        </div>
      </a>
    </div>
  );
  
}

export default SocialLinks