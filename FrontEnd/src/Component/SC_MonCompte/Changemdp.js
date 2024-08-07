import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useUsersContext } from '../Context/ContextUser';

export default function Changemdp({openprops, CloseDialog}) {
  const cancelButtonRef = useRef(null)
  const {Changemdp}  =  useUsersContext();
  
  // Toujours initialiser l'état, même si l'utilisateur n'est pas défini
  const [data, setData] = useState({
    old_password: '',
    new_password:  '',
    confirm_password:  ''
  }); 
  
  const Handlechange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  };
  



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

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all " style={{ width: '456px', height: '500px' }}>

                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-[20px] font-[800] mb-[20px] leading-6 text-black text-[20px] font-bold mt-[24px]">
                       Modifier le mot de passe
                      </Dialog.Title>
                      <form action="">
                        <label htmlFor="">Ancien mot de passe:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='old_password' value={data.old_password} onChange={Handlechange}  id="" style={{color:'black'}}/> <br />
                        <label htmlFor="">Nouveau mot de passe:</label>
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='new_password' value={data.new_password} onChange={Handlechange}  id="" style={{color:'black'}}/> <br />
                  

                        <label htmlFor="">Confirmer nouveau mot de passe:</label>
                     
                        <input className="py-3 px-4 block w-[400px] h-[55px] border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 bg-gray-100 border-gray-400 text-[15px] placeholder-[#545454]" type="text" name='confirm_password' value={data.confirm_password} onChange={Handlechange}  id="" style={{color:'black'}}/> <br />
                        
                      </form>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 flex justify-center space-x-4" >
                 
                  <button
                    type="button"
                    
                    className="inline-flex w-[200px] h-[50px] items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() =>{
                       CloseDialog()
                      setData({})
                      }}
                    ref={cancelButtonRef}
                  >
                    Retour
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-[200px] h-[50px] items-center justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
                    onClick={() => {
                      Changemdp(data)
                      setData({})
                      console.log(data)
                      CloseDialog()
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
