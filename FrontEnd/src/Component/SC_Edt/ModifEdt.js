import React from 'react';
import Popup from 'devextreme-react/popup';
import Form, { Item } from 'devextreme-react/form';
import Button from 'devextreme-react/button';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRDVContext } from '../Context/ContextRDV';
const AppointmentDetails = ({ appointment, visible, onHide }) => {
   console.log(appointment)
    const [formData, setFormData] = useState({});
    const {Modif_Edt}=useRDVContext()
    useEffect(() => {
        setFormData(appointment)
    }, []);
    if (!appointment) {
        return null; // Si appointment est null, ne rien afficher
    }
    const handleSave = () => {  
        appointment=formData  
        Modif_Edt(formData)
        console.log(formData)  
        
    };

    const handleShow = () => {
        appointment=formData
      onHide()
    };

    const handleHide = () => {
        onHide()
    };
    return (
        <Popup
            visible={visible}
            onHiding={onHide}
            dragEnabled={false}
            closeOnOutsideClick={true}
            showTitle={true}
            title="Détails de l'événement"
            width={400}
            height={300}
        >
              <Form formData={appointment}>
                    <Item dataField="text" editorType="dxTextBox" editorOptions={{ width: '100%' }} label={{ text: 'Id du client' }} />
                    <Item dataField="startDate" editorType="dxDateBox" editorOptions={{ type: 'datetime', width: '100%' }} label={{ text: 'Date de début *' }} />
                    <Item dataField="endDate" editorType="dxDateBox" editorOptions={{ type: 'datetime', width: '100%' }} label={{ text: 'Date de fin *' }} />
                </Form>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <div style={{marginRight: '10px'}}>
                     <Button text="Annuler"  onClick={handleHide} />
                    </div>
                    <div>
                     <Button text="Enregistrer" type="success" onClick={handleSave} />
                    </div>
                </div>
         
        </Popup>
    );
};

export default AppointmentDetails;
