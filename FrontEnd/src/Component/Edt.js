import React, { useEffect, useState } from "react";
import { loadMessages, locale } from "devextreme/localization";
import frMessages from "devextreme/localization/messages/fr.json";
import Scheduler, { Resource, Editing } from "devextreme-react/scheduler";

import DocteurList from "./SC_Edt/DocteurList.js";
import AddEventPopup from "./SC_Edt/AjoutEdt.js";
import AppointmentDetails from "./SC_Edt/ModifEdt.js";
import Button from "devextreme-react/button";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri"; // Importation des icônes de suppression et d'édition
import { useRDVContext } from "./Context/ContextRDV.js";
import { useDocteurContext } from "./Context/ContextDocteur.js";
import { BackgroundColor } from "devextreme-react/cjs/chart.js";

// Charger les messages français
loadMessages(frMessages);

// Définir la locale française
locale("fr");

const App = () => {
  const [visibleAppointmentDetails, setVisibleAppointmentDetails] =
    useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const { matriculeEdt } = useDocteurContext();
  const { delete_Edt, Edt, getEdt } = useRDVContext();

  const priorityData = [
    {
      text: "Low Priority",
      id: 1,
      color: "#d9d9d9",
      //   545454
    },
    {
      text: "High Priority",
      id: 2,
      color: "#ff9c62",
      //   973800
    },
  ];
  const onHideAppointmentDetails = () => {
    setVisibleAppointmentDetails(false);
  };

  const onDeleteAppointment = (e) => {
    delete_Edt(e.appointmentData.id, matriculeEdt);
    // Ouvrir le popup d'édition avec les données de l'événement à supprimer
  };

  const onEditAppointment = (e) => {
    // Ouvrir le popup d'édition avec les données de l'événement à éditer
    setSelectedAppointment(e.appointmentData);
    setVisibleAppointmentDetails(true);
  };
  useEffect(() => {
    console.log("hehe");
    getEdt(matriculeEdt);
    return () => {};
  }, []);
  if (!Edt) return <div>Loading...</div>;
  const data = Edt;
  return (
    <div>
      <div style={{ display: "flex" ,marginTop:"20px"}}></div>
      <div className="searchTop" style={{marginLeft:'60px'}}>
        <div>
          <DocteurList />
        </div>
        <div>
          <AddEventPopup />
        </div>
      </div>
      <AppointmentDetails
        appointment={selectedAppointment}
        visible={visibleAppointmentDetails}
        onHide={onHideAppointmentDetails}
      />

      <div id="scheduler" style={{ margin: "5%" }}>
        <Scheduler
          dataSource={data}
          startDayHour={8}
          endDayHour={19}
          cellDuration={60}
          firstDayOfWeek={1}
          // onAppointmentClick={onAppointmentClick}
          defaultCurrentView="week"
          height={730}
          appointmentTooltip={false}
          crossScrollingEnabled={true}
          width={1200}
          appointmentRender={(data) => {
            const text = data.appointmentData.text;

            const startDate = new Date(
              data.appointmentData.startDate
            ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            const endDate = new Date(
              data.appointmentData.endDate
            ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

            return (
              <div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {text}
                  </div>
                  <div style={{ display: "flex", marginLeft: "20%" }}>
                    {/* <RiEditLine
                                        onClick={() => onEditAppointment(data)}
                                        style={{ marginLeft: '5px', cursor: 'pointer' }}
                                 /> */}
                    <RiDeleteBinLine
                      onClick={() => onDeleteAppointment(data)}
                      style={{ marginLeft: "5px", cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div>
                  {startDate} - {endDate}
                </div>
              </div>
            );
          }}
        >
          <Button text="Add" />
          <Resource
            fieldExpr="priorityId"
            allowMultiple={false}
            dataSource={priorityData}
            label="Priority"
          />
          <Editing
            allowAdding={false}
            allowDeleting={false}
            allowUpdating={false}
          />
        </Scheduler>
      </div>
    </div>
  );
};

export default App;
