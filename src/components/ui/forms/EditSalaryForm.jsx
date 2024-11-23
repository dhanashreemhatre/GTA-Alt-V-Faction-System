import Button from "../Button";
import { useState } from 'react';
import { Card } from "../card/Card";
import { Alert, AlertDescription } from './../Alert';

const POLICE_RANKS = [
  { rank: "Cadet", defaultSalary: 0 },
  { rank: "Academy Student", defaultSalary: 0 },
  { rank: "Police Officer I", defaultSalary: 0 },
  { rank: "Police Officer II", defaultSalary: 0 },
  { rank: "Police Officer III", defaultSalary: 0 },
  { rank: "Police Officer III+1", defaultSalary: 0 },
  { rank: "Detective I", defaultSalary: 0 },
  { rank: "Detective II", defaultSalary: 0 },
  { rank: "Detective III", defaultSalary: 0 },
  { rank: "Sergeant I", defaultSalary: 0 },
  { rank: "Sergeant II", defaultSalary: 0 },
  { rank: "Lieutenant I", defaultSalary: 5 },
  { rank: "Lieutenant II", defaultSalary: 0 },
  { rank: "Captain I", defaultSalary: 0 },
  { rank: "Commander", defaultSalary: 0 },
  { rank: "Deputy Chief of Police", defaultSalary: 0 },
  { rank: "Assistant Chief of Police", defaultSalary: 0 },
  { rank: "Chief of Police", defaultSalary: 2000 }
];

const EditSalaryForm = ({ onClose, members }) => {
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedRank, setSelectedRank] = useState('');
  const [newSalary, setNewSalary] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Salary update:', { 
      member: selectedMember, 
      rank: selectedRank,
      salary: parseInt(newSalary) 
    });
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 1500);
  };

  const handleRankChange = (e) => {
    const rank = e.target.value;
    setSelectedRank(rank);
    const defaultSalary = POLICE_RANKS.find(r => r.rank === rank)?.defaultSalary || 0;
    setNewSalary(defaultSalary.toString());
  };

  return (
    <Card className="p-6 bg-gray-800 text-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        {showSuccess && (
          <Alert className="bg-green-600 text-white mb-4">
            <AlertDescription>
              Salary updated successfully!
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Member
            </label>
            <select
              value={selectedMember}
              onChange={(e) => setSelectedMember(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select a member</option>
              {members.map((member, index) => (
                <option key={index} value={member.name}>{member.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Rank
            </label>
            <select
              value={selectedRank}
              onChange={handleRankChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select a rank</option>
              {POLICE_RANKS.map((rank, index) => (
                <option key={index} value={rank.rank}>{rank.rank}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Salary Amount
            </label>
            <input
              type="number"
              value={newSalary}
              onChange={(e) => setNewSalary(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter salary amount"
              required
              min="0"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Update Salary
          </button>
        </div>
      </form>
    </Card>
  );
};

export default EditSalaryForm;