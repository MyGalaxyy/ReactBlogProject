import React,{useState} from 'react'
import { v4 as uuid } from 'uuid';
import {PiCookingPotBold  } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { TbChefHat} from "react-icons/tb";
import { Link } from 'react-router-dom';
import Rating from '../Component/Rating';
import Modal from '../Component/Modal';




export const database=
[
    {id:randomId(), name:"Türlü",
    detail:" Domates,Patlican,...",
    tarif:" Detayli tarif icin resime tiklayiniz...",
    malzemeler:" 3 adet patates, 2 adet kuru soğan, 4 adet domates, 2 adet sivri biber, 1 adet patlican, 7-8 dis sarimsak, 1 yemek kasigi domates salcasi, 1 su bardagi su,1 cay kasigi tuz,karabiber, yemek kasigi yag, 250gr kusbasi et",
    yapilisi:" Ilk olarak patatesleri soyun ve suda bekletin.Patlicanlarin kabuklarini cizgi seklinde soyup patateslerle ayni boyutta dograyin ve tuzlu suya alin. Domatesi küp seklinde dograyin. Soganlari ve sarimsaklari da yemeklik dograyin. Soganlari tencerenin tabanina yerlestirin. Ardindan biberleri ekleyin. Domates ve sarimsaklarin yarisini sebzelerin üzerine yayin. Patatesleri ve patlicanlari da yerlestirdikten sonra sarimsak ve domateslerin kalanini en üste yayin. Zeytinyagi ve ilik suyla erittiginiz tuz ve salcayi da malzemelerin üzerine gezdirin ve yemeginizi orta ateşte pisirin.",
    tarih:displayDate(),
    imageSrc:"https://www.kulturportali.gov.tr/contents/images/25022013_904b0c18-df43-4f7a-aba9-ad6b909285c9.JPG"
    },

   {id:randomId(), name:"KarniYarik", detail:" Patlican,domates,...",
   tarif:" Detayli tarif icin resime tiklayiniz...",
   malzemeler:"6 adet orta boy patlican, 2 adet buyuk boy kuru sogan, 2 adet sivri biber, 200 gram kiyma, 2 dis sarimsak, 1/2 tatli kasigi biber salcasi, 1/2 tatli kasigi domates salcasi, Sivi yag, tuz, karabiber, kirmizibiber, 2 adet domates, 1 cay bardagi sicak su, Sosu için: 1 yemek kasigi salca, 1 su bardagi sicak su.",
   yapilisi:" Patlicanlari cizgili soyup, yarim saat yag cekmemesi icin tuzlu suda bekletin. İyice yikadiktan sonra suyunu havlu ile cektirin ve az yagda kizartin. 3 adet biberi de yagda kizartin. Daha sonra ayni tavada dogranmis soganlari kavurun, kiymayi ekleyerek bir müddet daha kavurun ve biberleri, sarimsagi ekleyerek 2 dakika daha kavurun. Küp küp dogramis oldugunuz 2 adet domatesi, tuzu, baharatlari ekleyerek karistirin.Üzerine bir cay bardagi su ekleyerek 5 dk kaynatin.,Tepsiye patlicanlarin ortalarini keserek yerlestirin ve bu kesiklerden patlicanin icine bastirarak iç malzemesine yer acin ve malzeme ile patlicanlari doldurun.Doldurdugunuz patlicanlarin üzerine ortadan ikiye kestiginiz çeri domatesi ya da 1 adet domatesi egit büyüklükte olacak sekilde paylastirin ve kizarttigimiz biberlerden birer tane koyun.Ayri bir yerde 1 kasik salcayi, 1 su bardagi sicak suda ezerek patlicanlarin aralarina dökün. Kiymalar cikmasin diye üzerine dökmeyin.Daha sonra 170 derece de isittiginiz firina sürerek 20-25 dk pisirin. Dilerseniz bu islemi pilav tenceresi gibi bir tencerede ocakta yapabilirsiniz. Ayni sürede tencerede de  pisecektir.",
   tarih:displayDate(),
   imageSrc: 'https://cdn.yemek.com/mnresize/940/940/uploads/2022/08/100-gram-kiymayla-karniyarik-one-cikan.jpg'
   },

   {id:randomId(),name:"Tavuk Pilav", detail:" Pirinç,bütün tavuk veya tavuk göğsü...",
   tarif:" Detayli tarif icin resime tiklayiniz...",
   malzemeler:" 500 gram tavuk gögüs eti, 2 su bardagi pirinc,1 cay bardagi sehriye, 3 yemek kasigi tereyagi,1 su bardagi tavuk suyu, 2 su bardagi kaynamis su,1 tatli kasigi tuz,1/2 (yarim) tatli kasigi karabiber.",
   yapilisi:" Ilk olarak tavuklarimizi haslamak icin tencereye koyuyoruz ve üzerini bir parmak gececek sekilde su ekleyerek kaynamaya birakiyoruz. Haslanan tavuklarimizi sogumasi icin kenara aliyoruz. Biraz sogudugunda tavuklarimizi tiftikliyecegiz. Bu sirada pirinclerimizi de ilik suya koyup nisastasinin cikmasini bekliyoruz. Pilav tenceresine yagimizi ekleyip eridiginde sehriyelerimizi kavuruyoruz. Sehriyelerin rengi degisip, kokusu ciktiğinda pirinclerimizi de ekliyoruz ve 5-10 dakika kadar daha kavuruyoruz. Daha sonra pirincimizin üzerine tiftikledigimiz tavugumuzu ekliyoruz. 1 bardak tavuk suyu ve 2 bardak kaynamis suyunu da ekledikten sonra tuz ve karabiberi de ilave edip bir kere karistiriyoruz ve kapagini kapatarak kisik ateste pismeye birakiyoruz. Ben pilav pisirirken cok fazla karistirmiyorum size de böyle tavsiye ederim. Pilavimiz suyunu cekip tane tane oldugunda altini kapatip, kapagin üzerine demlenmesi icin kagit havlu koyuyoruz. Servis yaparken havluyu alarak afiyetle pilavimizi yiyoruz.",
   tarih:displayDate(),
   imageSrc:'https://img-s2.onedio.com/id-630c9aa78c9516af79cf06a4/rev-0/w-600/h-399/f-jpg/s-3410c00910b545df8969ec9ec32027b6117516f7.jpg' 
   },

   {id:randomId(), name:"Irmik Helvasi", detail:" Irmik,su,seker Not:Su yerine Sütte kullanilabilir",
   tarif:" Detayli tarif icin resime tiklayiniz...",
   malzemeler:" 2 dolu dolu yemek kasigi tereyagi, 2 su bardagi irmik, 1,5 su bardagi seker, 2 su bardagi su.",
   yapilisi:" Tereyagini tavada eritip irmigin üzerine döküyoruz ve orta büyüklükteki ocakta, orta ateste yaklasik 3 dakika sürekli karistirarak kavurun. 3 dakika sonunda ocagin altini kisip 3 dakika da kisik ateste iyice kavurun. Bu arada irmigin rengi bayagi dönmüs oluyor, kremken acik sütlü kahve rengine dönüsüyor ayrintili yazmak gerekirse. Toplam 6 dakikalik bu sürenin sonunda sekeri ekliyoruz ve 4 dakika da sekerle kavuruyoruz. Isteyen 1 bardağa kadar sekeri azaltabilir. Toplamda 10 dakikalik kavurmanin sonunda altini kisiktan normale getirip suyu ekliyoruz. Su hemen kayniyor zaten, kisiga tekrar getirip birkac kez karistirdiktan sonra (yaklasik 1 dakika sürüyor) birazcik akiskan ve sulu birakip altini kapatin ve dinlenmeye birakin.",
   tarih:displayDate(),
   imageSrc: 'https://images.deliveryhero.io/image/fd-tr/LH/c6qj-hero.jpg'
   },

   {id:randomId(),name:"Yaprak Sarmasi", detail:" Uzum Yapragi,Pirinc...",
    tarif:" Detayli tarif icin resime tiklayiniz...",
    malzemeler:" 500 gram üzüm yapragi (salamura), 1 adet limon, Zeytinyagi, İc Harci: 2 orta boy kuru sogan, 1,5 su bardagi pirinc, Maydanoz, 1 yemek kasigi salca, Karabiber, Kirmizi pul biber, Kimyon, Nane, Tuz, 2 yemek kasigi sivi yag. ",
    yapilisi:" Öncelikle salamura yapraklar 2-3 dakika sicak suda bekletilir, yikanir ve süzgece alinir. Genis bir kabin icerisine soganlar rendelenir üzerine zeytinyagi dökülür. Baharatlar, salca ve tuzu da ilave edildikten sonra ince kiyilmis maydanozu da eklenerek karistirilir(cigden bir ic harc olacak). Yapragin genis kismina ic harctan konulur ve rulo gibi iki yanlardan kapatarak sarilir. Bu isleme yaprak bitene kadar devam edilir. Sardigimiz yapraklarin üzerine zeytinyagi ve limon dilimleri ekleyip yaklasik 5-6 su bardagi kadar da sicak su ilave edilerek kisik ateste pisirilir. (üzerine sarmalar dagilmasin diye tencere kapagindan biraz kücük ebatta bir kase kapatabilirsiniz.) ",
    tarih:displayDate(),
    imageSrc:'https://tarifpaylasimlari.com/wp-content/uploads/2019/02/5703a0c867b0a9322cf4c32c.jpg'
   },

   {id:randomId(),name:"Domates Corbasi", detail:" Domates,Salca,...",
    tarif:" Detayli tarif icin resime tiklayiniz...",
    malzemeler:" 4-5 adet olgun domates, 2 corba kasigi tereyagi, 3 corba kasigi un, 1 litre sicak su, 1 su bardagi süt, 1 corba kasigi rendelenmis taze kasar.",
    yapilisi:" Domates corbasi yapmak icin yag ve un bir tencerede hafifce kavrulur. Diger taraftan kabugu cikarilip, küp küp kesilmis domates robottan gecirilip bu karisima ilave edilir, birkac dakika kavrulur. Ara verilmeden bir litre kadar su ilave edilip karistirma islemini sürdürülür. 15 dakika bu sekilde kaynatilir. Daha sonra süt ilave edilip birkac dakika daha kaynatilarak tuzu ilave edilip ocaktan alinir. Arzuya göre servis yaparken üzerine kasar peyniri rendesi ilave edilir.",
    tarih:displayDate(),
    imageSrc:'https://cdn.yemek.com/mnresize/1250/833/uploads/2018/05/kolay-domates-corbasi-sunum.jpg'
   }

]

function displayDate(){
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return date
  
}
 function randomId(){
   const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  return small_id
 }
   
export default function Food() {
  
  
  const[yemek]=useState(database)

 const [searchdata,setSearchdata]=useState("")
 const changeInput=(event)=>{
  setSearchdata(event.target.value)
 }

 const [openModal, setOpenModal]=useState(false) 

  return (
    <>
     <h1>Yemek Tarifleri <CiSearch/> </h1>
   
    <div className='searchBar'>
             <input type='search' onChange={changeInput} placeholder='Yemek tarifi ara...' value={searchdata}/>
             <button onClick={()=>setOpenModal(true)} className='tarif-SendBtn'><TbChefHat/>
             <b>Foodie Chef</b> </button>  
             < Modal open={openModal} onClose={()=>setOpenModal(false)}/>
    </div>
   
    <div className='food-Container'>
     {yemek.map((yemekler)=>{
      if(yemekler.name.toLowerCase().includes(searchdata.toLowerCase())){

     
      return <div key={yemekler.id} className='food-Item' >
      
      <div className='food-Body'>
      <Link to={`/Tarifler/${yemekler.id}`}> 
      <img src={yemekler.imageSrc}  alt={yemekler.name} /> 
      </Link>
      </div>

      <h3 className='baslik'> <PiCookingPotBold className='icook'/> <u> {yemekler.name} </u> <Rating></Rating> </h3>
   
      <p> <u> Malzemeler: </u> {yemekler.detail} </p>
      <Link className='p-Link' to={`/Tarifler/${yemekler.id}`}>
      <p>Tarif:<span> <u>Detayli Tarif Icin Tiklayiniz</u> </span> </p>
      </Link>
      <p>Yayinlama Tarihi:{yemekler.tarih}</p>
      
     </div>

      }
      return null
     })}
 
    </div>
    
    </>
  )
}
