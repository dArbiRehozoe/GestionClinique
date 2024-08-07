import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useRDVContext } from './Context/ContextRDV';


const MesRDV = () => {
    const navigation = useNavigate ()
    const {RDV} = useRDVContext();
    const rdv = () =>{navigation('/rdv')} 
    console.log(RDV)
    return (
        <div>
            <div>
                <button onClick={rdv}> Ajouter </button>
            </div>
            {
               RDV === null ?
                <div> chargement ...
                      
                     </div> 
                :
                <div>
                    <div>huhu</div>
                    <div>uhuh</div>
                  
                </div>
            }
           
        </div>
    );
};

export default MesRDV