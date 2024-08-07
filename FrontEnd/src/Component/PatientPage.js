import React, { useEffect, useState } from 'react';
import '../Styles/DocteurPage.css'
import Ajout_client from './SC_PatientPage/Ajout_client';
import { useUsersContext } from './Context/ContextUser';
import Historique from './SC_PatientPage/Historique';
import Footer from './Footer';


const PatientPage = () => {
    const [recherche, setRecherche] = useState('');
    const { HistoriqueUser, Alluser, deleteUserList, Changeadmin } = useUsersContext()
    const [openProps, setOpenProps] = useState(false);
    const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(null);
    const [openAjout, setopenAjout] = useState(false);

    console.log(Alluser)
    const handleInputChange = (e) => {
        setRecherche(e.target.value);
    }

    const handleDropdownToggle = (index) => {
        setSelectedDropdownIndex(index === selectedDropdownIndex ? null : index);
    }

    const renderDropdown = (index, patient) => {
        if (index === selectedDropdownIndex) {
            return (
                <div className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" style={{ position: 'absolute', marginTop: '38px' }}>
                    <ul className="py-2" aria-labelledby="dropdownButton">

                        <li onClick={() => {
                            HistoriqueUser(patient.id)
                            setOpenProps(true);
                            handleDropdownToggle(index)
                        }}>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Historique</a>
                        </li>
                        {patient.is_staff
                            ?
                            <td className="px-6 py-4 font-bold">
                                <li onClick={() => {
                                    handleDropdownToggle(index)
                                    Changeadmin(patient.id, !patient.is_staff)
                                }}>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Retirer en administrateur</a>
                                </li>
                            </td> :
                            <td>
                                <li onClick={() => {
                                    handleDropdownToggle(index)
                                    Changeadmin(patient.id, !patient.is_staff)
                                }}>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Ajouter en administrateur</a>
                                </li>
                            </td>
                        }

                    </ul>
                </div>
            );
        }
        return null;
    }

    const renderCards = () => {
        // Assurez-vous que user est un objet valide avant de tenter d'accéder à ses propriétés
        if (Alluser === null) return <div>Loading...</div>;

        // Si user est un tableau et que vous voulez accéder au premier élément, vous pouvez le faire comme suit
        // const currentUser = Array.isArray(Alluser) && Alluser.length > 0 ? Alluser[0] : Alluser;
        console.log(Alluser)
        return Alluser.map((patient, index) => {
            const isoDate = patient.most_recent_reservation;
            const date = new Date(isoDate);

            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois sont indexés à partir de 0
            const year = date.getFullYear();

            const formattedDate = `${day}/${month}/${year}`;
            console.log(formattedDate); // Affiche "05/06/2024"

            if (patient.username.indexOf(recherche) === -1) {
                return null;
            }

            return (

                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex min-w-0 gap-x-4">
                            {
                                patient.UserPhoto === null ?
                                    <span className="h-6 w-6 flex-none rounded-full bg-gray-50">{patient.username[0]}</span> :
                                    <div className="flex items-center"> {/* Added flex container */}
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.125 9.25C2.95924 9.25 2.80027 9.18415 2.68306 9.06694C2.56585 8.94973 2.5 8.79076 2.5 8.625V3.62625C2.5 3.46049 2.56585 3.30152 2.68306 3.18431C2.80027 3.0671 2.95924 3.00125 3.125 3.00125H8.125C8.29076 3.00125 8.44973 3.0671 8.56694 3.18431C8.68415 3.30152 8.75 3.46049 8.75 3.62625V8.625C8.75 8.79076 8.68415 8.94973 8.56694 9.06694C8.44973 9.18415 8.29076 9.25 8.125 9.25H3.125ZM11.875 9.25C11.7092 9.25 11.5503 9.18415 11.4331 9.06694C11.3158 8.94973 11.25 8.79076 11.25 8.625V3.62625C11.25 3.46049 11.3158 3.30152 11.4331 3.18431C11.5503 3.0671 11.7092 3.00125 11.875 3.00125H16.8737C17.0395 3.00125 17.1985 3.0671 17.3157 3.18431C17.4329 3.30152 17.4987 3.46049 17.4987 3.62625V8.625C17.4987 8.79076 17.4329 8.94973 17.3157 9.06694C17.1985 9.18415 17.0395 9.25 16.8737 9.25H11.875ZM3.125 18C2.95924 18 2.80027 17.9342 2.68306 17.8169C2.56585 17.6997 2.5 17.5408 2.5 17.375V12.375C2.5 12.2092 2.56585 12.0503 2.68306 11.9331C2.80027 11.8158 2.95924 11.75 3.125 11.75H8.125C8.29076 11.75 8.44973 11.8158 8.56694 11.9331C8.68415 12.0503 8.75 12.2092 8.75 12.375V17.375C8.75 17.5408 8.68415 17.6997 8.56694 17.8169C8.44973 17.9342 8.29076 18 8.125 18H3.125ZM11.875 18C11.7092 18 11.5503 17.9342 11.4331 17.8169C11.3158 17.6997 11.25 17.5408 11.25 17.375V12.375C11.25 12.2092 11.3158 12.0503 11.4331 11.9331C11.5503 11.8158 11.7092 11.75 11.875 11.75H16.8737C17.0395 11.75 17.1985 11.8158 17.3157 11.9331C17.4329 12.0503 17.4987 12.2092 17.4987 12.375V17.375C17.4987 17.5408 17.4329 17.6997 17.3157 17.8169C17.1985 17.9342 17.0395 18 16.8737 18H11.875Z" fill="#D9D9D9" />
                                        </svg>
                                        <img className="ml-[5px] w-[45px] h-[45px] h-6 w-6 flex-none rounded-full bg-gray-50" src={patient.UserPhoto} alt="" />
                                    </div>
                            }
                            <p className="font-bold text-[15px] leading-6 text-gray-900">{patient.username}</p>
                        </div>

                    </td>
                    <td className="px-6 text-[#7B788D] font-[700] py-4">{patient.email}</td>
                    <td style={{ color: '#7B788D' }} className=" px-6 py-4">
                        <div style={{ marginLeft: '100px', backgroundColor: '#D9D9D9', borderRadius: '100px', width: '134px', height: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            {patient.contact}
                        </div>
                    </td>
                    {patient.is_staff
                        ?
                        <td className="px-6 py-4 font-bold">
                            Admin
                        </td> :
                        <td>
                            Client
                        </td>

                    }
                    <td className="px-6 py-4 font-bold">
                        {formattedDate}

                    </td>

                    <td className="px-6 py-4 " >
                        <div className="flex justify-end px-4 pt-4">
                            <button onClick={() => handleDropdownToggle(index)} className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>
                            {renderDropdown(index, patient)}
                        </div>
                    </td>
                </tr>


            );
        });
    }

    return (

        <div>
            <div className='ml-[100px]'>

            <div className="title" style={{ display: 'flex' }}>
                <div className='title-title'>Liste des utlisateurs</div>
                <div className='right-title flex items-center'>
                    {/* recherche */}
                    <div className="flex rounded-lg shadow-sm">
                        <input
                            placeholder='Recherche...'
                            type="text"
                            id="hs-trailing-button-add-on-with-icon"
                            name="recherche"
                            value={recherche}
                            onChange={handleInputChange}
                            className="w-[267px] py-3 px-4 block border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        />
                        <button
                            type="button"
                            className="w-[60px] h-[60px] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-black text-white hover:bg-black disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <svg
                                className="flex-shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </button>
                    </div>

                </div>

            </div>
            <div className="bodyCard">
                <div className="relative overflow-x-auto rounded-lg">
                    <table className="w-[1080px] ml-[21px] text-sm text-left rtl:text-right text-black dark:text-gray-400">
                        <thead style={{ borderRadius: '10px 10px 0 0' }} className="text-center text-xs text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-black rounded-lg">
                            <tr>
                                <th scope="col" style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }} className="px-6 py-3">
                                    Nom et Prénoms
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contact
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    dernière visite
                                </th>

                                <th scope="col" style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} className="px-6 py-3"></th>
                            </tr>
                        </thead>

                        <tbody className="text-center  px-6 py-3" >
                            {renderCards()}
                        </tbody>
                    </table>
                    <Ajout_client
                        openprops={openAjout}
                        CloseDialog={() => {
                            setopenAjout(false);
                        }}
                    />
                    <Historique
                        openprops={openProps}
                        CloseDialog={() => {
                            setOpenProps(false);
                        }}
                    />
                </div>

            </div>
            <div className='mb-[50px]'></div>
            </div>
            <Footer />
        </div>
    );
};

export default PatientPage;

