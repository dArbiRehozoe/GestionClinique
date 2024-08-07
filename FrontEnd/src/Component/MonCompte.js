import React, { useEffect } from 'react';
import { useUsersContext } from './Context/ContextUser';
import ModifUser from './SC_MonCompte/ModifUser';
import { useState } from 'react';
import "../Styles/MonCompte.css"
import Changemdp from './SC_MonCompte/Changemdp';
import Historique from './SC_MonCompte/Historique';
import Footer from './Footer';
const MonCompte = () => {

    const apikey = process.env.REACT_APP_API_URL;
    const [open, setopen] = useState(false);
    const [openMdp, setopenmdp] = useState(false);
    const [fileAjout, setFileAjout] = useState({})
    const [confirmDelete, setConfirmDelete] = useState(false); // State variable for delete confirmation dialog
    const { user, deleteUser, Changephoto, HistoriqueUser } = useUsersContext();
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log(selectedFile)
        setFileAjout(event.target.files[0])
        Changephoto(event.target.files[0])
    }
    useEffect(() => {
        HistoriqueUser(user.id)
    }, []);

    // Assurez-vous que user est un objet valide avant de tenter d'accéder à ses propriétés
    if (!user) return <div>Loading...</div>;

    // Si user est un tableau et que vous voulez accéder au premier élément, vous pouvez le faire comme suit
    const currentUser = Array.isArray(user) && user.length > 0 ? user[0] : user;

    // Vous pouvez maintenant accéder aux propriétés de currentUser
    const avatar = `${currentUser.username}`[0];


    return (
        <div>
            <div className="profile">
                <img className='ml-[-100px] mt-[59px] w-[1400px] max-360:hidden' src={require("../Photos/background.png")} alt="Acceuil" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}  >
                        <div>
                            <label for="fileInput" class="custom-file-upload">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="28" rx="14" fill="white" />
                                    <path d="M16.5099 8.4399L15.3743 9.57542L18.4245 12.6254L19.5601 11.4899C20.1466 10.9033 20.1466 9.95314 19.5601 9.36661L18.6356 8.4399C18.049 7.85337 17.0988 7.85337 16.5122 8.4399H16.5099ZM14.844 10.1056L9.37477 15.5768C9.13076 15.8208 8.95244 16.1234 8.85389 16.4542L8.0233 19.2766C7.96464 19.476 8.01861 19.6895 8.16408 19.835C8.30955 19.9805 8.52306 20.0344 8.72015 19.9781L11.5428 19.1476C11.8736 19.0491 12.1763 18.8707 12.4203 18.6267L17.8942 13.1556L14.844 10.1056Z" fill="#545454" />
                                </svg>

                            </label>

                            <input id="fileInput" type="file" onChange={handleFileChange} />

                            <img className='image max-360:w-[40px] max-360:h-[40px] ' src={`${apikey}/${currentUser.UserPhoto}`} alt={avatar} /></div>
                        <div className='ml-[60px] mt-[-60px]'><p className='font-700 text-[35px]'>{currentUser.username}</p>
                            <div style={{ display: 'flex', justifyContent: 'align' }}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.3335 8L10.5002 10.9167L14.6668 8" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.16675 14.6667V6.33332C2.16675 5.8913 2.34234 5.46737 2.6549 5.15481C2.96746 4.84225 3.39139 4.66666 3.83341 4.66666H17.1667C17.6088 4.66666 18.0327 4.84225 18.3453 5.15481C18.6578 5.46737 18.8334 5.8913 18.8334 6.33332V14.6667C18.8334 15.1087 18.6578 15.5326 18.3453 15.8452C18.0327 16.1577 17.6088 16.3333 17.1667 16.3333H3.83341C3.39139 16.3333 2.96746 16.1577 2.6549 15.8452C2.34234 15.5326 2.16675 15.1087 2.16675 14.6667Z" stroke="black" stroke-width="1.25" />
                                </svg>

                                <p className='text-[15px] font-[700]'>{currentUser.email}</p></div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="horizontal-container mr-[100px]">
                            <button
                                onClick={() => {
                                    setopen(true);
                                }}
                                className="bg-white rounded-[50px] border-solid border-[1px] border-[#8E8B8B] text-[#545454] w-[101px] h-[36px] rounded-[10px] mt-[25px]"
                            >
                                Modifier
                            </button>
                            <button className="bg-white rounded-[50px] border-solid border-[1px] border-[#8E8B8B] text-[#545454] w-[136px] h-[36px] rounded-[10px] mt-[25px]"
                                onClick={() => {
                                    setopenmdp(true);
                                }}
                            >
                                Mot de passe
                            </button>
                            <button className="bg-white rounded-[50px] border-solid border-[1px] border-[#8E8B8B] text-[#545454] w-[114px] h-[36px] rounded-[10px] mt-[25px]"
                                onClick={() => {
                                    setConfirmDelete(true); // Open delete confirmation dialog
                                }}
                            >
                                Supprimer

                            </button>
                        </div>

                    </div>
                </div>
                <br />
            </div>
            <ModifUser

                openprops={open}
                CloseDialog={() => {
                    setopen(false);
                }}
            />
            <Changemdp

                openprops={openMdp}
                CloseDialog={() => {
                    setopenmdp(false);
                }}
            />
            {/* Blurred background */}
            {confirmDelete && <div className="blur-background" />}
            {/* Delete confirmation dialog */}
            {confirmDelete && (
                <div className="delete-confirmation-dialog flex items-center justify-center flex-col">
                    <svg className="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.5 4h13a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>

                    <p className="text-lg mt-4">Voulez-vous supprimer cet utilisateur ?</p>

                    <button
                        onClick={() => {
                            deleteUser(user.id);
                            setConfirmDelete(false); // Close the delete confirmation dialog after deletion
                        }}
                        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Oui
                    </button>

                    <button
                        onClick={() => setConfirmDelete(false)}
                        className="mt-2 text-gray-700 hover:text-gray-900"
                    >
                        Non
                    </button>
                </div>

            )}
            <div >
                <Footer />
            </div>
        </div>

    );
};

export default MonCompte;
