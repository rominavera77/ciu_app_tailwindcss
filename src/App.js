import { Fragment, useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import recorte from './imagenes/recorte.png';
import diario from './imagenes/diario_en_mano.png';
import Noticia from './components/Noticia';
import diariero from './imagenes/diariero.png';

//https://newsapi.org/account   API DE NOTICIAS
//422cb197a5a94109bf08abffc9a28311

function App() {

const [noticia, setNoticia] = useState({});
const [fullnoticia, setNoticias] = useState({});
const  noticiaElegida = () => {
  setNoticia(fullnoticia);
  console.log(noticia);
};

const consultarAPI = async () => {
  try{
    const api = await fetch('https://newsapi.org/v2/everything?q=apple&from=2021-06-19&to=2021-06-19&sortBy=popularity&apiKey=422cb197a5a94109bf08abffc9a28311');
    const noticias = await api.json();
    //console.log(noticia.articles)

    setNoticias(noticias.articles[0]);
      
  }
  catch(error){
    console.log(error);
  }
};


useEffect(() =>{
  consultarAPI();
  
},[]);


  return (
    <Fragment>
    <Header 
          diariero = {diariero}
    />
    <div>
      <div className="grid bg-blue-200 m-auto">
        <div className="flex"> 
          <div>
            <img className="flex inline h-auto w-72" src={recorte} alt=""/>
          </div> 
          <div className="mt-4 ml-8">
            <p className="my-4 text-5xl font-mono font-bold text-black">Bienvenide</p>
            <button className="px-8 py-4 text-2xl font-semibold bg-white border-4 rounded-lg border-black     hover:bg-red-600 hover:text-white " onClick={noticiaElegida}>              
              Consulte SU Noticia
            </button>
            <Noticia
              noticia = {noticia}
            />
            <div>
              <img className="block rounded-full py-10" src={diario} alt=""/>
            </div>
          </div>           
        </div>
      </div>    
    </div> 
    </Fragment> 
  );
}

export default App;
