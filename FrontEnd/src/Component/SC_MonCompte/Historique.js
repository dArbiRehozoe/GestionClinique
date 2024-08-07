import React from 'react';
import { useUsersContext } from '../Context/ContextUser';
import { Color } from 'devextreme-react/cjs/chart';
import search from "../../Photos/search.png"
const Historique = () => {
    const { historique} = useUsersContext();
    console.log(historique)
    if (!historique ||historique.length===0) return  <div className="mr-[200px]">
    <img className="w-[374px] h-[349px]  mt-[69px]" src={search} alt="search"/>
    <p className="text-[15px] ml-[100px] text-[#8E8B8B] font-[500]">Vous n'avez aucune historique</p>
</div> ;

    return (
        <div>
            {historique.map((historiqueuser) => {
                const appointmentDate = new Date(historiqueuser.dateHeure);
                const currentDate = new Date();
                const isToday = appointmentDate.toDateString() === currentDate.toDateString();
                const isPast = appointmentDate < currentDate;
                const appointmentDateTime = appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const appointmentDateFormatted = isToday ? "aujourd'hui" : appointmentDate.toLocaleDateString();
                const appointmentStatus = isPast ? "a eu" : isToday ? "avez" : "aura";
                const isSpecialist = historique.gradeDoc = "Specialiste"

                return (
                    <ol className="mt-3 mr-[100px] divide-y divide-gray-200 dark:divide-gray-700">
                        <li>
                            <a href="#" className="items-center w-[736px] h-[141px] rounded-[20px] block p-3 sm:flex bg-[#F5F5F5] hover:bg-[#F5F5F5] dark:hover:bg-[#F5F5F5]">
                                <img className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src={historiqueuser.image_doc} alt="Jese Leos image"/>
                                <div className="text-gray-600 dark:text-gray-400">
                                    <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">{historiqueuser.doctor_name}</span></div>
                                    <div className="text-sm font-normal">
                                        {"Vous avez rendez-vous chez le docteur "}
                                        {historiqueuser.doctor_name}
                                        {", "}
                                        {isPast && "le rendez-vous "}
                                        {appointmentDateFormatted}
                                        {" "}
                                        {appointmentStatus}
                                    </div>
                                    <span className="font-medium text-gray-900 dark:text-white">
                                        {appointmentDateTime}
                                    </span>
                                    <span style={isSpecialist? textStyle : {color:'#2554F9'}} className="font-medium text-gray-900 dark:text-white">
                                        {historiqueuser.gradeDoc}
                                    </span>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400" style={{marginLeft:'10px'}}>
                                        Porte {historiqueuser.cabinet}
                                    </span> 
                                </div>
                            </a>
                        </li>
                    </ol>
                );
            })}
        </div>
    );
};

export default Historique;

const textStyle = {color:'#61DF75'}
