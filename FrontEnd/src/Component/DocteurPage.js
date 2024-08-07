import React, { useEffect, useState } from 'react';
import '../Styles/DocteurPage.css'
import Ajout_docteur from './SC_DocteurPage/Ajout_docteur';
import InfoDocteur from './SC_DocteurPage/InfoDocteur';
import { useDocteurContext } from './Context/ContextDocteur';
import Modif_docteur from './SC_DocteurPage/Modif_docteur';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const DocteurPage = () => {
    const [recherche, setRecherche] = useState('');
    const [openProps, setOpenProps] = useState(false);
    const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(null);
    const [openAjout, setopenAjout] = useState(false);
    const [openModif, setopenModif] = useState(false);
    const navigate = useNavigate();

    const { docinfo } = useDocteurContext()
    const [docteurInfo, setDocteurInfo] = useState(null);
    const { Docteur, delete_docteur } = useDocteurContext();
    const handleInputChange = (e) => {
        setRecherche(e.target.value);
        handleDropdownToggle(null)
    }

    const handleDropdownToggle = (index) => {
        setSelectedDropdownIndex(index === selectedDropdownIndex ? null : index);
    }

    const renderDropdown = (index, docteur) => {
        if (index === selectedDropdownIndex) {
            return (
                <div className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" style={{ position: 'absolute', marginTop: '38px' }}>
                    <ul className="py-2" aria-labelledby="dropdownButton">
                        <li
                            onClick={() => {
                                setopenModif(true);
                                setDocteurInfo(docteur);
                                handleDropdownToggle(index)
                            }}
                        >
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Modifier</a>
                        </li>
                        <li onClick={() => {
                            handleDropdownToggle(index)
                            delete_docteur(docteur.matricule)
                        }
                        }>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Supprimer</a>
                        </li>
                    </ul>
                </div>
            );
        }
        return null;
    }


    const renderCards = () => {
        const cardsPerRow = 5;
        const rows = [];

        for (let i = 0; i < Docteur.length; i += cardsPerRow) {
            const row = Docteur.slice(i, i + cardsPerRow);
            rows.push(row);
        }

        return (
            <div className="flex flex-wrap -mx-4">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex w-full">
                        {row.map((medecin, idx) => (
                            <div className="w-1/5 px-4" key={rowIndex * cardsPerRow + idx}>
                                <div className="card mt-[10px]" key={rowIndex * cardsPerRow + idx}>
                                    <div className="w-[190px] h-[173px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <div className="flex space-between ml-[40px] mt-[10px]">
                                            <img
                                                onClick={() => {
                                                    docinfo(medecin.matricule)
                                                    navigate('/DocteurInfo')
                                                }}
                                                className="w-16 h-16 ml-4 mr-4 mt-4 rounded-full shadow-lg"
                                                src={medecin.Photo}
                                                alt="Doctor image"
                                            />

                                            <button onClick={() => handleDropdownToggle(rowIndex * cardsPerRow + idx)} className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                                <svg className="w-[11.67px] h-[1.67px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                </svg>
                                            </button>
                                            {renderDropdown(rowIndex * cardsPerRow + idx, medecin)}
                                        </div>
                                        <div className='flex flex-col items-center pb-10' onClick={() => {
                                            docinfo(medecin.matricule)
                                            navigate('/DocteurInfo')
                                        }}>
                                            <h5 className="mt-[10px] mb-1 text-xl font-medium text-gray-900 dark:text-white">{medecin.nom}</h5>
                                            <div className="flex items-center"> {/* Container for icon and text */}
                                                {medecin.specialization === 'Cardiologue' ? (
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C8.01088 2.5 6.10322 3.29018 4.6967 4.6967C3.29018 6.10322 2.5 8.01088 2.5 10C2.5 11.9891 3.29018 13.8968 4.6967 15.3033C6.10322 16.7098 8.01088 17.5 10 17.5ZM9.80667 13.0333L13.9733 8.03333L12.6933 6.96667L9.11 11.2658L7.25583 9.41083L6.0775 10.5892L8.5775 13.0892L9.2225 13.7342L9.80667 13.0333Z" fill="#61DF75" />
                                                    </svg>
                                                ) : (
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 17.5C11.4849 17.5 12.4602 17.306 13.3701 16.9291C14.2801 16.5522 15.1069 15.9997 15.8033 15.3033C16.4997 14.6069 17.0522 13.7801 17.4291 12.8701C17.806 11.9602 18 10.9849 18 10C18 9.01509 17.806 8.03982 17.4291 7.12987C17.0522 6.21993 16.4997 5.39314 15.8033 4.6967C15.1069 4.00026 14.2801 3.44781 13.3701 3.0709C12.4602 2.69399 11.4849 2.5 10.5 2.5C8.51088 2.5 6.60322 3.29018 5.1967 4.6967C3.79018 6.10322 3 8.01088 3 10C3 11.9891 3.79018 13.8968 5.1967 15.3033C6.60322 16.7098 8.51088 17.5 10.5 17.5ZM10.3067 13.0333L14.4733 8.03333L13.1933 6.96667L9.61 11.2658L7.75583 9.41083L6.5775 10.5892L9.0775 13.0892L9.7225 13.7342L10.3067 13.0333Z" fill="#2554F9" />
                                                    </svg>
                                                )}
                                                <p className={`text-[15px] font-[700] ml-1 ${medecin.specialization === 'Cardiologue' ? 'text-[#61DF75]' : 'text-[#2554F9]'} dark:text-gray-400`}>{medecin.specialization}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                ))}
            </div>
        );
    }



    // Assuming Docteur and other variables are defined elsewhere


    // Assuming Docteur and other variables are defined elsewhere




    return (
        <div>
            <div className='ml-[50px]'>
                <div className="title" style={{ display: 'flex' }}>
                    <div className='title-title'>Liste des médecins</div>
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
                        <div>

                            <button style={{ marginLeft: '10px' }} onClick={() => {
                                setopenAjout(true);
                            }} type="button" class="w-[139px] h-[60px] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                Ajouter

                            </button>
                        </div>
                    </div>

                </div>
                <div className="bodyCard">
                    {renderCards()}
                </div>
                <Ajout_docteur
                    openprops={openAjout}
                    CloseDialog={() => {
                        setopenAjout(false);
                    }}
                />
                {docteurInfo && (
                    <InfoDocteur
                        openprops={openProps}
                        docteurinfo={docteurInfo}
                        CloseDialog={() => {
                            setOpenProps(false);
                            setDocteurInfo(null);
                        }}
                    />

                )}
                {docteurInfo && (
                    <Modif_docteur
                        openprops={openModif}
                        docteurInfo={docteurInfo}
                        CloseDialog={() => {
                            setopenModif(false);
                            setDocteurInfo(null);
                        }}
                    />
                )}
            </div>
            <div className='mt-[200px]'></div>
            <Footer />
        </div>
    );
};

export default DocteurPage;

const medecins = [
    {
        "nom": "Jean Dupont",
        "domaine": "Génicologue",
        "grade": "Spécialiste",
    },
    {
        "nom": "Marie Martin",
        "domaine": "Dentiste",
        "grade": "Généraliste",
    },
    // Ajoutez d'autres objets médecin ici si nécessaire
];
