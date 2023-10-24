import React, { useEffect } from 'react'
import axios from 'axios';

export default function Page3() {

  useEffect(() => {
    axios.get('/api')
    .then(response=> { console.log(response)})
  }, []) 
  
  return (
    <div>Page3</div>
  )
}
