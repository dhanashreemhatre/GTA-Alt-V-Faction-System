import Button from "../Button";
import { useState } from "react";

const EditSalaryForm = ({ onClose, members }) => {
    const [selectedMember, setSelectedMember] = useState('');
    const [newSalary, setNewSalary] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Salary update:', { member: selectedMember, salary: newSalary });
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
            New Salary
          </label>
          <input
            type="number"
            value={newSalary}
            onChange={(e) => setNewSalary(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md"
            placeholder="Enter new salary"
            required
            min="0"
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="danger">Cancel</Button>
          <Button type="submit" variant="primary">Update Salary</Button>
        </div>
      </form>
    );
  };

export default EditSalaryForm;