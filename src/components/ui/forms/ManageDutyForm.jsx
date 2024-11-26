import Button from "../button/Button";
import { useState } from "react";


const ManageDutyForm = ({ onClose, members }) => {
    const [selectedMember, setSelectedMember] = useState('');
    const [dutyStatus, setDutyStatus] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Setting duty status:', { member: selectedMember, status: dutyStatus });
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
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={dutyStatus}
              onChange={(e) => setDutyStatus(e.target.checked)}
              className="form-checkbox h-4 w-4"
            />
            <span>On Duty</span>
          </label>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="danger" className="bg-blue-900 hover:bg-blue-950">Cancel</Button>
          <Button type="submit" variant="primary" className="bg-blue-600 hover:bg-blue-700">Update Duty</Button>
        </div>
      </form>
    );
  };
export default ManageDutyForm;