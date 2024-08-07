import React from "react";
import '../Styles/Footer.css'; // Ensure to import the CSS file

function Footer() {
    return (
        <div  className="footer-container bg-black w-full  p-8 text-white">
            <div className="footer-left-part">
                <div className="footer-left">
                    <div className="footer-links max-360:text-[12px] ">
                        <p className="font-bold text-[20px] text-white"> A propos</p>
                        <p style={{ color: '#7B788D' }}>Accueil</p>
                        <p style={{ color: '#7B788D' }}>Consultation</p>
                        <p style={{ color: '#7B788D' }}>Compte</p>
                        <p style={{ color: '#7B788D' }}>Assistant</p>
                    </div>
                    <div className="footer-contact max-360:text-[12px]">
                        <p className="font-bold text-[20px] text-white">Contact</p>
                        <p style={{ color: '#7B788D' }}>Mail</p>
                        <p style={{ color: '#7B788D' }}>Facebook</p>
                        <p style={{ color: '#7B788D' }}> Whatsapp</p>
                    </div>
                </div>
            </div>

            <div className="footer-divider"></div> {/* Vertical line */}

            <div className="footer-right-part">
                <span className="footer-question max-360:text-[20px] font-[800] text-[35px]">Vous avez</span>
                <span className="footer-question font-400 max-360:text-[20px] font-[800] text-[35px]">des questions?</span>
                <p className="max-360:text-[12px]">N'hésitez pas à nous appeler ou envoyer</p>
                <p className="max-360:text-[12px]">un mail pour en discuter</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <input
                        type="text"
                        placeholder="Entrer votre mail"
                        className="footer-input"

                    />
                    <button
                        className="footer-button"
                    >
                        Envoyer
                    </button>
                </div>
            </div>
            <div className="footer-horizontal-line"></div> {/* Horizontal line */}
        </div>
    );
}

export default Footer;
