import { useEffect, useState } from "react";
import axios from 'axios'




const useNewsAPI = (typee) => {
    const API_URL = 'https://newsapi.org/v2/everything?q='+ typee +'&from=2024-07-01&sortBy=publishedAt&pageSize=10&apiKey=acb4e25e48c5453fb5ab77062548ffb0'
    const [data, SetData] = useState(null)
    const [loading, isLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        isLoading(true)
        axios(API_URL).then((response)=>{
            SetData(response.data.articles)
        }).catch((error)=>{
            setError(error)
        }).finally(()=>{
            isLoading(false)
        })
    },[typee]) 
    return {data, loading, error}
}

export default useNewsAPI;