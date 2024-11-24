import React, { useState } from "react";
import {
  Shield,
  Users,
  DollarSign,
  Settings,
  LogOut,
  Bell,
  Star,
  Activity,
  CarFront,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "./ui/card/Card";
import Button from "./ui/Button";
import Modal from "./ui/modal/Modal";
import InitialSetupModal from "./InitialSetupModel";
import { Alert } from "./ui/Alert";
import {
  RankSalaryManager,
  InvitePlayerForm,
  ManageDutyForm,
  PromoteDemoteForm,
  SetLeaderForm,
  SetLogoForm,
  ManageVehicleForm,
} from "./ui/forms/forms";

// Component: Status Indicator
const StatusIndicator = ({ status }) => (
  <div className="flex items-center gap-2">
    <div
      className={`h-2 w-2 rounded-full ${
        status === "Online" ? "bg-green-500" : "bg-gray-500"
      } animate-pulse`}
    />
    <span className={status === "Online" ? "text-green-500" : "text-gray-500"}>
      {status}
    </span>
  </div>
);

// Component: StatCard
const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className={`${color} rounded-lg p-4 shadow-lg`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-200 opacity-80">{label}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
      </div>
      <Icon className="h-8 w-8 text-white opacity-75" />
    </div>
  </div>
);

// Component: ActionButton
const ActionButton = ({
  icon: Icon,
  label,
  onClick,
  color = "bg-gray-800",
}) => (
  <button
    onClick={onClick}
    className={`${color} w-full flex items-center gap-3 text-gray-200 hover:brightness-110 px-4 py-3 rounded-lg transition-all duration-200 shadow-md`}
  >
    <Icon className="h-5 w-5" />
    <span className="font-medium">{label}</span>
  </button>
);

// Component: FactionManager
const FactionManager = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [factionData, setFactionData] = useState({
    orgName: "Los Santos Police Department",
    orgType: "Law Enforcement",
    funds: 2500000,
    activeMembers: 12,
    totalMembers: 25,
  });

  const [activeModal, setActiveModal] = useState(null);
  const [members] = useState([
    {
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
    },
  ]);

  // Handlers
  const handleSetupSubmit = (data) => {
    setFactionData(data);
    setIsFirstTime(false);
    setIsDashboardOpen(true);
  };

  const closeModal = () => setActiveModal(null);
  const toggleDashboard = () => setIsDashboardOpen(!isDashboardOpen);

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
        return <ManageVehicleForm onClose={closeModal} />
      default:
        return null;
    }
  };

  // Faction Dashboard Content
  const FactionDashboard = () => (
    <div className="h-[80vh] w-[90vw] mx-auto my-10 overflow-y-auto bg-gray-900 text-white p-6">
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
            <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
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
            value={`${Math.round(
              (members.filter((m) => m.duty).length / members.length) * 100
            )}%`}
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
                        <th className="py-3 px-4 text-left">Actions</th>
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
                          <td className="py-3 px-4">
                            <button className="text-blue-400 hover:text-blue-300">
                              Manage
                            </button>
                          </td>
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
            <ActionButton
              icon={Shield}
              label="Set Leader"
              color="bg-blue-600 hover:bg-blue-700"
              onClick={() => setActiveModal('setLeader')}
            />
            <ActionButton
              icon={CarFront}
              label="Manage Vehicles"
              color="bg-blue-700 hover:bg-blue-800"
              onClick={() => setActiveModal('managevehicle')}
              
            />
            <ActionButton
              icon={Users}
              label="Invite Member"
              color="bg-blue-800 hover:bg-blue-900"
              onClick={() => setActiveModal('invite')}
            />
             <ActionButton 
                icon={Shield} 
                label="Set Logo" 
                color="bg-blue-800 hover:bg-blue-900"
                onClick={() => setActiveModal('setLogo')}
              />
            <ActionButton
              icon={Settings}
              label="Manage Ranks"
              color="bg-blue-900 hover:bg-blue-950"
              onClick={() => setActiveModal('promoteDemote')}
            />
            <ActionButton
              icon={DollarSign}
              label="Treasury"
              color="bg-indigo-600 hover:bg-indigo-700"
              onClick={() => setActiveModal('editSalary')}
            />
            <ActionButton
              icon={LogOut}
              label="Exit"
              color="bg-gray-800 hover:bg-gray-900"
              onClick={closeModal}
            />
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <h2 className="text-xl font-semibold">Recent Activity</h2>
          </CardHeader>
          <CardContent>
            <Alert className="bg-blue-900/30 border-blue-700">
              <Activity className="h-4 w-4" />
              <span className="ml-2">Mike Carter promoted to Lieutenant</span>
              <span className="ml-auto text-sm text-gray-400">2 hours ago</span>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <>
      {isFirstTime && (
        <InitialSetupModal
          onSubmit={handleSetupSubmit}
          onClose={toggleDashboard}
        />
      )}

      {isDashboardOpen && <FactionDashboard />}
      <Modal isOpen={!!activeModal} onClose={closeModal}>
        {getModalContent()}
      </Modal>
    </>
  );
};

export default FactionManager;
