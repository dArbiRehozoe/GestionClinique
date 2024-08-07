import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRDVContext } from '../Context/ContextRDV';
import search from "../../Photos/search.png"
import searcheffect from "../../Photos/Search engines-bro.png"
import Footer from '../Footer';
const TableDisp = ({ recherche }) => {
    const [selectedHeures, setSelectedHeures] = useState({});
    const [selectedHoraireMedecinID, setSelectedHoraireMedecinID] = useState({});
    const { ConfirmeRDV, Dispo } = useRDVContext();
    const navigate = useNavigate();

    const handlechange = (doctorIndex, heure, horaireMedecinID) => {
        setSelectedHeures({
            [doctorIndex]: heure
        });
        setSelectedHoraireMedecinID({
            [doctorIndex]: horaireMedecinID
        });
    };

    const isValueSelected = (doctorIndex) => {
        return selectedHeures.hasOwnProperty(doctorIndex);
    };

    const formatHeure = (heure) => {
        const [hours, minutes] = heure.split(':');
        const date = new Date();
        date.setHours(parseInt(hours) + 3);
        date.setMinutes(parseInt(minutes));
        return date.toTimeString().slice(0, 5);
    };

    if (!Dispo || Dispo === undefined) return<div className="searchBottom">
    <img className="w-[374px] h-[349px] ml-[30%]" src={searcheffect} alt="search"/>
    <p className="ml-[38%] text-[#8E8B8B] text-[15px]">Veuillez entrer une date</p>
</div> ;
    
    console.log(Dispo)
    if(Dispo.length===0) return <div className="searchBottom">
    <img className="ml-[300px]" src={search} alt="search"/>
    <p className="ml-[240px] text-[#8E8B8B]">Aucun docteur n'est disponible à cette date, veuillez en choisir une autre</p>
</div> ;
    return (

        <div className="relative ml-[100px] overflow-x-auto w-[1062px]">
            <h1 style={{ fontWeight: '700', fontSize: '30px' }}>Nos médecins disponibles</h1>


            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead style={{ borderRadius: '10px' }} className="text-xs text-gray-700 bg-[#EFEFEF]">
                    <tr>
                        <th
                            scope="col"
                            className="text-px-6 py-3 text-black text-[15px] bold-[700]"
                            style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
                        >
                            <p className='ml-[60px]'>Nom et prénoms</p>
                        </th>
                        <th scope="col" className="px-6 py-3 text-black text-[15px] bold-[700]">
                            Grade
                        </th>
                        <th scope="col" className="px-6 py-3 text-black text-[15px] bold-[700]">
                            Domaine
                        </th>
                        <th scope="col" className="px-6 py-3 text-black text-[15px] bold-[700]">
                            Disponibilité
                        </th>
                        <th scope="col" className="px-6 py-3 text-black text-[15px] bold-[700]" style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {Dispo.map((data, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                                <div className="flex min-w-0 gap-x-4">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.125 9.25C2.95924 9.25 2.80027 9.18415 2.68306 9.06694C2.56585 8.94973 2.5 8.79076 2.5 8.625V3.62625C2.5 3.46049 2.56585 3.30152 2.68306 3.18431C2.80027 3.0671 2.95924 3.00125 3.125 3.00125H8.125C8.29076 3.00125 8.44973 3.0671 8.56694 3.18431C8.68415 3.30152 8.75 3.46049 8.75 3.62625V8.625C8.75 8.79076 8.68415 8.94973 8.56694 9.06694C8.44973 9.18415 8.29076 9.25 8.125 9.25H3.125ZM11.875 9.25C11.7092 9.25 11.5503 9.18415 11.4331 9.06694C11.3158 8.94973 11.25 8.79076 11.25 8.625V3.62625C11.25 3.46049 11.3158 3.30152 11.4331 3.18431C11.5503 3.0671 11.7092 3.00125 11.875 3.00125H16.8737C17.0395 3.00125 17.1985 3.0671 17.3157 3.18431C17.4329 3.30152 17.4987 3.46049 17.4987 3.62625V8.625C17.4987 8.79076 17.4329 8.94973 17.3157 9.06694C17.1985 9.18415 17.0395 9.25 16.8737 9.25H11.875ZM3.125 18C2.95924 18 2.80027 17.9342 2.68306 17.8169C2.56585 17.6997 2.5 17.5408 2.5 17.375V12.375C2.5 12.2092 2.56585 12.0503 2.68306 11.9331C2.80027 11.8158 2.95924 11.75 3.125 11.75H8.125C8.29076 11.75 8.44973 11.8158 8.56694 11.9331C8.68415 12.0503 8.75 12.2092 8.75 12.375V17.375C8.75 17.5408 8.68415 17.6997 8.56694 17.8169C8.44973 17.9342 8.29076 18 8.125 18H3.125ZM11.875 18C11.7092 18 11.5503 17.9342 11.4331 17.8169C11.3158 17.6997 11.25 17.5408 11.25 17.375V12.375C11.25 12.2092 11.3158 12.0503 11.4331 11.9331C11.5503 11.8158 11.7092 11.75 11.875 11.75H16.8737C17.0395 11.75 17.1985 11.8158 17.3157 11.9331C17.4329 12.0503 17.4987 12.2092 17.4987 12.375V17.375C17.4987 17.5408 17.4329 17.6997 17.3157 17.8169C17.1985 17.9342 17.0395 18 16.8737 18H11.875Z" fill="#D9D9D9" />
                                    </svg>
                                    <img className="h-6 w-6 flex-none rounded-[45px] bg-gray-50" src={data.Photo} alt="" />
                                    <p className="text-sm font-semibold leading-6 text-black font-[15px]">{data.nom}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-[#7B788D] text-[15px] font-[700]">{data.grade}</td>
                            <td className="px-6 py-4">{data.specialization}</td>
                            <td className="px-6 py-4">
                                <form className='text-black font-[700] text-[13px]'>
                                    {data.disponibility.map((heure, heureIndex) => (
                                        <div key={heureIndex} style={{ display: 'flex' }}>
                                            <input
                                                onChange={() => handlechange(index, heure, data.horaireMedecinID[heureIndex])}
                                                type="radio"
                                                checked={selectedHeures[index] === heure}
                                                name={`heure_${index}`}
                                                value={heure}
                                                id={`heure_${index}_${heureIndex}`}
                                            />
                                            <label htmlFor={`heure_${index}_${heureIndex}`}>{formatHeure(heure)}</label>
                                        </div>
                                    ))}
                                </form>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    className={isValueSelected(index) ?
                                        "inline-flex w-[90px] h-[36px] justify-center rounded-[5px] bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                                        :
                                        "bg-white text-black px-4 py-2 rounded disabled opacity-50 cursor-not-allowed"
                                    }
                                    onClick={() => {
                                        const date = `${recherche}T${selectedHeures[index]}:00Z`;
                                        const horaireMedecinIDSelect = selectedHoraireMedecinID[index];
                                        ConfirmeRDV(data, date, horaireMedecinIDSelect);
                                        navigate('/ConfirmerReservarion');
                                    }}
                                    disabled={!isValueSelected(index)}
                                >
                                    Consulter
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableDisp;
