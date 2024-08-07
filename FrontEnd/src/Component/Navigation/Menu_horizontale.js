import '../../Styles/SideMenu.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUsersContext } from '../Context/ContextUser';

const SideMenu = () => {
  const { deconnection } = useUsersContext();
  const [isOpen, setIsOpen] = useState(true);
  const { user, UpdateUser } = useUsersContext();

  const [activeLink, setActiveLink] = useState('Acceuil');
  const [activeLinkOver, setActiveLinkOver] = useState(false);
  const [activeLinkHover, setActiveLinkHover] = useState(true);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleLinkClickOver = (link) => {
    setActiveLinkOver(!activeLinkOver);
    setActiveLinkHover(link)
  };
  if (!user) return <div>Veuillez vous connecter</div>;

  const currentUser = Array.isArray(user) && user.length > 0 ? user[0] : user;

  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img className='w-[20px] h-[20px]' src={require("../../Photos/menu.png")} />
        <img style={{ marginLeft: '20px' }} src={require("../../Photos/DocMe.png")} />
      </button>
      {isOpen && (
        <ul style={ulStyle}>
          <div className='deco1'></div>
          <div className='deco1'>
            <li style={activeLink === 'Acceuil' ? activeLiStyle : liStyle}>
              <Link
                style={linkStyle}
                to='/'
                onClick={() => handleLinkClick('Acceuil')}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require("../../Photos/acceuil.png")} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="Accueil" />
                  Acceuil
                  {activeLink === 'Acceuil' && <img src={require("../../Photos/active-page.png")} style={{ width: '35px', height: '35px', marginLeft: '55px' }} alt="Active" />}
                </span>
              </Link>
            </li>
          </div>
          {/* <div className='deco1'>
          <li style={activeLink === 'rdv' ? activeLiStyle : liStyle}>
            <Link
              style={linkStyle}
              to='/rdv'
              onClick={() => handleLinkClick('rdv')}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <img src={require("../../Photos/pin.png")} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="Consulter" />
                Consulter
                {activeLink === 'rdv' && <img src={require("../../Photos/active-page.png")} style={{ width: '35px', height: '35px', marginLeft: '38px' }} alt="Active" />}
              </span>
            </Link>

          </li>

        </div> */}
          <div className='deco1'>

            <li style={activeLink === 'MonCompte' ? activeLiStyle : liStyle}>
              <Link
                style={linkStyle}
                to='/MonCompte'
                onClick={() => handleLinkClick('MonCompte')}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require("../../Photos/account.png")} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="Compte" />
                  Compte
                  {activeLink === 'MonCompte' && <img src={require("../../Photos/active-page.png")} style={{ width: '35px', height: '35px', marginLeft: '51px' }} alt="Active" />}
                </span>
              </Link>

            </li>
          </div>
          {
            user.is_staff ?
              <div>
                <div className='deco1'>
                  <li style={activeLink === 'DocteurPage' ? activeLiStyle : liStyle}>
                    <Link
                      style={linkStyle}
                      to='/DocteurPage'
                      onClick={() => handleLinkClick('DocteurPage')}
                      className="flex items-center"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.69231 0.769226C6.42692 0.769226 5.38462 1.81153 5.38462 3.07692V4.61538H6.92308V3.07692C6.92308 2.64384 7.25923 2.30769 7.69231 2.30769H12.3077C12.7408 2.30769 13.0769 2.64384 13.0769 3.07692V4.61538H14.6154V3.07692C14.6154 1.81153 13.5731 0.769226 12.3077 0.769226H7.69231ZM2.30769 5.38461C1.69565 5.38461 1.10868 5.62774 0.675907 6.06052C0.243131 6.49329 0 7.08027 0 7.6923L0 16.9231C0 17.5351 0.243131 18.1221 0.675907 18.5549C1.10868 18.9876 1.69565 19.2308 2.30769 19.2308H17.6923C18.9662 19.2308 20 18.1969 20 16.9231V7.6923C20 7.08027 19.7569 6.49329 19.3241 6.06052C18.8913 5.62774 18.3043 5.38461 17.6923 5.38461H2.30769ZM10 7.62C10.6157 7.61949 11.2255 7.7404 11.7945 7.97579C12.3635 8.21119 12.8804 8.55647 13.3158 8.99186C13.7512 9.42725 14.0965 9.94422 14.3319 10.5132C14.5673 11.0822 14.6882 11.6919 14.6877 12.3077C14.6882 12.9234 14.5673 13.5332 14.3319 14.1022C14.0965 14.6712 13.7512 15.1881 13.3158 15.6235C12.8804 16.0589 12.3635 16.4042 11.7945 16.6396C11.2255 16.875 10.6157 16.9959 10 16.9954C9.38426 16.9959 8.77447 16.875 8.2055 16.6396C7.63653 16.4042 7.11957 16.0589 6.68417 15.6235C6.24878 15.1881 5.90351 14.6712 5.66811 14.1022C5.43271 13.5332 5.3118 12.9234 5.31231 12.3077C5.3118 11.6919 5.43271 11.0822 5.66811 10.5132C5.90351 9.94422 6.24878 9.42725 6.68417 8.99186C7.11957 8.55647 7.63653 8.21119 8.2055 7.97579C8.77447 7.7404 9.38426 7.61949 10 7.62ZM9.23077 10V11.5385H7.69231V13.0769H9.23077V14.6154H10.7692V13.0769H12.3077V11.5385H10.7692V10H9.23077Z" fill="#8E8B8B" />
                      </svg>


                      <span className="ml-2">Médecins</span>
                      {activeLink === 'DocteurPage' && <img src={require("../../Photos/active-page.png")} style={{ width: '35px', height: '35px', marginLeft: '51px' }} alt="Active" />}
                    </Link>
                  </li>
                </div>
                <div className='deco1'>
                  <li style={activeLink === 'PatientPage' ? activeLiStyle : liStyle}>
                    <Link
                      style={linkStyle}
                      to='/PatientPage'
                      onClick={() => handleLinkClick('PatientPage')}
                      className="flex items-center"
                    >
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 3.125C5.4212 3.125 4.62634 3.45424 4.04029 4.04029C3.45424 4.62634 3.125 5.4212 3.125 6.25V18.75C3.125 19.5788 3.45424 20.3737 4.04029 20.9597C4.62634 21.5458 5.4212 21.875 6.25 21.875H18.75C19.5788 21.875 20.3737 21.5458 20.9597 20.9597C21.5458 20.3737 21.875 19.5788 21.875 18.75V6.25C21.875 5.4212 21.5458 4.62634 20.9597 4.04029C20.3737 3.45424 19.5788 3.125 18.75 3.125H6.25ZM10.4167 8.33333C10.4167 8.05707 10.5264 7.79211 10.7218 7.59676C10.9171 7.40141 11.1821 7.29167 11.4583 7.29167H17.7083C17.9846 7.29167 18.2496 7.40141 18.4449 7.59676C18.6403 7.79211 18.75 8.05707 18.75 8.33333C18.75 8.6096 18.6403 8.87455 18.4449 9.0699C18.2496 9.26525 17.9846 9.375 17.7083 9.375H11.4583C11.1821 9.375 10.9171 9.26525 10.7218 9.0699C10.5264 8.87455 10.4167 8.6096 10.4167 8.33333ZM10.4167 12.5C10.4167 12.2237 10.5264 11.9588 10.7218 11.7634C10.9171 11.5681 11.1821 11.4583 11.4583 11.4583H17.7083C17.9846 11.4583 18.2496 11.5681 18.4449 11.7634C18.6403 11.9588 18.75 12.2237 18.75 12.5C18.75 12.7763 18.6403 13.0412 18.4449 13.2366C18.2496 13.4319 17.9846 13.5417 17.7083 13.5417H11.4583C11.1821 13.5417 10.9171 13.4319 10.7218 13.2366C10.5264 13.0412 10.4167 12.7763 10.4167 12.5ZM10.4167 16.6667C10.4167 16.3904 10.5264 16.1254 10.7218 15.9301C10.9171 15.7347 11.1821 15.625 11.4583 15.625H17.7083C17.9846 15.625 18.2496 15.7347 18.4449 15.9301C18.6403 16.1254 18.75 16.3904 18.75 16.6667C18.75 16.9429 18.6403 17.2079 18.4449 17.4032C18.2496 17.5986 17.9846 17.7083 17.7083 17.7083H11.4583C11.1821 17.7083 10.9171 17.5986 10.7218 17.4032C10.5264 17.2079 10.4167 16.9429 10.4167 16.6667ZM7.29167 7.29167C7.0154 7.29167 6.75045 7.40141 6.5551 7.59676C6.35975 7.79211 6.25 8.05707 6.25 8.33333C6.25 8.6096 6.35975 8.87455 6.5551 9.0699C6.75045 9.26525 7.0154 9.375 7.29167 9.375C7.56793 9.375 7.83393 9.26525 8.02928 9.0699C8.22463 8.87455 8.33438 8.6096 8.33438 8.33333C8.33438 8.05707 8.22463 7.79211 8.02928 7.59676C7.83393 7.40141 7.56793 7.29167 7.29167 7.29167ZM6.25 12.5C6.25 12.2237 6.35975 11.9588 6.5551 11.7634C6.75045 11.5681 7.0154 11.4583 7.29167 11.4583C7.56793 11.4583 7.83393 11.5681 8.02928 11.7634C8.22463 11.9588 8.33438 12.2237 8.33438 12.5C8.33438 12.7763 8.22463 13.0412 8.02928 13.2366C7.83393 13.4319 7.56898 13.5417 7.29271 13.5417C7.01644 13.5417 6.75045 13.4319 6.5551 13.2366C6.35975 13.0412 6.25 12.7763 6.25 12.5ZM7.29167 15.625C7.0154 15.625 6.75045 15.7347 6.5551 15.9301C6.35975 16.1254 6.25 16.3904 6.25 16.6667C6.25 16.9429 6.35975 17.2079 6.5551 17.4032C6.75045 17.5986 7.0154 17.7083 7.29167 17.7083C7.56793 17.7083 7.83393 17.5986 8.02928 17.4032C8.22463 17.2079 8.33438 16.9429 8.33438 16.6667C8.33438 16.3904 8.22463 16.1254 8.02928 15.9301C7.83393 15.7347 7.56793 15.625 7.29167 15.625Z" fill="#8E8B8B" />
                      </svg>
                      <span className="ml-2">Utilisateurs</span>
                      {activeLink === 'PatientPage' && <img src={require("../../Photos/active-page.png")} style={{ width: '35px', height: '35px', marginLeft: '5px' }} alt="Active" />}
                    </Link>
                  </li>
                </div>

                <div className='deco1'>
                  <li style={activeLink === 'Edt' ? activeLiStyle : liStyle}>
                    <Link
                      style={linkStyle}
                      to='/Edt'
                      onClick={() => handleLinkClick('Edt')}
                      className="flex items-center"
                    ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.45825 2.08333C6.45825 1.91757 6.39241 1.7586 6.2752 1.64139C6.15799 1.52418 5.99902 1.45833 5.83325 1.45833C5.66749 1.45833 5.50852 1.52418 5.39131 1.64139C5.2741 1.7586 5.20825 1.91757 5.20825 2.08333V3.39999C4.00826 3.49583 3.22159 3.73083 2.64326 4.30999C2.06409 4.88833 1.82909 5.67583 1.73242 6.87499H18.2674C18.1708 5.67499 17.9358 4.88833 17.3566 4.30999C16.7783 3.73083 15.9908 3.49583 14.7916 3.39916V2.08333C14.7916 1.91757 14.7257 1.7586 14.6085 1.64139C14.4913 1.52418 14.3323 1.45833 14.1666 1.45833C14.0008 1.45833 13.8419 1.52418 13.7246 1.64139C13.6074 1.7586 13.5416 1.91757 13.5416 2.08333V3.34416C12.9874 3.33333 12.3658 3.33333 11.6666 3.33333H8.33325C7.63409 3.33333 7.01242 3.33333 6.45825 3.34416V2.08333Z" fill="#8E8B8B" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.6665 10C1.6665 9.30083 1.6665 8.67917 1.67734 8.125H18.3223C18.3332 8.67917 18.3332 9.30083 18.3332 10V11.6667C18.3332 14.8092 18.3332 16.3808 17.3565 17.3567C16.3807 18.3333 14.809 18.3333 11.6665 18.3333H8.33317C5.19067 18.3333 3.619 18.3333 2.64317 17.3567C1.6665 16.3808 1.6665 14.8092 1.6665 11.6667V10ZM14.1665 11.6667C14.3875 11.6667 14.5995 11.5789 14.7558 11.4226C14.912 11.2663 14.9998 11.0543 14.9998 10.8333C14.9998 10.6123 14.912 10.4004 14.7558 10.2441C14.5995 10.0878 14.3875 10 14.1665 10C13.9455 10 13.7335 10.0878 13.5772 10.2441C13.421 10.4004 13.3332 10.6123 13.3332 10.8333C13.3332 11.0543 13.421 11.2663 13.5772 11.4226C13.7335 11.5789 13.9455 11.6667 14.1665 11.6667ZM14.1665 15C14.3875 15 14.5995 14.9122 14.7558 14.7559C14.912 14.5996 14.9998 14.3877 14.9998 14.1667C14.9998 13.9457 14.912 13.7337 14.7558 13.5774C14.5995 13.4211 14.3875 13.3333 14.1665 13.3333C13.9455 13.3333 13.7335 13.4211 13.5772 13.5774C13.421 13.7337 13.3332 13.9457 13.3332 14.1667C13.3332 14.3877 13.421 14.5996 13.5772 14.7559C13.7335 14.9122 13.9455 15 14.1665 15ZM10.8332 10.8333C10.8332 11.0543 10.7454 11.2663 10.5891 11.4226C10.4328 11.5789 10.2209 11.6667 9.99984 11.6667C9.77882 11.6667 9.56686 11.5789 9.41058 11.4226C9.2543 11.2663 9.1665 11.0543 9.1665 10.8333C9.1665 10.6123 9.2543 10.4004 9.41058 10.2441C9.56686 10.0878 9.77882 10 9.99984 10C10.2209 10 10.4328 10.0878 10.5891 10.2441C10.7454 10.4004 10.8332 10.6123 10.8332 10.8333ZM10.8332 14.1667C10.8332 14.3877 10.7454 14.5996 10.5891 14.7559C10.4328 14.9122 10.2209 15 9.99984 15C9.77882 15 9.56686 14.9122 9.41058 14.7559C9.2543 14.5996 9.1665 14.3877 9.1665 14.1667C9.1665 13.9457 9.2543 13.7337 9.41058 13.5774C9.56686 13.4211 9.77882 13.3333 9.99984 13.3333C10.2209 13.3333 10.4328 13.4211 10.5891 13.5774C10.7454 13.7337 10.8332 13.9457 10.8332 14.1667ZM5.83317 11.6667C6.05418 11.6667 6.26615 11.5789 6.42243 11.4226C6.57871 11.2663 6.6665 11.0543 6.6665 10.8333C6.6665 10.6123 6.57871 10.4004 6.42243 10.2441C6.26615 10.0878 6.05418 10 5.83317 10C5.61216 10 5.4002 10.0878 5.24392 10.2441C5.08763 10.4004 4.99984 10.6123 4.99984 10.8333C4.99984 11.0543 5.08763 11.2663 5.24392 11.4226C5.4002 11.5789 5.61216 11.6667 5.83317 11.6667ZM5.83317 15C6.05418 15 6.26615 14.9122 6.42243 14.7559C6.57871 14.5996 6.6665 14.3877 6.6665 14.1667C6.6665 13.9457 6.57871 13.7337 6.42243 13.5774C6.26615 13.4211 6.05418 13.3333 5.83317 13.3333C5.61216 13.3333 5.4002 13.4211 5.24392 13.5774C5.08763 13.7337 4.99984 13.9457 4.99984 14.1667C4.99984 14.3877 5.08763 14.5996 5.24392 14.7559C5.4002 14.9122 5.61216 15 5.83317 15Z" fill="#8E8B8B" />
                      </svg>

                      <span className='ml-2'> Agenda</span>
                      {activeLink === 'Edt' && <img src={require("../../Photos/active-page.png")} style={{ width: '35px', height: '35px', marginLeft: '51px' }} alt="Active" />}
                    </Link>
                  </li>
                </div>
              </div> : null
          }
          <div>
            <li className='deco-sup' style={{ position: 'absolute', bottom: '10%' }}>
              <Link
                style={linkStyle}
                onClick={() => {
                  deconnection();
                  window.history.replaceState(null, null, window.location.href);
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require("../../Photos/logout.png")} style={{ width: '20px', height: '20px', marginRight: '16px' }} alt="Déconnecter" />
                  Déconnecter
                </span>
              </Link>
            </li>
          </div>
        </ul>)}
    </div>
  );
};

export default SideMenu;

const ulStyle = {
  listStyleType: 'none',
  marginTop: 0,
  padding: 10,
  paddingTop: '0em',
  height: '100%',
  borderRight: '1px solid #D9D9D9'
};

const liStyle = {
  display: 'block',
  color: 'black',
  padding: '1px 2px',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  display: 'flex',
  borderRadius: '5px',
  marginTop: '20px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  transition: 'background-color 0.2s, color 0.2s',
};

const activeLiStyle = {
  ...liStyle,
  backgroundColor: '#EFEFEF',
  color: 'black',
  marginLeft: '15px'
};

const linkStyle = {
  display: 'flex',
  color: '#8E8B8B',
  padding: '8px 16px',
  textDecoration: 'none',
  marginLeft: '36px',
  width: '100%',
  marginRight: '32px'
};
