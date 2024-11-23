import Button from "../Button";
import { useState } from "react";

const PromoteDemoteForm = ({ onClose, members }) => {
    const [selectedMember, setSelectedMember] = useState('');
    const [action, setAction] = useState('promote');
    const [newRank, setNewRank] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Rank change:', { member: selectedMember, action, newRank });
      onClose();
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Member
          </label>
          <select
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md mb-4"
            required
          >
            <option value="">Select a member</option>
            {members.map((member, index) => (
              <option key={index} value={member.name}>{member.name}</option>
            ))}
          </select>
  
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Action
          </label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md mb-4"
          >
            <option value="promote">Promote</option>
            <option value="demote">Demote</option>
          </select>
  
          <label className="block text-sm font-medium text-gray-300 mb-2">
            New Rank
          </label>
          <input
            type="text"
            value={newRank}
            onChange={(e) => setNewRank(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md"
            placeholder="Enter new rank"
            required
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="danger">Cancel</Button>
          <Button type="submit" variant="primary">Update Rank</Button>
        </div>
      </form>
    );
  };
export default PromoteDemoteForm;