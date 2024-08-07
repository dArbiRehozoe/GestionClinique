import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import '../../Styles/Popup.css'
import { useDocteurContext } from '../Context/ContextDocteur'
import { useEffect } from 'react'
export default function Ajout_docteur({ openprops, CloseDialog }) {
  const cancelButtonRef = useRef(null)
  const { Ajout_docteur ,DocteurSatus} = useDocteurContext();
  const {list_docteurstatus}=useDocteurContext();
  const [docteurinput, setDocteurinput] = useState({
    Matricule: '',
    Nom: '',
    Specialite: '',
    Mail: '',
    Cabinet: '',
    Tarif: '',
    Grade: ''
  })
  useEffect(() => {
      list_docteurstatus()
      return () => {
          
      };
  }, []);
  const [fileAjout, setFileAjout] = useState({})
  const Handlechange = (event) => {
    const { name, value } = event.target;
    setDocteurinput({
      ...docteurinput,
      [name]: value
    });
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile)
    setFileAjout(event.target.files[0])
}
 if(DocteurSatus===null)return null
  return (
    <Transition.Root show={openprops} as={Fragment}>
      <Dialog as="div" className=" z-9999 " initialFocus={cancelButtonRef} onClose={() => { CloseDialog() }}>
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

        <div className="fixed inset-0 z-9999 w-[470px] ml-[500px] rounded-lg">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 rounded-lg">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all custom-scrollbar" style={{ width: '1000px', height: '700px' }}>

                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="mb-[15px] leading-6 text-black text-[20px] font-[800] mt-[24px]">
                        Ajouter un docteur
                      </Dialog.Title>
                      <form action="" className=''>
                        <label htmlFor="">Matricule:</label>
                        <input type="text" name='Matricule' value={docteurinput.Matricule} onChange={Handlechange} className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" /> <br />
                        <label htmlFor="">Nom:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='Nom' value={docteurinput.Nom} onChange={Handlechange} /> <br />
                        <label htmlFor="">Spécialité:</label>
                        <select name='Specialite' value={docteurinput.Specialite} onChange={Handlechange} class="w-[400px] mb-[15px] h-[55px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            DocteurSatus.map((data) => (
                                <option key={data.id} value={data.specialite}>{data.specialite}</option>
                            ))
                        }
                        </select>
    
                        <label htmlFor="">Mail:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='Mail' value={docteurinput.Mail} onChange={Handlechange} /> <br />
                        <label htmlFor="">Cabinet:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='Cabinet' value={docteurinput.Cabinet} onChange={Handlechange} /> <br />
                        <label htmlFor="">Tarif:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='Tarif' value={docteurinput.Tarif} onChange={Handlechange} /> <br />
                        <label htmlFor="">Grade:</label>  
                        <select className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='Grade' value={docteurinput.Grade} onChange={Handlechange} >
                          <option value="Generaliste">Generaliste</option>
                          <option value="Professeur">Professeur</option>
                          <option value="Specialiste">Specialiste</option>
                        </select>  <br />
                        <input type="file" onChange={handleFileChange} />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 flex justify-center space-x-4">
                  <button
                    type="button"
                    className="inline-flex w-[200px] h-[50px] items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() => CloseDialog()}
                    ref={cancelButtonRef}
                  >
                    Retour
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-[200px] h-[50px] items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
                    onClick={() => {
                      console.log(docteurinput);
                    
                     Ajout_docteur(docteurinput,fileAjout);
                    CloseDialog();
                    }}
                  >
                    Ajouter
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
