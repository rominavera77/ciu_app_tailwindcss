import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled'


const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Select = styled.select`
    display: block;
    width: auto;
    padding: 1.5rem;
    border: 2px solid #000000;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin: 1rem;
    border-radius: 8px;
    -webkit-appearance: none;
`;
const Error = styled.div`
    background-color: #1100ff;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
`;
const Boton = styled.button`
    background-color: #3730A3;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: white;
    width: auto;
    padding: 1.5rem;
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

const Formulario = ({keyword, keywordPais, consultarAPI, guardarCargando, hiceConsulta, cargarNuevosArticulos}) => {

    const [datos, guardarDatos] = useState({
        category: '',
        pais:'',
    });

    const [error, guardarError] = useState(false);
    const {category, pais} = datos;

    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })

    };

    const submitCategory = e => {
        // Prevengo el default
        e.preventDefault();
    
        // Valido el formulario
        if ( category.trim() === "" || pais.trim() === ""){
            guardarError(true);
            return;
        };
    
        // Repongo el error
        guardarError(false);

    guardarCargando(true);
    setTimeout(() => {
        // Paso el cargando a false
        // para eliminar el spinner
        guardarCargando(false);
        cargarNuevosArticulos(category);
        keywordPais = pais
        keyword = category
        hiceConsulta(true)
        consultarAPI({keyword, keywordPais})
        }, 2000);
   ;
};

    return ( 
        <Fragment>
            <form
            onSubmit={submitCategory}
            >
                { error 
                ? <Error>
                    Todos los campos deben completarse
                </Error>
                : null }  
                <Campo>
                    <Select
                        name="category"
                        value={category}
                        onChange={obtenerInformacion}
                    >
                        <option value=""> SUPLEMENTOS Y SECCIONES </option>
                        <option value="business">Economía y Finanzas </option>
                        <option value="technology">Tecnología</option>
                        <option value="science">Ciencia</option>
                        <option value="health">Salud</option>
                        <option value="entertainment">Espectáculos</option>
                        <option value="sports">Deportes</option>
                    </Select>
                    <Select
                        name="pais"
                        value={pais}
                        onChange={obtenerInformacion}
                    >
                        <option value=""> PAIS DE ORIGEN</option>
                        <option value="ar">Argentina </option>
                        <option value="bo">Bolivia</option>
                        <option value="cu">Cuba</option>
                        <option value="br">Brasil</option>
                        <option value="cl">Chile</option>
                        <option value="ve">Venezuela</option>
                        <option value="mx">México</option>
                    </Select>
                    <Boton
                    type="submit"    
                    >
                    CONSULTE LA NOTICIA
                    </Boton>
                </Campo>
            </form>
        </Fragment>    
     );
}
 
export default Formulario;