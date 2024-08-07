import React, { useState } from "react";
import { useUsersContext } from "./Context/ContextUser";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../Styles/Login.css'
import { Link } from "react-router-dom";

function Login() {
  const [formValue, setFormValue] = useState({});
  const { Login } = useUsersContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async (e) => {

    e.preventDefault();
    const donner = {
      'username': formValue.pseudo,
      'password': formValue.mdp,
    }
    Login(donner)

    // Maintenant, vous avez toutes les valeurs dans l'objet toutesLesValeurs
    // console.log(toutesLesValeurs);
    // Login(toutesLesValeurs);
  };

  return (

    <div className="divMere">
      <div className="blurlogin">
      </div>
      <div className="contenairelogin">

        <div className="divinput">
          <a

            to='/'

          >
            {/* <img 
          src={require("../photos/logo.jpg")}
          width="10%" height="10%"
          alt="" /> */}

          </a>
          <div className="docme">DocMe</div>
          <div className="all-shit" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="item1 w-[774px] h-[770px] bg-black" >
              <img style={{ width: '461px', height: '466px', marginLeft: '186px', marginTop: '90px' }} className="login-pic" src={require("../Photos/login.jpg")} /></div>
            <div className="item2" style={{ marginLeft: '137px' }}>
              <div style={{ marginTop: '40px' }} className="form">
                <h1 style={{ fontWeight: '800', fontSize: '30px' }}>Se connecter</h1>
                <label class="block text-sm font-bold mt-[30px] mb-[10px] dark:text-white">Pseudo</label>
                <input
                  className="py-3 px-4 max-360:w-[280px] block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]"
                  onChange={handleChange}
                  value={formValue.pseudo || ''}
                  name="pseudo"
                  placeholder="Adresse email"
                  type='text'

                />

                <div className="max-w-sm">
                  <label className="block text-sm mb-[10px] font-bold mt-[15px] dark:text-white">Mot de passe</label>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      value={formValue.password}
                      placeholder="Entrer mot de passe"
                      name='mdp'
                      id="hs-toggle-password"
                      type={showPassword ? 'text' : 'password'}
                      className="py-3 px-4 max-360:w-[280px] block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]"

                    />
                    <button
                      onClick={togglePasswordVisibility}
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none text-[#545454]"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', width: '150%' }}>
                  <button
                    className="inline-block max-360:w-[280px] mt-[30px] mb-[10px] w-[400px] h-[55px] bg-black text-white dark:text-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-[15px] font-[800] p-1.5"
                    disabled={
                      formValue.pseudo === undefined ||
                      formValue.mdp === undefined ||
                      formValue.pseudo === "" ||
                      formValue.mdp === ""
                    }
                    onClick={handleSubmit}
                  >
                    <span style={{ whiteSpace: 'nowrap' }}>Connecter</span>
                  </button>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <span style={{}}>Vous n'avez pas de compte? </span>


                  <a to='/Register'>
                    <button style={{ textDecoration: 'underline', fontWeight: '800', marginLeft: '3px' }}> <Link to='/register'>S'inscrire</Link> </button>
                  </a>
                </div>
                <p style={{ display: 'flex', justifyContent: 'center', fontWeight: '800' }} >
                  <a to='/Reset_passwork'>Mots de passe oublié? </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
