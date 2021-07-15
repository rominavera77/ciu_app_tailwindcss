import { Fragment, useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import recorte from './imagenes/recorte.png';
import diario from './imagenes/diario_en_mano.png';
import Noticia from './components/Noticia';
import diariero from './imagenes/diariero.png';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';

//https://newsapi.org/account   API DE NOTICIAS
//422cb197a5a94109bf08abffc9a28311    API KEY

function App() {

let articuloVisto = JSON.parse(localStorage.getItem("articulo"));
if (!articuloVisto) {
  articuloVisto = [];
}
//Array guardamos todas los artículos seleccionadas
const[articulo,cargarArticulo]=useState(articuloVisto);

useEffect ( () => {
let articuloVisto = JSON.parse(localStorage.getItem("articulo"));
  if (articuloVisto) {
    localStorage.setItem('articulo', JSON.stringify(articulo))
  }else{
    localStorage.setItem('articulo', JSON.stringify([]));
  }
}, [articulo]);

const cargarNuevosArticulos = category => {
  cargarArticulo([...articulo, category]);
}

const [noticia, setNoticia] = useState([]);
const [cargando, guardarCargando] = useState(false);
const [consulta, hiceConsulta] = useState(false);
let keyword
let keywordPais

const consultarAPI = async ({keyword = 'general', keywordPais= 'ar'}) => {
  
  const apiKey = '422cb197a5a94109bf08abffc9a28311'
  const apiURL = `https://newsapi.org/v2/top-headlines?country=${keywordPais}&category=${keyword}&apiKey=${apiKey}`

  try{
    const api = await fetch(apiURL);
    const noticiaApi = await api.json();
    setNoticia(noticiaApi.articles[0]);
    console.log(noticiaApi.articles[0])
  }
  catch(error){
    console.log(error);
  }
};

  return (
    <Fragment>
      <Header/>
        <div className=" bg-blue-100 w-full h-full">
          <div className="flex"> 
          <div>
              <img className="flex flex-none h-full w-36" src={recorte} alt=""/>
          </div>  
          <div className="m-4 p-8">
            <p className="pl-4 ml-8 my-4 text-5xl font-mono font-bold">Bienvenide</p> 
          <div className="mt-4">
              
            <Formulario
                  keyword = {keyword}
                  keywordPais = {keywordPais}
                  consultarAPI={consultarAPI}
                  guardarCargando={guardarCargando} 
                  hiceConsulta={hiceConsulta}
                  cargarNuevosArticulos={cargarNuevosArticulos}
            /> 
            {cargando ? <Spinner /> : null}
          </div>
          
          <Noticia className="flex-wrap"
            noticia = {noticia}
            consulta= {consulta}
            cargando={cargando}
          />
        </div>           
      </div>
      </div>    
    </Fragment> 
  );
}

export default App;
