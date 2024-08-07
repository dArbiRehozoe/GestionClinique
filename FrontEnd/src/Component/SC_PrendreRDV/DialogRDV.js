import { useNavigate } from 'react-router-dom';
import { useRDVContext } from '../Context/ContextRDV'
import Footer from '../Footer';

export default function DialogRDV() {
  // Utilisez la méthode useLocation our accéder à l'objet location
  const { confRDV, RDV } = useRDVContext();
  const navigate = useNavigate();
  if (confRDV === null) return <div>Loading...</div>;
  console.log(confRDV)  
  return (
    <div className='profile'>
      <img className='ml-[-100px] mt-[59px] w-[1400px] max-360:hidden' src={require("../../Photos/background.png")} alt="Acceuil" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}  >
        <img className='image max-360:w-[40px] max-360:h-[40px]' src={confRDV.Photo} />
        <div className='ml-[60px] mt-[-60px]'><p className='font-700 text-[35px]'>{confRDV.nom}</p>
          <div style={{ display: 'flex', justifyContent: 'align' }}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.3335 8L10.5002 10.9167L14.6668 8" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.16675 14.6667V6.33332C2.16675 5.8913 2.34234 5.46737 2.6549 5.15481C2.96746 4.84225 3.39139 4.66666 3.83341 4.66666H17.1667C17.6088 4.66666 18.0327 4.84225 18.3453 5.15481C18.6578 5.46737 18.8334 5.8913 18.8334 6.33332V14.6667C18.8334 15.1087 18.6578 15.5326 18.3453 15.8452C18.0327 16.1577 17.6088 16.3333 17.1667 16.3333H3.83341C3.39139 16.3333 2.96746 16.1577 2.6549 15.8452C2.34234 15.5326 2.16675 15.1087 2.16675 14.6667Z" stroke="black" stroke-width="1.25" />
            </svg>

            <p className='text-[15px] font-[700]'>{confRDV.mail}</p></div>
        </div>
        </div>
        <div className='mr-[100px] text-[13px] font-[700]'>
        <div>
        <button className="bg-white rounded-[50px] w-[114px] h-[36px] border-solid border-[2px] border-[#FF9C62] text-[#FF9C62] w-[101px] h-[36px] rounded-[10px] mt-[10px]" >Cabinet : {confRDV.cabinet} </button>
        <button className="bg-white ml-[5px] rounded-[50px] w-[144px] h-[36px] border-solid border-[2px] border-[#FF9C62]  text-[#FF9C62] w-[101px] h-[36px] rounded-[10px] mt-[10px]" >Grade : {confRDV.grade}</button>
        </div>
        <div>
        <button className="bg-white rounded-[50px] w-[165px] h-[36px] border-solid border-[2px] border-[#FF9C62]  text-[#FF9C62] w-[101px] h-[36px] rounded-[10px] mt-[10px]" > {confRDV.specialization}</button>
        <button className="bg-white rounded-[50px] ml-[5px] w-[96px] h-[36px] border-solid border-[2px] border-[#FF9C62]  text-[#FF9C62] w-[101px] h-[36px] rounded-[10px] mt-[10px]" >{confRDV.tarif} </button>
        </div>
        <button className="bg-black rounded-[50px] ml-[5px] w-[293px] h-[36px] border-solid border-[2px] border-black  text-white w-[101px] h-[36px] rounded-[10px] mt-[10px]"  onClick={() => {
        RDV()
        navigate('/');
        window.location.reload()
      }}>
        Confirmer le rendez-vous
      </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
