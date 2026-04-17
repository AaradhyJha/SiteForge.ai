import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { serverUrl } from '../App'
import axios from 'axios'
import { set } from 'mongoose'

function LiveSite() {
    const { id } = useParams()
    const [html, setHtml] = useState("")
    const [error, setError] = useState("")
    useEffect(() => {
        console.log("ID:", id)
        console.log("serverUrl:", serverUrl)
        const handleGetWebsite = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/website/get-by-id/${id}`, { withCredentials: true })
                setHtml(result.data.latestCode)
            } catch (error) {
                console.log(error)
                setError("site not found or an error occurred")
            }
        }
        handleGetWebsite()
    }, [id])

    if (error) {
        return (
            <div className='h-screen flex items-center justify-center bg-black text-white'>
                {error}
            </div>
        )
    }


  return (
    <iframe title='Live Site' srcDoc={html} className='w-screen h-screen border-none' sandbox='allow-scripts allow-same-origin allow-forms'/>
  )
}

export default LiveSite