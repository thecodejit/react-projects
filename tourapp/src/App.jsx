import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour'
import Tours from './Tours'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours,setTours] = useState([]);
  const url = 'https://course-api.com/react-tours-project';

  const removeTour = (id)=>{
    const newTour = tours.filter((tour)=>tour.id != id);
    setTours(newTour);
  }

  const fetchData = async() =>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours= await response.json();
      setLoading(false);
      setTours(tours);
    }
      catch (error){
        setLoading(false);
      }
  }
  
  useEffect(()=>{
  fetchData();
  },[])


  if (loading) {
    return(
      <main><Loading /></main>
    )
  }

  if(tours.length===0){
    return(
      <div>
        <h2>No Tours Left</h2>
        <button onClick={fetchData}>
          Refresh
        </button>
      </div>
    )
  }
  
  return (
    <>
      <Tours tours={tours} removeTour={removeTour}/>
    </>
  )
}

export default App
