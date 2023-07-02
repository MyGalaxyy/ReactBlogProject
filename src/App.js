import {Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav';
import Food from'./Pages/Food';
import YemekTarifi from './Pages/YemekTarifi';
import Anasayfa from './Pages/Anasayfa';

// veritabani
import { database } from './Pages/Food';
import { useState } from 'react';


function App() {

  const [data] = useState(database)
 
  return (
    <>
    <div className='container'>
    
     <Nav/>
     
      <Routes>
        <Route path='/Anasayfa' element={<Anasayfa></Anasayfa>}> </Route>
        <Route path='/Tarifler' element={<Food></Food>}></Route>
        <Route path='/Tarifler/:id' element={<YemekTarifi db={data}></YemekTarifi>}></Route>
      </Routes>

    </div>
  
    </>
  );
}

export default App;
