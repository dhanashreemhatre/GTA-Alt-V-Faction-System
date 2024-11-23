import Button from "../Button";
import { useState } from "react";

const SetLeaderForm = ({ onClose, members }) => {
    const [selectedMember, setSelectedMember] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Setting leader:', selectedMember);
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
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md"
            required
          >
            <option value="">Select a member</option>
            {members.map((member, index) => (
              <option key={index} value={member.name}>{member.name}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="danger">Cancel</Button>
          <Button type="submit" variant="primary">Set Leader</Button>
        </div>
      </form>
    );
  };
export default SetLeaderForm;