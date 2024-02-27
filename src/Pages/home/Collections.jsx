import React from 'react'

const Collections = () => {
  return (
    <div className='bg-[url("images/collection-bg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20 '>
        <div className='h-[580px] flex justify-between md:flex-row items-center' >
            <div className="md:w-1/2"></div>
            <div className="md:w-1/2">
                <img src="/images/zara-logo.png" alt="zara" />
                <p className="text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, doloremque eligendi iure excepturi sed est corporis reprehenderit! Deserunt, eos accusantium.</p>
                <button className='px-6 py-2 bg-white text-black rounded-sm font-semibold ' >See colletions</button>
            </div>

        </div>
      
    </div>
  )
}

export default Collections
