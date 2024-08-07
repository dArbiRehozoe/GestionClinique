import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UsersContext = createContext();

export function useUsersContext() {
  return useContext(UsersContext);
}
export function UsersProvider({ children }) {
  const apikey=process.env.REACT_APP_API_URL;
  const [token, setToken] = useState([]);

  const navigate = useNavigate();
  const [user,setuser]=useState([{}])
  const [Alluser,setAlluser]=useState(null)
  const [historique,setHistorique]=useState([{}])
  useEffect(() => {
    fetchUserDetails()
    FechAllUser()
  },[]);
 

  const Register = async (newUser) => {
    axios.post(`${apikey}/account/utilisateur/`, newUser).then((response)=>{
      const data = response.data;
      const donner = {
        'username': newUser.username,
        'password': newUser.password,
      }
      setTimeout(() => {
        console.log(donner)
        Login(donner)
      }, 1000);
     
  
      console.log(data)
        }).catch((error)=>{
          alert("noooo")
    })
  };
  const AjoutClient = async (newUser) => {
    axios.post(`${apikey}/account/utilisateur/`, newUser).then((response)=>{
      const data = response.data;
      console.log(data)
        }).catch((error)=>{
          alert("noooo")
    })
  };
  const UpdateUser = async (id, newUser) => {
    const datauser ={
      "username": newUser.username,
      "email": newUser.email,
      "first_name": user.first_name,
      "last_name": user.last_name,
      "contact": newUser.contact,
  }
    axios.put(`${apikey}/account/utilisateur/${id}/`, datauser
    ,{
      headers: {
       Authorization: `Bearer ${token}`, 
    }}
    ).then((response)=>{
      const data = response.data;

      fetchUserDetails()
      console.log(data)
    

        }).catch((error)=>{
        
     

    })
  };
  const Login = async (User) => {
    console.log(User);
    try {
      const response = await axios.post(`${apikey}/account/login/`, User)
      const data = response.data.access;
      localStorage.setItem('token', data);
       fetchUserDetails()
      if (data.message) {
            alert("nooooo")
      } else {
        console.log(data);
      }
      navigate('/')
    } catch (error) {
        alert('erreur')
    }
  };

  const fetchUserDetails = async () => {
  
    const tokenuser=localStorage.getItem('token');
    setToken(tokenuser)
    try {
      
        const response = await axios.get(`${apikey}/account/login/user-details/`,{
          headers: {
           Authorization: `Bearer ${tokenuser}`, 
        }});
        setuser(response.data)
        HistoriqueUser(response.data.id)
       
      } catch (error) {
          console.error('Error fetching Products:', error);
          
      }
   
  };

  const FechAllUser = async () => {
  
    try {
        const response = await axios.get(`${apikey}/reservation/visite-list/`);
        setAlluser(response.data)
        console.log(user);   
      } catch (error) {
          console.error('Error fetching Products:', error);
          
      }
   
  };
  
  const deleteUserList = async (id) => {
    axios.delete(`${apikey}/account/utilisateur/${id}/`,{
      headers: {
       Authorization: `Bearer ${token}`, 
    }}
    ).then((response)=>{
      const data = response.data;    
        }).catch((error)=>{
          alert("noooo")
    })
  };
  const deleteUser = async (id) => {
    axios.delete(`${apikey}/account/utilisateur/${id}/`,{
      headers: {
       Authorization: `Bearer ${token}`, 
    }}
    ).then((response)=>{
      const data = response.data;
  
      setuser([])
        localStorage.setItem('token', JSON.stringify([]));
         navigate('/');
       window.location.reload()
    (data);

        }).catch((error)=>{
          alert("noooo")
    })
  };

  const Changeadmin = async (iduser,is_staff) => {
    try {
      console.log(token)
        const response = await axios.patch(`${apikey}/account/promote-user/${iduser}/`,{'is_staff':is_staff},{
          headers: {
           Authorization: `Bearer ${token}`, 
        }});
     
        FechAllUser()
      } catch (error) {
          console.error('Error fetching Products:', error);
          
      }
  };

  const deconnection=()=>{
        setuser([])
        localStorage.clear();
         navigate('/');
       window.location.reload()
}


const Changemdp = async (password) => {

    axios.post(`${apikey}/account/change-PSWD/`, password,{
      headers: {
       Authorization: `Bearer ${token}`, 
    }}
    ).then((response)=>{
    console.log(response)
    }).catch((error)=>{
       console.log(error)
      
   })
 };
 const Changephoto = async (file) => {

  const formData = new FormData();
  formData.append('UserPhoto', file); 
  const toutesLesValeurs = {};
    
      // Parcourez les paires clé-valeur de formData et stockez-les dans l'objet
      for (const [clé, valeur] of formData.entries()) {
        toutesLesValeurs[clé] = valeur;
      }
      
  axios.patch(`${apikey}/account/PhotoUpdate/${user.id}/`, formData,{
    headers: {
     Authorization: `Bearer ${token}`, 
  }}).then((response)=>{
    const data = response.data;
    console.log(data)
    fetchUserDetails()
      }).catch((error)=>{
        alert(error)
  })
};



const HistoriqueUser =  (id) => {
  console.log(id)
   axios.get(`${apikey}/reservation/historique/${id}/`).then((response)=>{
     setHistorique(response.data)
  }).catch((error)=>{
  })
    // const medecins = [
    //   {
    //       "nom": "Jean Dupont",
    //       "domaine": "",
    //       "grade": "Spécialiste",
    //   },
    //   {
    //       "nom": "Marie Martin",
    //       "domaine": "Dentiste",
    //       "grade": "Généraliste",
    //   }, 
    //   // Ajoutez d'autres objets médecin ici si nécessaire
    // ];
  
 
//  })
};
  return (
    <UsersContext.Provider value={{
        Login,Register,user,deconnection,fetchUserDetails,UpdateUser,deleteUser,Changeadmin,
        Changemdp,historique,HistoriqueUser,Changephoto,Alluser,AjoutClient,deleteUserList
    }}>
      {children}
    </UsersContext.Provider>
  );
}
