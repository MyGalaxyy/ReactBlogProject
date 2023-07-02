import React, { } from 'react'
import {FaPalfed} from "react-icons/fa";
import {FaHome}from "react-icons/fa";
import {FaFire}from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Nav() {

  return (
    <>
    <div>
       <nav className='navbar' >
        <ul>
          
      <Link className='icons' to="/Anasayfa"><li><FaPalfed  size='42px' /> <b>FoodieBlog</b> </li>
         </Link> 
          <Link className='linkCSS' to="/Anasayfa"><FaHome className='icons'/><b>Anasayfa</b></Link>

          <Link className='linkCSS' to="/Tarifler"><FaFire className='icons FaFire'/><b>Tarifler</b></Link>
          
        </ul>
        </nav>
    </div>
    </>
  )
}
