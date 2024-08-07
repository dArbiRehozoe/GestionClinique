import React, { useEffect, useState } from "react";
import "../Styles/DocteurPage.css";
import Ajout_docteur from "./SC_DocteurPage/Ajout_docteur";
import InfoDocteur from "./SC_DocteurPage/InfoDocteur";
import { useDocteurContext } from "./Context/ContextDocteur";
import Modif_docteur from "./SC_DocteurPage/Modif_docteur";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const ListeDocteur = () => {
  const [recherche, setRecherche] = useState("");
  const [openProps, setOpenProps] = useState(false);
  const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(null);
  const [openAjout, setopenAjout] = useState(false);
  const [openModif, setopenModif] = useState(false);
  const navigate = useNavigate();

  const { Docteur } = useDocteurContext();

  if (!Docteur) return <div>Loading</div>;

  const renderCards = () => {
    // Use slice to get the first 6 doctors
    const displayedDoctors = Docteur.slice(0, 6);
    return (
      <div className="flex flex-wrap -mx-4" style={{ display: "flex" }}>
        {displayedDoctors.map((medecin, idx) => (
          <div
            key={medecin.id} // Add a unique key for each item
            style={{ display: "block" }}
            className="flex space-between ml-[40px] mt-[10px]"
          >
            <img
              className="w-32 h-32 ml-4 mr-4 mt-4 rounded-full shadow-lg"
              src={medecin.Photo}
              alt="Doctor image"
            />
            <h5
              style={{ textAlign: "center" }}
              className="mt-[10px] mb-1 text-xl text-gray-900 dark:text-white"
            >
              {medecin.nom}
            </h5>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="title" style={{ display: "flex" }}>
        {renderCards()}
      </div>
    </div>
  );
};

export default ListeDocteur;
