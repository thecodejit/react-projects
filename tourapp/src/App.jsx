import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour'
import Tours from './Tours'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours,setTours] = useState([]);
  const url = 'https://course-api.com/react-tours-project'

  const fetchData = async() =>{
    setLoading(true);
    const response = await fetch(url);
    const tours= await response.json();
    console.log(tours);
  }
  
  useEffect(()=>{
  fetchData();
  },[])


  if (Loading) {
    return(
      <main><Loading /></main>
    )
  }
  
  return (
    <>
      <Tours/>
    </>
  )
}

export default App
