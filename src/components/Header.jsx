import React from 'react';
//import diariero from '.../src/imagenes/diariero.png';
//import recorte from '.src/imagenes/recorte.png';

const Header = ({diariero}) => {
    return (
        <div className="grid grid-row">
                
            <h1 className="font-serif text-6xl text-center  p-6 tracking-normal text-indigo-800 font-bold tracking-widest bg-red-400"
            >PORTAL DE NOTICIAS </h1>
            {/* <img className="h-10 w-10" src={diariero} alt=""/> */}
        </div> 
        
     );
}
 
export default Header;