import Tour from "./Tour";

const Tours = ({tours, removeTour})=>{
    return <section>
        <div className="title">
            <h2>Tours</h2>
            <div className="underline"></div>
        </div>
        <div>
        {tours.map((tour)=>{
            return <Tour {...tour} removeTour={removeTour}/>
        })}
        </div>
        
    </section>
    }
    
    export default Tours;