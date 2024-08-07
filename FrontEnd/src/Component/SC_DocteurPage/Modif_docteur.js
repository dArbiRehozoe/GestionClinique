import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import '../../Styles/Popup.css'
import { useDocteurContext } from '../Context/ContextDocteur'

export default function Modif_docteur({openprops,CloseDialog,docteurInfo}) {
  console.log(docteurInfo)
  const cancelButtonRef = useRef(null)
  const {Modif_doc}=useDocteurContext();
  const [docteurinput, setDocteurinput] = useState({
    matricule:docteurInfo.matricule,
    nom:docteurInfo.nom,
    specialite:docteurInfo.specialization,
    mail:docteurInfo.mail,
    cabinet:docteurInfo.cabinet,
    tarif:docteurInfo.tarif,
    grade:docteurInfo.grade
})
  const Handlechange = (event) => {
    const { name, value } = event.target;
    setDocteurinput({
      ...docteurinput,
      [name]: value
    });
  };
  return (
    <Transition.Root className='w-[470px] h-[442px]' show={openprops} as={Fragment}>
      <Dialog  as="div" className="relative z-10 " initialFocus={cancelButtonRef} onClose={()=>{CloseDialog()}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-[470px] ml-[500px] rounded-lg">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all custom-scrollbar " style={{ width: '1000px', height: '700px' }}>

                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                       Modifier un docteur
                      </Dialog.Title>
                      <form action="">
                        <label htmlFor="">Matricule:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='matricule' value={docteurinput.matricule} onChange={Handlechange} disabled={true}/> <br />
                        <label htmlFor="">Nom:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='nom' value={docteurinput.nom} onChange={Handlechange} /> <br />
                        <label htmlFor="">Specialite:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='specialite' value={docteurinput.specialite} onChange={Handlechange} /> <br />
                        <label htmlFor="">Mail:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='mail' value={docteurinput.mail} onChange={Handlechange} /> <br />
                        <label htmlFor="">Cabinet:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='cabinet' value={docteurinput.cabinet} onChange={Handlechange} /> <br />
                        <label htmlFor="">Tarif:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='tarif' value={docteurinput.tarif} onChange={Handlechange} /> <br />
                        <label htmlFor="">Grade:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='grade' value={docteurinput.grade} onChange={Handlechange} /> <br />
               
                      </form>
                    </div>
                  </div>
                </div>
                <div className=" px-4 py-3 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-[200px] h-[48px] items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
                    onClick={() => {
                      console.log(docteurinput)
                      Modif_doc(docteurinput.matricule,docteurinput)
                      CloseDialog()
                    }}
                  >
                    Ajouter
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-[200px] h-[48px] items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                    onClick={() => CloseDialog()}
                    ref={cancelButtonRef}
                  >
                    Retour
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
