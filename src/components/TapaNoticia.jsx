import React, { useState, Fragment } from 'react'

const TapaNoticia = ({mix_diario}) => {
    return ( 
        <Fragment>
            <div className="flex claobject-right-top pl-4 pr-0 pb-2" >
                <img className="border-2 border-black shadow-2xl" src={mix_diario} alt=""/> 
            </div>
        </Fragment>
     );
}
 
export default TapaNoticia;