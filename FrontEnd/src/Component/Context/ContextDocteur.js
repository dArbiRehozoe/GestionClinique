import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const DocteurContext = createContext();
export function useDocteurContext() {
    return useContext(DocteurContext);
}
export function  DocteurProvider ({children}){
    const apikey=process.env.REACT_APP_API_URL;
    const [Docteur, setDocteur] = useState([])
    const [DocteurDisp, setDocteurDisp] = useState([])
    const [docteurinfo, setDocteurinfo] = useState(null)
    const [DocteurSatus,setDocteurSatus]=useState(null)
    const [matriculeEdt, setmatriculeEdt] = useState(null)

    // localStorage.setItem('matricule', 13);
    useEffect(() => {
        list_docteur()
        list_docteur_disp()
        const matricule=localStorage.getItem('matricule');

        console.log(matricule)
        if(!matricule){
          // alert('tsisy lty ah tsisy')
        }else{
          docinfo(matricule)
        }

    }, []);
    const list_docteur = async () => {
        axios.get(`${apikey}/medecin/medecin/`).then((response)=>{
          const data = response.data;
          setDocteur(data)
          const matriculeEdtStore=localStorage.getItem('matriculeEdt');
          // alert(matriculeEdtStore)
          if(!matriculeEdtStore){
            // alert('ato')
            //  alert(data[0].matricule)
            // console.log(Docteur[0].matricule)
            setmatriculeEdt(data[0].matricule)

          }else{
            setmatriculeEdt(matriculeEdtStore)
          }
          console.log(data)
            }).catch((error)=>{

        })
    };
    const list_docteurstatus = async () => {
      axios.get(`${apikey}/medecin/DocteurStatus/`).then((response)=>{
        const data = response.data;
        setDocteurSatus(data)
        console.log(data)
          }).catch((error)=>{

      })
  };
    const docinfo = async (matricule) => {
      localStorage.setItem('matricule', matricule);
      axios.get(`${apikey}/medecin/medecin/${matricule}/`).then((response)=>{
        const data = response.data;
        setDocteurinfo(data)
        console.log(data)
          }).catch((error)=>{
        alert('erreur')
      })
  };
    const list_docteur_disp = async () => {
      axios.get(`${apikey}/medecin/DISPO/`).then((response)=>{
        const data = response.data;
        setDocteurDisp(data)

        console.log(data)
          }).catch((error)=>{

      })
    };

   const Ajout_docteur = async (docteurinput, fileAjout) => {
  console.log('Input docteur:', docteurinput);
  const formData = new FormData();

  if (fileAjout instanceof File) {
    formData.append('Photo', fileAjout);
  } else {
    console.error('fileAjout is not a valid File object');
    return;
  }

  formData.append('matricule', docteurinput.Matricule);
  formData.append('nom', docteurinput.Nom);
  formData.append('mail', docteurinput.Mail);
  formData.append('cabinet', docteurinput.Cabinet);
  formData.append('tarif', docteurinput.Tarif);
  formData.append('grade',docteurinput.Grade); // Assurez-vous que Grade est un ID valide
  formData.append('specialization', docteurinput.Specialite); // Assurez-vous que Specialite est un ID valide

  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  try {
    const response = await axios.post(`${apikey}/medecin/medecin/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Response:', response.data);
    list_docteur()
  } catch (error) {
    console.error('There was an error!', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else {
      console.error('Error message:', error.message);
    }
  }
};

    const Modif_doc = async (id, docteurinput) => {
      console.log(docteurinput)
      const formData = new FormData();
      formData.append('matricule', docteurinput.matricule);
      formData.append('nom', docteurinput.nom);
      formData.append('mail', docteurinput.mail);
      formData.append('cabinet', docteurinput.cabinet);
      formData.append('tarif', docteurinput.tarif);
      formData.append('grade',docteurinput.grade); // Assurez-vous que Grade est un ID valide
      formData.append('specialization', docteurinput.specialite); // Assurez-vous que Specialite est un ID valide
    
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
      console.log(formData)
      try {
        const response = await axios.put(`${apikey}/medecin/medecin/${id}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Response:', response.data);
        list_docteur()
      } catch (error) {
        console.error('There was an error!', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Status:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else {
          console.error('Error message:', error.message);
        }
      }
        // axios.put(`${apikey}/medecin/medecin/${id}/`, formData).then((response)=>{
        //   const data = response.data;
        //   console.log(data)
        //   list_docteur()
        //     }).catch((error)=>{
        //       alert("noooo")
        // })
    };
    const delete_docteur = async (id) => {
  
        axios.delete(`${apikey}/medecin/medecin/${id}/`).then((response)=>{
          const data = response.data;
          console.log(data)
          list_docteur()
            }).catch((error)=>{
              console.log(error)
              alert("noooo")
        })
    };
    const docteurEdt = async (matricule) => {
      localStorage.setItem('matriculeEdt', matricule);

      setmatriculeEdt(matricule)
    };
    return (
        <DocteurContext.Provider value={{Docteur,docteurEdt,matriculeEdt,delete_docteur,Modif_doc,Ajout_docteur,DocteurDisp,docinfo,docteurinfo,list_docteurstatus,DocteurSatus}}>
          {children}
        </DocteurContext.Provider>
      );

}