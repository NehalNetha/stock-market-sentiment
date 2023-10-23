import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Predictions() {

    const [getSnipsPredict, setGetSnipsPredict] = useState({})


    useEffect(() => {


        async function fetchSnips(){
            await axios.get("http://127.0.0.1:8080/get_prediction").then(response => {
              console.log("successful")
              setGetSnipsPredict(response)
              
          }).catch(error => {
            console.log(error)
          })
          }

          fetchSnips()
    
    }, [])

    console.log(getSnipsPredict)


  const getRecommendation = () => {
    let k = []
    if(getSnipsPredict.data !== undefined){
      Object.keys(getSnipsPredict.data).map((key, index) => ( 
        k.push(getSnipsPredict.data[key])
      ))
    }
    return k
  }

  console.log(getRecommendation())

 
 

  return (
    <div className='flex flex-col justify-center items-center mt-6 gap-4 font-kalam font-semibold'>
        {
            getSnipsPredict.data !== undefined ? 
            
                Object.keys(getSnipsPredict.data).map((key, index) => ( 
                  <p key={index}> Total {key} Values: {getSnipsPredict.data[key]}</p> 
                ))
            
            : <p>unreachable</p>
        }
      {
        getSnipsPredict.data !== undefined ? (
        <div className='w-[100px] h-[100px] rounded-full bg-green-600 text-center flex justify-center items-center cursor-pointer hover:bg-green-800'>
            <p className=''>BUY</p>
        </div>) : <p></p>
      }



    </div>
  )
}


