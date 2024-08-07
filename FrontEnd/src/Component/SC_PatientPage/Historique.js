import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useUsersContext } from '../Context/ContextUser'
import '../../Styles/Popup.css'

export default function Historique({openprops,CloseDialog}) {
  const cancelButtonRef = useRef(null)
  const {historique}=useUsersContext();
console.log(historique)
if (!historique) return <div>Loading .......</div>;
  return (
    <Transition.Root show={openprops} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=>{CloseDialog()}}>
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

        <div className="fixed inset-0 z-10 w-[500px] ml-[500px] overflow-y-auto">
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

                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 z-1001">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Historique
                      </Dialog.Title> <br />
                    </div>
                  </div>
                  {
            historique.map((historiqueuser)=>                           
                <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <time class="text-lg font-semibold text-gray-900 dark:text-white">{historiqueuser.dateHeure}</time>
                    <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                        
                        <li>
                            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div class="text-gray-600 dark:text-gray-400">
                                    <div class="text-base font-normal">
                                        <span>nom :{historiqueuser.doctor_name}</span> <br />
                                        <span>cabinet:{historiqueuser.cabinet}</span>
                                    
                                    </div>
                                    
                                </div>
                            </a>
                        </li>
                    
                    
                    </ol>
                </div>
                )}
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" >
                  <button
                    type="button"
                    className="inline-flex w-[100px] justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                    onClick={() => CloseDialog()}
                  >
                    Fermer
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
