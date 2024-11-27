import React, { useState,useRef } from 'react';
import {
  Shield, Users, DollarSign, Settings, LogOut, Bell, Star, Activity, 
  CarFront, Info, UserMinus, Trash2
} from "lucide-react";
import { Card, CardHeader, CardContent } from "./ui/card/Card";
import ActionButton from "./ui/button/ActionButton";
import StatCard from "./ui/card/StatCard";
import StatusIndicator from "./ui/card/StatusIndicator";
import Modal from "./ui/modal/Modal";
import { Alert } from "./ui/Alert";
import {
  RankSalaryManager, InvitePlayerForm, ManageDutyForm, 
  PromoteDemoteForm, SetLeaderForm, SetLogoForm, 
  ManageVehicleForm, DeleteFactionConfirm, 
  LeaveFactionConfirm, KickMemberForm
} from "./ui/forms/forms";

const FactionSystem = ({   
  initialFactionData, 
  isAdmin = false, 
  adminPrivileges = {
    setLeader: true,
    inviteMember: true,
    setLogo: true,
    manageRanks: true,
    manageTreasury: true,
    kickMember: true,
    deleteFaction: true} }) => {
  const [factionData, setFactionData] = useState(initialFactionData || {
    orgName: "Unnamed Faction",
    orgType: "Unspecified",
    funds: 0,
    activeMembers: 0,
    totalMembers: 0
  });

  const [activeModal, setActiveModal] = useState(null);
  const [members, setMembers] = useState([ {
    name: "Xan Jing",
    rank: "Chief of Police",
    status: "Online",
    lastSeen: "Now",
    leader: true,
    salary: 2000,
    duty: true,
  },
  {
    name: "Mike Carter",
    rank: "Lieutenant",
    status: "Online",
    lastSeen: "Now",
    leader: false,
    salary: 1500,
    duty: true,
  },
  {
    name: "Sarah Rodriguez",
    rank: "Sergeant",
    status: "Offline",
    lastSeen: "2 hours ago",
    leader: false,
    salary: 1200,
    duty: false,
  },]);
  const recentActivityRef = useRef(null);

  const scrollToDashboard = () => {
    if (recentActivityRef.current) {
      recentActivityRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const closeModal = () => setActiveModal(null);

  const getModalContent = () => {
    switch (activeModal) {
      case "setLeader":
        return <SetLeaderForm onClose={closeModal} members={members} />;
      case "invite":
        return <InvitePlayerForm onClose={closeModal} />;
      case "setLogo":
        return <SetLogoForm onClose={closeModal} />;
      case "manageDuty":
        return <ManageDutyForm onClose={closeModal} members={members} />;
      case "promoteDemote":
        return <PromoteDemoteForm onClose={closeModal} members={members} />;
      case "editSalary":
        return <RankSalaryManager onClose={closeModal} members={members} />;
      case "managevehicle":
        return <ManageVehicleForm onClose={closeModal} isAdmin={isAdmin} />;
      case "kickMember":
        return <KickMemberForm onClose={closeModal} members={members} />;
      case "deleteFaction":
        return <DeleteFactionConfirm onClose={closeModal} />;
      case "leaveFaction":
        return <LeaveFactionConfirm onClose={closeModal} />;
      default:
        return null;
    }
  };

  const BasicActions = () => (
    <>
      <ActionButton
        icon={Info}
        label="Faction Info"
        color="bg-blue-600 hover:bg-blue-700"
        onClick={() => {/* Handle faction info */}}
      />
      <ActionButton
        icon={CarFront}
        label="Faction Vehicles"
        color="bg-blue-700 hover:bg-blue-800"
        onClick={() => setActiveModal('managevehicle')}
      />
      <ActionButton
        icon={Activity}
        label="Dashboard"
        color="bg-blue-800 hover:bg-blue-900"
        onClick={scrollToDashboard}
      />
      <ActionButton
        icon={LogOut}
        label="Leave Faction"
        color="bg-red-600 hover:bg-red-700"
        onClick={() => setActiveModal('leaveFaction')}
      />
    </>
  );

  const AdminActions = () => (
    <div className="space-y-3 bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Admin Settings</h3>
      {adminPrivileges.setLeader && (
        <ActionButton
          icon={Shield}
          label="Set Leader"
          color="bg-blue-600 hover:bg-blue-700"
          onClick={() => setActiveModal('setLeader')}
        />
      )}
      {adminPrivileges.inviteMember && (
        <ActionButton
          icon={Users}
          label="Invite Member"
          color="bg-blue-800 hover:bg-blue-900"
          onClick={() => setActiveModal('invite')}
        />
      )}
      {adminPrivileges.setLogo && (
        <ActionButton 
          icon={Shield} 
          label="Set Logo" 
          color="bg-blue-800 hover:bg-blue-900"
          onClick={() => setActiveModal('setLogo')}
        />
      )}
       <ActionButton
        icon={CarFront}
        label="Faction Vehicles"
        color="bg-blue-700 hover:bg-blue-800"
        onClick={() => setActiveModal('managevehicle')}
      />
      {adminPrivileges.manageRanks && (
        <ActionButton
          icon={Settings}
          label="Manage Ranks"
          color="bg-blue-900 hover:bg-blue-950"
          onClick={() => setActiveModal('promoteDemote')}
        />
      )}
      {adminPrivileges.manageTreasury && (
        <ActionButton
          icon={DollarSign}
          label="Treasury"
          color="bg-indigo-600 hover:bg-indigo-700"
          onClick={() => setActiveModal('editSalary')}
        />
      )}
      {adminPrivileges.kickMember && (
        <ActionButton
          icon={UserMinus}
          label="Kick Member"
          color="bg-red-600 hover:bg-red-700"
          onClick={() => setActiveModal('kickMember')}
        />
      )}
      {adminPrivileges.deleteFaction && (
        <ActionButton
          icon={Trash2}
          label="Delete Faction"
          color="bg-red-800 hover:bg-red-900"
          onClick={() => setActiveModal('deleteFaction')}
        />
      )}
    </div>
  );

  const ActionSidebar = () => (
    <div className="space-y-3">
      {isAdmin ? (
        <AdminActions />
      ) : (
        <>
          <BasicActions />
        </>
      )}
    </div>
  );
  return (
    <div id='factionsystem' className="h-[80vh] w-[90vw] mx-auto my-10 overflow-y-auto bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{factionData.orgName}</h1>
              <p className="text-gray-400">{factionData.orgType}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700" onClick={scrollToDashboard}>
              <Bell className="h-5 w-5" />
            </button>
            <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            icon={DollarSign}
            label="Treasury"
            value={`$${(factionData.funds || 0).toLocaleString()}`}
            color="bg-gradient-to-br from-blue-600 to-blue-800"
          />
          <StatCard
            icon={Users}
            label="Active Members"
            value={`${factionData.activeMembers}/${factionData.totalMembers}`}
            color="bg-gradient-to-br from-indigo-600 to-indigo-800"
          />
          <StatCard
            icon={Activity}
            label="Duty Status"
            value={`${members.length > 0 ? Math.round(
              (members.filter((m) => m.duty).length / members.length) * 100
            ) : 0}%`}
            color="bg-gradient-to-br from-blue-700 to-blue-900"
          />
          <StatCard
            icon={Star}
            label="Faction Rating"
            value="A+"
            color="bg-gradient-to-br from-blue-800 to-blue-950"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-4 gap-6">
          {/* Members Table */}
          <div className="col-span-3">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <h2 className="text-xl font-semibold">Members</h2>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Rank</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Last Seen</th>
                        <th className="py-3 px-4 text-left">Salary</th>
                       {isAdmin &&  <th className="py-3 px-4 text-left">Actions</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {members.map((member, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-700/50 hover:bg-gray-700/30"
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              {member.leader && (
                                <Star className="h-4 w-4 text-yellow-500" />
                              )}
                              {member.name}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 rounded-full text-sm bg-blue-900/50">
                              {member.rank}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <StatusIndicator status={member.status} />
                          </td>
                          <td className="py-3 px-4 text-gray-400">
                            {member.lastSeen}
                          </td>
                          <td className="py-3 px-4">${member.salary}</td>
                          {isAdmin && <td className="py-3 px-4">
                            <button className="text-blue-400 hover:text-blue-300">
                              Manage
                            </button>
                          </td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Sidebar */}
          <div className="space-y-3">
            <ActionSidebar />
          </div>
        </div>

        {/* Recent Activity */}
        <div ref={recentActivityRef}>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <h2 className="text-xl font-semibold">Recent Activity</h2>
          </CardHeader>
          <CardContent>
            <Alert className="bg-blue-900/30 border-blue-700">
              <Activity className="h-4 w-4" />
              <span className="ml-2">No recent activity</span>
              <span className="ml-auto text-sm text-gray-400">-</span>
            </Alert>
          </CardContent>
        </Card>
        </div>
      </div>

      {/* Modal for various actions */}
      <Modal isOpen={!!activeModal} onClose={closeModal}>
        {getModalContent()}
      </Modal>
    </div>
  );
};

export default FactionSystem;