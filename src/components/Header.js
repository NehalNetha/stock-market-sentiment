import React, { useState } from 'react'

export default function Header() {

  const [stock, setStock] = useState('')
  const [responseMessage, setResponseMessage] = useState('');


  const handleSubmit = async () => {

    try {
      
      const response = await fetch('http://127.0.0.1:8080/get_stock_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: stock }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setResponseMessage(responseData.message);
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className=''>
        <div className=''>
            <h1 className="ml-[200px] pt-9 text-gray-600 text-[2rem] font-bold font-kalam ">Predict The Stock Market</h1>
        </div>
            <div className='flex flex-col gap-6 justify-center items-center mt-[6rem]'>
            <p className='w-[600px] text-center font-bold text-[2.8rem] font-kalam '>AI generated recommendation system for the Stock Market</p>
            <p className='w-[500px] text-center text-gray-500  font-kalam font-semibold text-[17px]'>Provides the sentiment of the recent news for your requested stock, recommends whether to buy or not, based on the aggregrated probabilites of the headlines </p>
            <form className='relative'>
                <input className='mt-3 py-5 pl-[2rem] pr-[14rem] rounded-full  active:border-red-500 shadow-slate-900' 
                      placeholder="Enter the Stock"
                      type="text"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      
                />
                <button className='absolute right-[0.6rem] top-[1rem] border-1 bg-blue-500 rounded-full py-[0.9rem] px-[2.5rem] hover:bg-blue-900 text-white'
                        onClick={handleSubmit}
                >Predict</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>

        
            
    </div>
  )
}
