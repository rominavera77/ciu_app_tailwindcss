import React from 'react';

const Noticia = ({noticia}) => {
    //console.log(noticia);
    return ( 
        <div className="grid grig-cols-2 gap-4 h-auto mt-4 mr-8 bg-white p-4 ">
            <p
            style= {
                {
                    color: "black",
                    font: "roboto",
                    fontWeight: "bold",
                    fontSize: "36px", 
                }
                
            }
            >PRIMICIA....</p>
        <div className="">
                    <p>{noticia.author}</p>
                    <p>{noticia.content}</p> 
                    <p>{noticia.publishedAt}</p>
                    <p>{noticia.id}</p>
            </div>
        </div>
    );
}

export default Noticia;