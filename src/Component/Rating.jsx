import React,{useState} from 'react'
import{FaStar}from 'react-icons/fa'




export default function Rating() {
    const [starPuanlama, setStarPuanlama]= useState (null)
    const [PuanlamaHoverCss,setPuanlamaHoverCss]=useState(null)
    return (
    <div className='puanla-star' >
        {[...Array(5)].map((star, index)=>{
            const currentRating=index +1
        return (
            
         <label className='puanla-Css' key={currentRating}>
            <input className='ratingInput' type="radio" name='puanla' value={currentRating} onClick={()=>setStarPuanlama(currentRating)} />
          <FaStar className='rstar-Css' size={20} color={currentRating <= (PuanlamaHoverCss || starPuanlama) ? "#ffc107": "#e4e5e9"}
          onMouseEnter={()=>setPuanlamaHoverCss(currentRating)}
          onMouseLeave={()=>setPuanlamaHoverCss(null)}
          />     
         </label>
         
        );
        
        })}
      
    </div>
  )
}
