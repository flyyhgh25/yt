import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Content() {
  const [source,setSource] = useState([])
    useEffect(()=>{
        const options = {
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        params: {id: 'jyO14_lpvcI'},
        headers: {
            'X-RapidAPI-Key': '2c28dc03d4msh9937a7e4c8d572bp133e2djsn53a869a66c94',
            'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
        };
        axios.request(options).then(function (response) {
            // console.log(response.data);
            setSource(response.data)
            console.log(source)
        }).catch(function (error) {
            console.error(error);
        });
    })
  
    return (
    <div>Content</div>
  )
}
