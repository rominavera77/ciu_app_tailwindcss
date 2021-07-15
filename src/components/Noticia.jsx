import React from 'react';
import { useState , Fragment } from 'react';
import styled from '@emotion/styled';

const Boton = styled.button`
    background-color: #3730A3;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: white;
    width: auto;
    padding: 0.5rem;
    text-transform: uppercase;
    border: 2px solid #000000;
    border-radius: 8px;
    transition: background-color .3s ease;
    margin: 1rem;
    
    &:hover{
        cursor: pointer;
        background-color: #5e4b92;
    }
`;

const Noticia = ({noticia, consulta}) => {
    
    const [hayUrl, cargarUrl] = useState(false)
    if (!noticia.url === ""){
        cargarUrl(true)  
    }
 
    return (    
        <Fragment>
            {consulta?(
            <div className="flex ">
                <div className="mx-8">
                    <p className="text-right text-grey-600 ">{noticia.publishedAt}</p>
                    <p className="text-2xl font-bold pl-4 p-2 ">{noticia.title}</p>
                    
                    <p className="pl-4 p-2">{noticia.content}</p> 
                    
                    <p className="pl-4 p-2">{noticia.description}</p>
                    <p className="text-sm text-right text-grey-600 font-medium">{noticia.author}</p>
                    <Boton border> 
                            {
                            hayUrl
                            ? null
                            : <a  href={noticia.url} >LINK A LA NOTICIA</a>
                        }  
                    </Boton>
                     
                </div>
                <div className="claobject-right-top pl-8 pb-2" >
                    <img src={noticia.urlToImage} alt=""/> 
                </div>
            </div> ) : null}
        </Fragment>
    );
}

export default Noticia;