import Button from "../button/Button";
import { useState } from "react";

const InvitePlayerForm = ({ onClose }) => {
    const [playerName, setPlayerName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Inviting player:', playerName);
      onClose();
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Player Name
          </label>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md"
            placeholder="Enter player name"
            required
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="danger" className="bg-blue-900 hover:bg-blue-950">Cancel</Button>
          <Button type="submit" variant="primary" className="bg-blue-600 hover:bg-blue-700">Invite</Button>
        </div>
      </form>
    );
  };

export default InvitePlayerForm;