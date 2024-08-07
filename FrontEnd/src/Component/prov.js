import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { Scheduler } from 'devextreme-react/scheduler';
import { loadMessages, locale } from 'devextreme/localization';
import frMessages from 'devextreme/localization/messages/fr.json';
import DocteurList from './SC_Edt/DocteurList';

// Charger les messages français
loadMessages(frMessages);

// Définir la locale française
locale('fr');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValidAppointment: true // État pour valider l'ajout d'un élément
       
        };
    }

    onAppointmentFormOpening(e) {
        e.popup.option('showTitle', true);
        e.popup.option('title', e.appointmentData.text ? 
            e.appointmentData.text : 
            'Créer un nouvel événement');

        // Définir les éléments à inclure dans le formulaire avec la sélection de l'heure
 
        // Définir les éléments à inclure dans le formulaire avec la sélection de l'heure
        const items = [
            {
                itemType: 'group',
                colCount: 0,
                items: [
                    { dataField: 'text', editorType: 'dxTextBox',editorOptions:{width: 420}, label: { text: 'Subject' } }
                ]
            },
            {
                itemType: 'empty'
            },
            {
                itemType: 'group',
                colCount: 1,
                items: [
                    { dataField: 'startDate', editorType: 'dxDateBox',  editorOptions: { type: 'datetime' ,width: 400 }, label: { text: 'Start Date' } },
                    { dataField: 'endDate', editorType: 'dxDateBox', editorOptions: { type: 'datetime',width: 400  }, label: { text: 'End Date' } }
                ]
            }
        ];

        e.form.option('items', items);
    }

    // Fonction appelée lors de la modification d'un élément
    handleAppointmentUpdating = (e) => {
        // Envoie une requête de mise à jour à votre API serveur
        console.log('hehe')
        fetch(`URL_DE_VOTRE_API/${e.appointmentData}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e.newData) // Envoie les nouvelles données de l'élément
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Échec de la modification de l\'élément');
            }
            // Si la modification réussit, vous pouvez effectuer d'autres actions ici
        })
        .catch(error => {
            console.error('Erreur:', error);
            // Gérer les erreurs de modification ici
            e.cancel = true; // Annuler la modification si une erreur se produit
        });
    }

    // Fonction appelée lors de l'ajout d'un élément
    handleAppointmentAdding = (e) => {
        console.log(e.appointmentData.endDate)
        // Envoie les données nouvellement ajoutées à votre serveur
        fetch('URL_DE_VOTRE_API', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e.appointmentData) // Envoie les données de l'élément nouvellement ajouté
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Échec de l\'ajout de l\'élément');
            }
            // Si l'ajout réussit, vous pouvez effectuer d'autres actions ici
            return response.json();
        })
        .catch(error => {
            console.error('Erreur:', error);
            // Gérer les erreurs d'ajout ici
        });
    }
    // Fonction appelée lors de la suppression d'un élément
    handleAppointmentDeleting = (e) => {
        console.log(e.appointmentData.text)
        // Envoie une requête de suppression à votre API serveur
        fetch(`URL_DE_VOTRE_API/${e.appointmentData}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Échec de la suppression de l\'élément');
            }
            // Si la suppression réussit, vous pouvez effectuer d'autres actions ici
        })
        .catch(error => {
            console.error('Erreur:', error);
            // Gérer les erreurs de suppression ici
            e.cancel = true; // Annuler la suppression si une erreur se produit
        });
    }
    
    render() {
        return (
            <div>
                <DocteurList></DocteurList>
                {/* Affichage d'un message d'erreur si l'ajout d'élément est invalide */}
                {!this.state.isValidAppointment && (
                    <div style={{ color: 'red' }}>L'élément n'a pas pu être ajouté. Veuillez vérifier les détails.</div>
                )}
                <div style={{margin:'5%'}}>
                {/* Scheduler avec l'événement onAppointmentAdding */}
                <Scheduler
                    dataSource={dataSource}
                    onAppointmentAdding={this.handleAppointmentAdding}                 
                    startDayHour={8}
                    endDayHour={19}
                    cellDuration={60}
                    firstDayOfWeek={1}
                    onAppointmentDeleting={this.handleAppointmentDeleting}
                    onAppointmentUpdating={this.handleAppointmentUpdating}
                    onAppointmentFormOpening={this.onAppointmentFormOpening}
                    className="custom-scheduler"
                    width={1300}
                   
                />
                </div>
            </div>
        );
    }
}

export default App;
const   dataSource=[
    {
        text: 'Réunion importante',
        startDate: new Date(2024, 3, 14, 9, 0),
        endDate: new Date(2024, 3, 14, 10, 30),
        description: 'Préparation pour le lancement du nouveau projet'
    },
    {
        text: 'Déjeuner avec le client',
        startDate: new Date(2024, 3, 15, 12, 0),
        endDate: new Date(2024, 3, 15, 13, 0),
        description: 'Discussion sur les exigences du projet'
    },
    // Ajoutez d'autres éléments avec la description ici
]
