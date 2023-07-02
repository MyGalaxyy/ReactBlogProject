import React from 'react'
import { PiCookingPot } from "react-icons/pi";
import { useParams } from 'react-router-dom'




export default function YemekTarifi(props) {

  const { db } = props
  const { id } = useParams() 

  // console.log("props:", db)

  return (
    <>
      <div className='tarif-container' >
        {db.map((veri) => {

          if (veri.id === id) {
            return <div className='tarif-item' key={veri.id}>
              
              <h1 className='baslik-detail'>{veri.name} Tarifi:</h1>
             
              <img src={veri.imageSrc} alt={veri.name} />
              
              <div className='tarif-details' >
                
                <p>
                  <b><PiCookingPot size='29px' style={{ marginRight: '5px' }} /> <u>Malzemeler:</u><br />{veri.malzemeler}</b> <br />
                  <b> <u>Yapilisi:</u> <br /> { }</b>
                  <li>{veri.yapilisi}</li>
                </p>

              </div>
              
            </div>

          }
         return null
        })}
       
      </div>

    </>
  )
} 
