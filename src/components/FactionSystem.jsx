import React, { useState } from 'react';
import { Shield, Users, DollarSign, Settings, LogOut, ChevronUp, ChevronDown, X,CarFront } from 'lucide-react';
import police_logo from './../assets/los-loice.jpeg'
import { Card,CardHeader,CardContent } from './ui/card/Card';
import Button from './ui/Button';
import MemberRow from './app/MemberRow';
import {RankSalaryManager,InvitePlayerForm,ManageDutyForm,PromoteDemoteForm,SetLeaderForm,SetLogoForm} from './ui/forms/forms'
import Modal from './ui/modal/Modal';
import InitialSetupModal from './InitialSetupModel';

const ActionButton = ({ icon: Icon, label, onClick }) => (
  <Button 
    onClick={onClick}
    className="w-full flex items-center gap-2 text-gray-200 hover:bg-gray-700 px-4 py-2 rounded-md"
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </Button>
);

const FactionManager = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [factionData, setFactionData] = useState(null);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const OpenFactionDashboard = () => {
    // If it's the first time, show setup modal
    if (isFirstTime) {
      setIsOpen(true);
    } else if (factionData) {
      // If faction already exists, just open dashboard
      setIsOpen(true);
    }
  };

  const handleSetupSubmit = (data) => {
    setFactionData(data);
    setIsFirstTime(false);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


const FactionDashboard = () => {
  
    const [activeModal, setActiveModal] = useState(null);
  
    const [members] = useState([
      {
        name: "Xan Jing",
        rank: "Chief of Police",
        status: "Online",
        lastSeen: "Today",
        leader: false,
        salary: 2000,
        duty: false
      }
    ]);
  
    // Modal handlers
    const closeModal = () => setActiveModal(null);
    
    // Get modal content based on active modal
    const getModalContent = () => {
      switch (activeModal) {
        case 'setLeader':
          return <SetLeaderForm onClose={closeModal} members={members} />;
        case 'invite':
          return <InvitePlayerForm onClose={closeModal} />;
        case 'setLogo':
          return <SetLogoForm onClose={closeModal} />;
        case 'manageDuty':
          return <ManageDutyForm onClose={closeModal} members={members} />;
        case 'promoteDemote':
          return <PromoteDemoteForm onClose={closeModal} members={members} />;
        case 'editSalary':
          return <RankSalaryManager onClose={closeModal} members={members} />;
        default:
          return null;
      }
    };
  
    // Get modal title based on active modal
    const getModalTitle = () => {
      switch (activeModal) {
        case 'setLeader': return 'Set Leader';
        case 'invite': return 'Invite Player';
        case 'setLogo': return 'Set Faction Logo';
        case 'manageDuty': return 'Manage Duty Status';
        case 'promoteDemote': return 'Promote/Demote Member';
        case 'editSalary': return 'Edit Salary';
        default: return '';
      }
    };

  return (
    <div className="min-h-screen text-white p-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
                <Shield className="h-6 w-6" />
                {factionData?.orgName || 'Faction Dashboard'}
                <span className="text-sm text-gray-400">({factionData?.orgType})</span>
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Members: {members.length}</span>
              <img 
                src={police_logo}
                alt="Faction Logo"
                className="h-12 w-12 rounded-full"
              />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            {/* Members Table */}
            <div className="col-span-3">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left bg-gray-700">
                      <th className="py-2 px-4">Name</th>
                      <th className="py-2 px-4">Rank</th>
                      <th className="py-2 px-4">Status</th>
                      <th className="py-2 px-4">Last Seen</th>
                      <th className="py-2 px-4">Leader</th>
                      <th className="py-2 px-4">Salary</th>
                      <th className="py-2 px-4">Duty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member, index) => (
                      <MemberRow key={index} member={member} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Sidebar */}
            <div className="space-y-2">
              <ActionButton 
                icon={Users} 
                label="Set Leader" 
                onClick={() => setActiveModal('setLeader')}
              />
               <ActionButton 
                icon={CarFront} 
                label="Add/Remove Vehicle" 
                onClick={() => setActiveModal('setLeader')}
              />
              <ActionButton 
                icon={Users} 
                label="Invite Player" 
                onClick={() => setActiveModal('invite')}
              />
              <ActionButton 
                icon={Shield} 
                label="Set Logo" 
                onClick={() => setActiveModal('setLogo')}
              />
              <ActionButton 
                icon={Settings} 
                label="Manage Duty" 
                onClick={() => setActiveModal('manageDuty')}
              />
              <ActionButton 
                icon={ChevronUp} 
                label="Promote/Demote" 
                onClick={() => setActiveModal('promoteDemote')}
              />
              <ActionButton 
                icon={DollarSign} 
                label="Edit Salary & Ranks" 
                onClick={() => setActiveModal('editSalary')}
              />
              <ActionButton icon={LogOut} label="Close" onClick={closeModal} />
            </div>
          </div>
        </CardContent>
      </Card>
       {/* Modal */}
       <Modal
        isOpen={!!activeModal}
        onClose={closeModal}
        title={getModalTitle()}
      >
        {getModalContent()}
      </Modal>
    </div>
  );
};

return (
  <>
    {isFirstTime && isOpen && (
      <InitialSetupModal 
        onSubmit={handleSetupSubmit}
        onClose={() => setIsOpen(false)}
      />
    )}
    
    {isOpen && !isFirstTime && factionData && (
      <FactionDashboard />
    )}
    
    {/* Example button to open dashboard */}
    <Button 
      onClick={OpenFactionDashboard}
      className="fixed bottom-4 right-4 bg-black/90 text-white"
    >
      {isOpen ? 'Close Dashboard' : 'Open Dashboard'}
    </Button>
  </>
);
};

export default FactionManager;
