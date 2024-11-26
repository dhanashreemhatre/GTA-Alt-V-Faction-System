import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import FactionInviteModal from './components/FactionInviteModal';
import FactionSystem from './components/FactionSystem';
import InitialSetupModal from './components/InitialSetupModel';

function App() {
  const [isFactionSystemOpen, setIsFactionSystemOpen] = useState(false);
  const [factionSystemData, setFactionSystemData] = useState(null); // State to store dynamic data
  const [isFactionInviteOpen, setIsFactionInviteOpen] = useState(false);
  const [isInitialSetupOpen, setIsInitialSetupOpen] = useState(false);

  // Function to open FactionSystem modal with parameters
  const openFactionSystem = (data) => {
    setFactionSystemData(data); // Store passed data
    setIsFactionSystemOpen(true); // Open modal
  };

  const closeFactionSystem = () => {
    setFactionSystemData(null); // Clear data when modal is closed
    setIsFactionSystemOpen(false);
  };

  const openFactionInvite = () => setIsFactionInviteOpen(true);
  const closeFactionInvite = () => setIsFactionInviteOpen(false);

  const openInitialSetup = () => setIsInitialSetupOpen(true);
  const closeInitialSetup = () => setIsInitialSetupOpen(false);

  // Attach open functions to `window` object (optional)
  window.openFactionSystem = openFactionSystem;
  window.openFactionInvite = openFactionInvite;
  window.openInitialSetup = openInitialSetup;

  useEffect(() => {
    window.openFactionSystem = openFactionSystem;
    window.openFactionInvite = openFactionInvite;
    window.openInitialSetup = openInitialSetup;
    return () => {
      delete window.openFactionSystem;
      delete window.openFactionInvite;
      delete window.openInitialSetup;
    };
  }, []);
  

  return (
    <>
      {isFactionSystemOpen && factionSystemData && (
  <div className="modal">
    <div className="modal-content">
      <button className="close" onClick={closeFactionSystem}>
        &times;
      </button>
      <FactionSystem 
        initialFactionData={factionSystemData.initialFactionData} 
        isAdmin={factionSystemData.isAdmin} 
      />
    </div>
  </div>
)}


      {/* FactionInviteModal */}
      {isFactionInviteOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeFactionInvite}>
              &times;
            </button>
            <FactionInviteModal />
          </div>
        </div>
      )}

      {/* InitialSetupModal */}
      {isInitialSetupOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeInitialSetup}>
              &times;
            </button>
            <InitialSetupModal />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
