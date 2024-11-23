import React, { useState } from 'react';
import { Shield, Users, DollarSign, Settings, LogOut, ChevronUp, ChevronDown } from 'lucide-react';

// Custom Card Components
const Card = ({ children, className = '' }) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4 border-b border-gray-700 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

// Custom Button Component
const Button = ({ children, className = '', onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md transition-colors ${className}`}
  >
    {children}
  </button>
);

// Member Row Component
const MemberRow = ({ member }) => (
  <tr className="border-b border-gray-700">
    <td className="py-2 px-4">{member.name}</td>
    <td className="py-2 px-4">{member.rank}</td>
    <td className="py-2 px-4">
      <span className={`px-2 py-1 rounded ${member.status === 'Online' ? 'bg-green-600' : 'bg-red-600'}`}>
        {member.status}
      </span>
    </td>
    <td className="py-2 px-4">{member.lastSeen}</td>
    <td className="py-2 px-4">{member.leader ? 'Yes' : 'No'}</td>
    <td className="py-2 px-4">${member.salary}</td>
    <td className="py-2 px-4">{member.duty ? 'On Duty' : 'Off Duty'}</td>
  </tr>
);

// Action Button Component
const ActionButton = ({ icon: Icon, label, onClick }) => (
  <Button 
    onClick={onClick}
    className="w-full flex items-center gap-2 text-gray-200 hover:bg-gray-700 px-4 py-2 rounded-md"
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </Button>
);

// Main Component
const FactionDashboard = () => {
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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Los Santos Police Department
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Members: {members.length}</span>
              <img 
                src="/api/placeholder/64/64"
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
              <ActionButton icon={Users} label="Set Leader" />
              <ActionButton icon={Users} label="Invite Player" />
              <ActionButton icon={Shield} label="Set Logo" />
              <ActionButton icon={Settings} label="Manage Duty" />
              <ActionButton icon={ChevronUp} label="Promote/Demote" />
              <ActionButton icon={DollarSign} label="Edit Salary & Ranks" />
              <ActionButton icon={LogOut} label="Close" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FactionDashboard;