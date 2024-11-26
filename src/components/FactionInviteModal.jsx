import React, { useState, useEffect } from 'react';

const FactionInviteModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [factionName, setFactionName] = useState('LCN');

  const handleAccept = () => {
    window.alt.emit('acceptFactionInvite');
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.alt.emit('declineFactionInvite');
    setIsOpen(false);
  };

  useEffect(() => {
    window.alt.on('showFactionInvite', (name) => {
      setFactionName(name);
      setIsOpen(true);
    });

    return () => {
      window.alt.off('showFactionInvite');
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div id='factioninvitationmodel' className="fixed inset-0 flex items-center justify-center">
      <div className="bg-black/80 border border-red-900/50 rounded-md shadow-lg w-96">
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-red-500 mb-2">
            Faction
          </h2>
          
          {/* Subtitle */}
          <h3 className="text-red-500/80 text-center text-sm mb-4">
          Invitation
          </h3>
          
          {/* Description */}
          <p className="text-slate-50 text-center mb-8">
          You have been invited to join the <br />
            <span className="font-bold">{factionName}</span><br />
            faction!
          </p>
          
          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDecline}
              className="px-6 py-2 bg-red-900/25 hover:bg-red-800/40 text-slate-50 border border-red-900/50 rounded transition-colors duration-200"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-red-900/25 hover:bg-red-800/40 text-slate-50 border border-red-900/50 rounded transition-colors duration-200"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactionInviteModal;