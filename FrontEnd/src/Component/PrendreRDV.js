import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useRDVContext } from './Context/ContextRDV';
import '../Styles/PrendreRDV.CSS'
import Rechercher from './SC_PrendreRDV/Recherche';
import TableDisp from './SC_PrendreRDV/TableDisp';
import Footer from './Footer';
const PrendreRDV = () => {
    const {Docteur} = useRDVContext();
    const [recherche, setRecherche] = useState({
        status: 'cardio',
        jour: '',
        heure: ''
    });
    const Handlechange = (event) => {
        const { name, value } = event.target;
        setRecherche({
            ...recherche,
            [name]: value
        });
    };
   
   
    return (
        <div>
            <div >
                <Rechercher 
                    Handlechange={Handlechange}
                    recherche={recherche}
                >

                </Rechercher>
            </div>
            <div>
            {
                Docteur === undefined ?
                <div style={{marginTop:'100px'}}>
                    <TableDisp recherche={recherche.jour}></TableDisp>
                </div> 
                :
            // Docteur.map((data) => {
               <div style={{marginTop:'100px'}}>
                     <TableDisp recherche={recherche.jour}></TableDisp>
                </div>
            // })
            }
            </div>
            <div className='mb-[200px]'></div>
            <Footer/>
        </div>
    );
};

export default PrendreRDV;

