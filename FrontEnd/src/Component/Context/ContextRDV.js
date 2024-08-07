import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useUsersContext } from './ContextUser';
import { useDocteurContext } from './ContextDocteur';
import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';
const RDVContext = createContext();
export function useRDVContext() {
    return useContext(RDVContext);
}
export function RDVProvider ({children}){
    const apikey=process.env.REACT_APP_API_URL;
    const {user}=useUsersContext();
    const [confRDV, setConfRDV] = useState(null);
    const [Edt,setEdt]=useState(null)
    const [Dispo,setDispo]=useState(null)
    const {matriculeEdt}=useDocteurContext()
    const [dataRDV,setdataRDV]=useState()
    useEffect(() => {
      docteurinfo()
     
    }, []);
    const docteurinfo = () =>  {
     const docteur = JSON.parse(localStorage.getItem(['docteur']));
      setConfRDV(docteur)
      console.log(docteur)
    }
  
    const ConfirmeRDV = (data,date,horaireMedecinIDSelect) => {
      console.log()
      setdataRDV({
        date:date,
        horaireMedecinIDSelect:horaireMedecinIDSelect
      })
      localStorage.setItem('docteur', JSON.stringify(data));
      setConfRDV(data)
      
    }
    const RDV = ()  => {
      console.log(confRDV)
    const newRDV = {
        "id":user.id,
        "matricule":confRDV.matricule,
        "dateHeure":dataRDV.date,
        "HoraireMedecinID":dataRDV.horaireMedecinIDSelect
      }
      console.log(newRDV)
        axios.post(`${apikey}/reservation/reservation/`, newRDV).then((response)=>{
          const data = response.data;
          console.log(data)
          alert("eheh")
            }).catch((error)=>{
              alert("noooo")
        })
      
    }
    const getEdt =(matricule)=>{
      const mat= {"medecin_matricule":matricule}
      axios.post(`${apikey}/travail/edt/`,mat).then((response)=>{
      const data = response.data;
      console.log(data)
      const transformedData = data.map(item => {
             return {
               text: item.reservations.join(', ') || 'Libre',
               priorityId: item.libre ? 1 : 2,
               startDate: new Date(item.debut),
               id: item.horaire_medecin_id,
               endDate: new Date(item.fin)
             };
             });
        setEdt(transformedData)
        console.log(transformedData)
        }).catch((error)=>{
          console.log(error)
      })
    }
    const Ajout_Edt = async (newdEdt,matricule) => {
      console.log(newdEdt.startDate.toISOString())
   
      const edtvalue={
        "matricule": matriculeEdt,
        "debut": newdEdt.startDate.toISOString(),
        "fin": newdEdt.endDate.toISOString(),
        "libre": true
        }
      console.log(edtvalue)  
      axios.post(`${apikey}/travail/Horaire&HM/`, edtvalue).then((response)=>{
        const data = response.data;
        console.log(data)
        getEdt(matricule)
          }).catch((error)=>{
            alert("noooo")
      })
  };
  const RechercheDispo = async (recherche) => {
    console.log(recherche)
      axios.post(`${apikey}/travail/dispo/`,recherche).then((response)=>{
        const data = response.data;
        console.log(data)
        setDispo(data)
          }).catch((error)=>{
            alert("noooo")
      })
  };
  const delete_Edt = async (id,matricule) => {
    console.log(id)
      axios.delete(`${apikey}/travail/horaireMedecin/${id}/`).then((response)=>{
        const data = response.data;
        console.log(data)
        getEdt(matricule)
          }).catch((error)=>{
            alert("noooo")
      })
  };
    return (
        <RDVContext.Provider value={{confRDV,ConfirmeRDV,RDV,Edt,Ajout_Edt,getEdt,RechercheDispo,Dispo,delete_Edt}}>
          {children}
        </RDVContext.Provider>
      );
    
}