import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { serverUrl } from '../App'

function Editor() {
    const {id}=useParams()
    const [website,setWebsite]=useState(null)
    const [error,setError]=useState("")

    useEffect(()=>{
        console.log("ID:", id)
    console.log("serverUrl:", serverUrl)
        const handleGetWebsite=async ()=>{
            try {
                const result=await axios.get(`${serverUrl}/api/website/get-by-id/${id}`,{withCredentials:true})
                setWebsite(result.data)
            } catch (error) {
                console.log(error)
                setError(error.response.data.message)                
            }
        }
        handleGetWebsite()
    },[id])

  if(error){
    return (
        <div className='h-screen flex items-center justify-center bg-black text-red-400'>
            {error}
        </div>
    )
  }
  if(!website){
    return (
        <div className='h-screen flex items-center justify-center bg-black text-white'>
            Loading...
        </div>
    )
  }



  return (
    <div className='h-screen w-screen flex bg-black text-white overflow-hidden'>
        <aside>
<Header/>
<Chat/>
        </aside>

    </div>
  )
  function Header() {
    return(
        <div className='h-14 px-4 flex items-center justify-between border-b border-white/10'>
            <span>{website.title}</span>
        </div>
    )
}

function Chat() {
    return(
        <div>
            
        </div>
    )
}
}






export default Editor