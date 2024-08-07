import React, { useState, useRef, useEffect } from 'react';
import '../Styles/Acceuil.css';
import { useNavigate } from 'react-router-dom';
import { useUsersContext } from './Context/ContextUser';
import Footer from './Footer';
import PageAcceuil from './PageAcceuil';
import ListeDocteur from './ListDocteur';

function Acceuil() {
    const homeRef = useRef(null);
    const goalsRef = useRef(null);
    const contactsRef = useRef(null);
    const doctorsRef = useRef(null);
    const { user } = useUsersContext();
    const [activeButton, setActiveButton] = useState('Home');
    const navigate = useNavigate();

    // Function to set active button and scroll to section
    const scrollToSection = (ref, buttonName) => {
        setActiveButton(buttonName);
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    // Update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { ref: homeRef, name: 'Home' },
                { ref: goalsRef, name: 'Goals' },
                { ref: contactsRef, name: 'Contact' },
                { ref: doctorsRef, name: 'Doctors' }
            ];

            for (const section of sections) {
                const { ref, name } = section;
                if (ref.current && ref.current.getBoundingClientRect().top < window.innerHeight * 0.5) {
                    setActiveButton(name);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [homeRef, goalsRef, contactsRef, doctorsRef]);

    return (
        <div className='total-home' >
         {user.length === 1 ?
         <div>
            <div style={{display:'flex'}}>
            <p className='docme-pc' style={{marginLeft:'10px',marginTop:'4px'}}>DocMe</p>
            <button className='login-button-home1' onClick={() => navigate('/Login')}>Se connecter</button>
            </div>
            <div className='home-head'>
                <div className='left-head-home'>
                    <p className='docme-pc'>DocMe</p>
                    <button
                        style={{ marginRight: '79px', borderBottom: activeButton === 'Home' ? 'black solid 2px' : 'none' }}
                        onClick={() => scrollToSection(homeRef, 'Home')}
                    >
                        Acceuil
                    </button>
                    <button
                        style={{ marginRight: '79px', borderBottom: activeButton === 'Goals' ? 'black solid 2px' : 'none' }}
                        onClick={() => scrollToSection(goalsRef, 'Goals')}
                    >
                        Objectifs
                    </button>
                    <button
                        style={{ marginRight: '79px', borderBottom: activeButton === 'Contact' ? 'black solid 2px' : 'none' }}
                        onClick={() => scrollToSection(contactsRef, 'Contact')}
                    >
                        Contact
                    </button>
                    <button
                        style={{ borderBottom: activeButton === 'Doctors' ? 'black solid 2px' : 'none' }}
                        onClick={() => scrollToSection(doctorsRef, 'Doctors')}
                    >
                        Nos médecins
                    </button>
                </div>
               
                    <div className='right-head-home'>
                        <button className='login-button-home' onClick={() => navigate('/Login')}>Se connecter</button>
                        <button className='signup-button-home' onClick={() => navigate('/Register')}>Créer</button>
                    </div> 
            </div>

            <div className="main-content">
                <div ref={homeRef} className='home' >
                    <div style={{ width: '468px'}} className='max-360:ml-[28px] acc' >
                        <p className='max-360:text-[25px] w-[468px] text-[45px] font-[800]'>Votre santé,</p>
                        <p className='max-360:text-[25px] w-[468px] text-[45px] font-[800]'>C'est notre priorité</p>
                        <span className='max-360:text-[12px] max-360:font-[500]' style={{ marginTop: '12px' }}>Prenez le contrôle de votre santé, facilement et </span>
                        <span className='max-360:text-[12px]' >rapidement, avec notre plateforme. Simplifiez vos </span>
                        <span className='max-360:text-[12px]'  style={{ marginBottom: '12px' }}>rendez-vous en quelques clics seulement!</span>
                        <button className='bg-[#FA6F1E] text-white max-360:w-[138px] max-360:text-[15px] max-360:h-[32px] w-[170px] h-[52px] rounded-[5px] text-[18px] font-[800]'>Commencer</button>
                    </div>
                    <div className='w-[450px] max-360:ml-[55px] max-360:w-[249px] max-360:h-[208px] h-[382px] mt-[68px] imgacc'>
                        <img src={require("../Photos/acceuil1.png")} alt="Acceuil" />
                    </div>
                </div>

                <div ref={goalsRef} className='goal'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='goaltext'>
                        <div className='goal-text' style={{ textAlign: 'center' }}>
                            <p className='max-360:text-[25px] font-[800] text-[40px]'>Nos objectifs</p>
                            <p className='max-360:text-[25px] font-[800] text-[40px]'> pour vous rendre services</p>
                            <p className='max-360:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>

                    <div className='three-goals'>
                        <div className='w-[344px] max-360:ml-[48px]  max-360:w-[264px] max-360:h-[209px]  h-[314px] border-solid border-[1px] border-[#8E8B8B] rounded-[12px] blockdata'>
                            <div style={{ marginLeft: '35px', marginTop: '30px' }}>
                                <img className='w-[70px] h-[70px] max-360:w-[40px] max-360:h-[40px]' src={require("../Photos/clock-goal.png")} alt="Clock Goal" />
                                <p className='font-[800] max-360:text-[18px] max-360:mt-[20px] text-[23px] mt-[40px]'>Accessibilité accrue</p>
                                <span className='w-[274px] max-360:w-[224px] text-[#545454] max-360:text-[12px] text-[15px]'>Les patients peuvent prendre des rendez-vous 24h/24, 7j/7, depuis n'importe quel appareil connecté à Internet, ce qui permet une flexibilité maximale pour les clients occupés.</span>
                            </div>
                        </div>
                        <div className='w-[344px] max-360:ml-[48px] max-360:mt-[10px] max-360:w-[264px] max-360:h-[209px]  h-[314px] border-solid border-[1px] border-[#8E8B8B] rounded-[12px] blockdata'>
                            <div style={{ marginLeft: '35px', marginTop: '30px' }}>
                                <img className='w-[70px] h-[70px] max-360:w-[40px] max-360:h-[40px]' src={require("../Photos/clock-goal.png")} alt="Clock Goal" />
                                <p className='font-[800] max-360:text-[18px] max-360:mt-[20px] text-[23px] mt-[40px]'>Accessibilité accrue</p>
                                <span className='w-[274px] max-360:w-[224px] text-[#545454] max-360:text-[12px] text-[15px]'>Les patients peuvent prendre des rendez-vous 24h/24, 7j/7, depuis n'importe quel appareil connecté à Internet, ce qui permet une flexibilité maximale pour les clients occupés.</span>
                            </div>
                        </div>
                        <div className='w-[344px] max-360:ml-[48px] max-360:mt-[10px] max-360:w-[264px] max-360:h-[209px]  h-[314px] border-solid border-[1px] border-[#8E8B8B] rounded-[12px] blockdata'>
                            <div style={{ marginLeft: '35px', marginTop: '30px' }}>
                                <img className='w-[70px] h-[70px] max-360:w-[40px] max-360:h-[40px]' src={require("../Photos/clock-goal.png")} alt="Clock Goal" />
                                <p className='font-[800] max-360:text-[18px] max-360:mt-[20px] text-[23px] mt-[40px]'>Accessibilité accrue</p>
                                <span className='w-[274px] max-360:w-[224px] text-[#545454] max-360:text-[12px] text-[15px]'>Les patients peuvent prendre des rendez-vous 24h/24, 7j/7, depuis n'importe quel appareil connecté à Internet, ce qui permet une flexibilité maximale pour les clients occupés.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={contactsRef} className='contact'>
                    <div className='contact-margin'>
                        <p className='font-[700] max-360:text-[20px] text-[35px] text-[white]'>Découvrez comment sont</p>
                        <p className='font-[700] max-360:text-[20px] text-[35px] text-[white]'>nos services en vous abonnant</p>
                        <span className='max-360:text-[12px]' style={{ color: 'white' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                        <span className='max-360:text-[12px] max-360:mb-[15px] mb-[20px] '  style={{ color: 'white'}}>elit, sed do eiusmod tempor</span>
                        <button className='bg-[#FA6F1E] text-white w-[180px] h-[52px] max-360:w-[135px] max-360:h-[38px] max-360:text-[15px] rounded-[5px] font-[800] text-[18px]' >S'abonner</button>
                    </div>
                        <div  style={{ width: '350px', height: '350px' }} >
                            <img src={require("../Photos/acceuil2.png")} alt="Acceuil" />
                        </div>
                </div>

                <div ref={doctorsRef} className='doctor'>
                    <div style={{ display: 'flex', justifyContent: 'center' }} className='goaltext'>
                        <div className='goal-text' style={{ textAlign: 'center' }}>
                            <p className='font-[800] text-[40px] max-360:text-[20px]'>Un aperçu des docteurs</p>
                            <p className='font-[800] text-[40px] max-360:text-[20px]'> qui vous prendront en charge</p>
                            <p className='max-360:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                       
                    </div>
                    <div className='contenaireflex'>
                            <ListeDocteur></ListeDocteur>
                    </div>
                </div>
            </div> 
            </div>
            : <PageAcceuil></PageAcceuil>
            }
                <div className='footer-home' ><Footer /></div>
        </div>
    );
}

export default Acceuil;

