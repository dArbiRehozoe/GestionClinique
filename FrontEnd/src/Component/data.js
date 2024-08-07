// import React from 'react';
// import { useDocteurContext } from './Context/ContextDocteur';

// const Data = () => {
// const {Edt,delete_docteur}= useDocteurContext();
//   return (
//     <div>
      
//     </div>
//   );
// };

// const datas = [{
//   "matricule": null,
//   "horaire_medecin_id": 6,
//   "debut": "2024-04-14T16:30:00Z",
//   "fin": "2024-04-14T18:30:00Z",
//   "libre": false,
//   "reservations": ["Rakoto"]
// },
// {
//   "matricule": null,
//   "horaire_medecin_id": 7,
//   "debut": "2024-04-14T08:35:00Z",
//   "fin": "2024-04-14T09:40:00Z",
//   "libre": true,
//   "reservations": []
// }
// ];

// const transformedData = datas.map(item => {
// return {
//   text: item.reservations.join(', ') || 'No Reservations',
//   priorityId: item.libre ? 1 : 2,
//   startDate: new Date(item.debut),
//   endDate: new Date(item.fin)
// };
// });
// console.log(transformedData)
// export const data =transformedData
// //   {
// //     text: 'Website Re-Design Plan',
// //     priorityId: 2,
// //     startDate: new Date('2024-04-19T16:30:00.000Z'),
// //     endDate: new Date('2024-04-19T18:30:00.000Z'),
// //   },
// //   {
// //     text: 'Book Flights to San Fran for Sales Trip',
// //     priorityId: 1,
// //     startDate: new Date('2024-04-21T17:00:00.000Z'),
// //     endDate: new Date('2024-04-21T19:00:00.000Z'),
// //   },
// // ];

// console.log(data);

// export const priorityData = [
//   {
//     text: 'Low Priority',
//     id: 1,
//     color: '#1e90ff',
//   },
//   {
//     text: 'High Priority',
//     id: 2,
//     color: '#ff9747',
//   },
// ];