import React from 'react';

import "../Styles/accueil.css"
import { useNavigate } from 'react-router-dom';
import Historique from './SC_MonCompte/Historique';
const PageAcceuil = () => {
    const navigate = useNavigate();
    return (
        <div className='mt-[51px] ml-[54px]'>
            <div className="searchTop">
                <p className="searchTopText">Vos précédents programmes</p>
                <button className="searchTopButton mr-[200px]" onClick={() => {
                    navigate('/rdv')
                }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 10.8317H10.8333V14.9983C10.8333 15.2194 10.7455 15.4313 10.5893 15.5876C10.433 15.7439 10.221 15.8317 10 15.8317C9.77898 15.8317 9.56702 15.7439 9.41074 15.5876C9.25446 15.4313 9.16666 15.2194 9.16666 14.9983V10.8317H5C4.77898 10.8317 4.56702 10.7439 4.41074 10.5876C4.25446 10.4313 4.16666 10.2194 4.16666 9.99834C4.16666 9.77733 4.25446 9.56537 4.41074 9.40909C4.56702 9.25281 4.77898 9.16501 5 9.16501H9.16666V4.99834C9.16666 4.77733 9.25446 4.56537 9.41074 4.40909C9.56702 4.25281 9.77898 4.16501 10 4.16501C10.221 4.16501 10.433 4.25281 10.5893 4.40909C10.7455 4.56537 10.8333 4.77733 10.8333 4.99834V9.16501H15C15.221 9.16501 15.433 9.25281 15.5893 9.40909C15.7455 9.56537 15.8333 9.77733 15.8333 9.99834C15.8333 10.2194 15.7455 10.4313 15.5893 10.5876C15.433 10.7439 15.221 10.8317 15 10.8317Z" fill="white" />
                    </svg>

                    <p className='search-text'>Rendez-vous</p>
                </button>
            </div>
            <div className='history-home'>
                <Historique></Historique>
            </div>
        </div>
    );
};

export default PageAcceuil;