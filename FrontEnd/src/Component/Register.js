import React, { useState } from "react";
import { useUsersContext } from "./Context/ContextUser";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../Styles/register.css'
import { Link } from "react-router-dom";

function Register() {
  const [formValue, setFormValue] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { Register } = useUsersContext();
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailRegex.test(formValue.email));
  };

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
      'email': formValue.email,
      'password': formValue.mdp
    };
    Register(donner);
  };

  return (
    <div className="divMere" style={{ maxHeight: '770px', overflowY: 'hidden' }}>
      <div className="blur"></div>
      <div className="contenaire" style={{  overflow: 'hidden' }}>
        <div className="divinput">
          <a to='/'></a>
          <div className="docme">DocMe</div>
          <div className="all-shit" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="item1 w-[774px] h-[770px] bg-black">
              <img style={{ width: '463px', height: '417px', marginLeft: '186px', marginTop: '121px' }} className="register-pic" src={require("../Photos/register.png")} alt="Register"/>
            </div>
            <div className="item2" style={{ marginLeft: '137px' }}>
              <h1 style={{ fontWeight: '800', fontSize: '30px', marginTop:'-40px' }}>Créer un compte</h1>
              <label className="block text-sm font-bold mt-[30px] mb-[10px] dark:text-white">Nom</label>
              <input
                onChange={handleChange}
                value={formValue.pseudo || ''}
                name="pseudo"
                placeholder="Nom"
                className="py-3 px-4 block w-[400px] max-360:w-[280px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 text-[15px] placeholder-[#545454]"
                type='text'
              />
              <label className="block text-sm font-bold mt-[15px] mb-[10px] dark:text-white">Email</label>
              <input
                onChange={handleChange}
                name="email"
                value={formValue.email || ''}
                placeholder="Email"
                onBlur={validateEmail}
                type='email'
                className="py-3 px-4 block w-[400px] max-360:w-[280px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 text-[15px] placeholder-[#545454]"
              />
              {!isValidEmail && (
                <p style={{ color: 'red' }}>Adresse e-mail non valide</p>
              )}
              <div className="relative">
                <label className="block text-sm font-bold mt-[15px] mb-[10px] dark:text-white">Mots de passe</label>
                <input
                  name="mdp"
                  onChange={handleChange}
                  value={formValue.mdp || ''}
                  placeholder="Mots de passe"
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  className="py-3 max-360:w-[280px] px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 text-[15px] placeholder-[#545454]"
                />
                <button
                  onClick={togglePasswordVisibility}
                  type="button"
                  className="absolute right-4 mt-[15px] top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none text-[#545454]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="relative">
                <label className="block text-sm font-bold mt-[15px] mb-[10px] dark:text-white">Confirmer mots de passe</label>
                <input
                  error={formValue.confirmMdp !== formValue.mdp}
                  value={formValue.confirmMdp || ''}
                  name="confirmMdp"
                  onChange={handleChange}
                  placeholder="Confirmer mots de passe"
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  className="py-3 px-4 block w-[400px] max-360:w-[280px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 text-[15px] placeholder-[#545454]"
                />
                <button
                  onClick={togglePasswordVisibility}
                  type="button"
                  className="absolute right-4 mt-[15px] top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none text-[#545454]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button
                variant="contained"
                disabled={
                  formValue.confirmMdp !== formValue.mdp ||
                  formValue.pseudo === undefined ||
                  formValue.email === undefined ||
                  formValue.mdp === undefined ||
                  formValue.pseudo === "" ||
                  formValue.email === "" ||
                  formValue.mdp === "" ||
                  !isValidEmail
                }
                color="secondary"
                onClick={handleSubmit}
                size="medium"
                sx={{ marginTop: '5%', width: '34ch' }}
                className="inline-block max-360:w-[280px] mt-[30px] mb-[10px] w-[400px] h-[55px] bg-black text-white dark:text-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-[15px] font-[800] p-1.5"
              >
                S'inscrire
              </button>
              <div className="asking-p" style={{ display: 'flex', justifyContent: 'center' }}>
                <p>
                  Vous avez déjà un compte? <a style={{textDecoration: 'underline', fontWeight: '800' }}><Link to='/Login'>Se connecter</Link></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          {/* photo */}
        </div>
      </div>
    </div>
  );
}

export default Register;

const hehe1 = {
  backgroundColor: 'orange',
};

const hehe = {
  backgroundColor: 'gray',
  with: '7px'
};
