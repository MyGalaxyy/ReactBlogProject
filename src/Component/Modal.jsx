import React from 'react'



   const Modal = ({open,onClose})=>{
    if(!open) return null
  
  return (
    <>
    <div className='mShadow-container'>

        <div className='modal-container'>
            <form >
                <h2 className='modaltitle'>Tarifinizi Bizimle Paylasmak Istermisiniz?</h2> 
                <p className='modaltitle-2'><b>Cevabiniz evet ise lütfen asagidaki FoodieBlog formunu doldurun ve Foodie Cheflerimize Katilin</b></p>
               
                <div className='mcloseButton'>
                    <button onClick={onClose} className='closeBtn'>X</button>
                </div>
                
                <div className='modal-content'>
                    <div >
                   <label>Isim ve Soyad:
                    <input type="text" placeholder='Isminiz' />
                   </label> <br />
                   <label>Email: 
                    <input type="email"  placeholder='google@hotmail.com' />
                   </label> <br />
                   <label>Parola:
                    <input type="password" placeholder='parola giriniz' />
                   </label><br />
                   <label>Parola Tekrar:
                    <input type="password" placeholder='parolanizi tekrar giriniz' />
                   </label>
                   <label>Profil Resminizi Yukleyiniz: 
                    <input type="file" /> <sub>*bu secenek zorunlu degildir.</sub>  
                   </label>
                </div>
               
                </div>
               
                <div className='mbtn-container'>
                <button type='submit' className='sendBtn'>Send</button>
                <button className='goBackBtn'>Exit</button>
                </div>

            </form>
        </div>
    </div>
    </>
  )
 }
export default Modal;
