import React, { useEffect, useState } from 'react';
import '../../Styles/PrendreRDV.CSS'
import { useDocteurContext } from '../Context/ContextDocteur';
import { useRDVContext } from '../Context/ContextRDV';
const Rechercher = ({Handlechange,recherche}) => {
    // const [recherche, setRecherche] = useState({
    //     status: 'cardio',
    //     jour: '',
    //     heure: ''
    // });
    const {DocteurSatus,list_docteurstatus}=useDocteurContext()
    const {RechercheDispo}=useRDVContext();
    useEffect(() => {
        list_docteurstatus()
    }, []);
    // const Handlechange = (event) => {
    //     const { name, value } = event.target;
    //     setRecherche({
    //         ...recherche,
    //         [name]: value
    //     });
    // };
    const Submit = () => {
        const date=`${recherche.jour}T${recherche.heure}:00Z`
        const dispo={
            "specialization":recherche.status,
            "ref_date":date
        }
        console.log(dispo)
        RechercheDispo(dispo)
    }

   if(!DocteurSatus) return <div>Loading ..</div>
    return (
        <div className='ml-[50px]'>
            <h1 style={{fontSize:'30px', fontWeight:'700', marginLeft:'30px', marginBottom:'20px', marginTop:'55px'}}>Recherche</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <form className="recherche-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <select name="status" value={recherche.status} onChange={Handlechange} class="w-[291px] h-[50px] ml-[32px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            DocteurSatus.map((data) => (
                                <option key={data.id} value={data.specialite}>{data.specialite}</option>
                            ))
                        }
                    </select>

                    <input
                        type="date"
                        name="jour"
                        value={recherche.jour}
                        onChange={Handlechange}
                        style={{ width: '150px', height: '50px', marginLeft: '10px', color: 'black', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}
                    />

                    <input type="time" name="heure" value={recherche.heure} onChange={Handlechange} class="ml-[10px] bg-gray-50 border h-[50px] leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[135px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" required />
                </form>
                <button style={{ width: '188px', height: '50px' }} onClick={Submit} className="ml-[300px] bg-black text-white text-[15px] font-[700] inline-flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                    Rechercher
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14.21px] h-[14.22px] ml-1">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </button>

            </div>

        </div>
    );
};

export default Rechercher;