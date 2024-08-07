import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDocteurContext } from '../Context/ContextDocteur';
import { useRDVContext } from '../Context/ContextRDV';
const DocteurList = () => {
    const {Docteur,docteurEdt}=useDocteurContext();
    const {matriculeEdt}=useDocteurContext();
    const {getEdt}=useRDVContext();
    console.log(matriculeEdt)
    const HandlechangeDocteur = (event) => {
        docteurEdt(event.target.value)
        getEdt(event.target.value)
        // setRecherche(event.target.value)
    };
    // alert(`matricule:${matriculeEdt}`)
    return (
        <div>
              <select  value={matriculeEdt} onChange={HandlechangeDocteur} className="w-[291px] h-[50px] ml-[32px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            Docteur.map((data) => (
                                <option key={data.matricule} value={data.matricule}>{data.nom}</option>
                            ))
                        }
            </select>
        </div>
    );
};

export default DocteurList;
// const Docteur = [

//     {
//         "id": 1,
//         "value": "Vanitas"
//     },
//     {
//         "id": 2,
//         "value": "Dazai"
//     },
//     {
//         "id": 3,
//         "value": "Hisoka"
//     }
// ]
