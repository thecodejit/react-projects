import { useState } from "react";

const Tour = ({id,image,info,price,name, removeTour})=>{
    const [readMore,setReadmore]  = useState(false);

return <article className="single-tour">
<img className="img"src={image} alt={name} />
<footer>
    <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
    </div>
    <p className="text-small">{readMore?info:`${info.substring(0,200)}`}</p>
    <button onClick={()=>{ setReadmore(!readMore)
    }}>
        {readMore? 'show less' : 'read more'}
    </button>
    <button className="delete-btn btn" onClick={()=>{
        removeTour(id);
    }}>Not Interested</button>
</footer>
</article>
}

export default Tour;