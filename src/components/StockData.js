import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function StockData() {

    const [getMessage, setGetMessage] = useState({})
  const [getSnips, setGetSnips] = useState({})




  useEffect(() => {


    async function fetchData() {
      await axios.get("http://127.0.0.1:8080/get_stock_news/images").then(response => {
          console.log("successful")
          setGetMessage(response)
          
      }).catch(error => {
        console.log(error)
      })
    }

    async function fetchSnips(){
      await axios.get("http://127.0.0.1:8080//get_stock_news/real").then(response => {
        console.log("successful")
        setGetSnips(response)
        
    }).catch(error => {
      console.log(error)
    })
    }

    

    fetchData()
    fetchSnips()
 
  }, [])
  return (
    <div className='flex'>

    
    <div className="flex flex-col gap-7 m-6">
        {getMessage.data !== undefined ? getMessage.data.map(i => (
            <div className='' >
                <div className="">
                    <img key={i} src={i} alt={i} className="w-[180px] h-[180px]"/>  
                </div>
                
            </div>
            
        )) :
         <p>nothing</p>
        }

        

    </div>

        <div className='mt-8'>
            {
            getSnips.data !== undefined ? getSnips.data.map(s => (
                <p className="mt-[7.5rem] font-kalam"> {s}</p>
            )) : <p>not reachable</p>
            }
        </div>
    
    </div>



     
   
   
  )
}
