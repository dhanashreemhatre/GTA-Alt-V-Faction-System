import { useState } from "react";
import Button from "../button/Button";

const kickmemberout = (userid) => {
  if (!userid) {
    console.warn("User ID is required to kick a member.");
    return;
  }
 
  try {
    window.alt.emit("kickMember", userid); 
    console.log(`User with ID ${userid} kicked successfully.`);
  } catch (error) {
    console.error("Failed to kick member:", error);
  }
};

const KickMemberForm = ({ onClose, members }) => {
  const [userId, setUserId] = useState("");

  const handleKick = () => {
    kickmemberout(userId); 
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-slate-200">Kick Member</h2>
      <input
        type="text"
        placeholder="Enter member ID or username"
        value={userId} // Bind value to state
        onChange={(e) => setUserId(e.target.value)} // Update state on input change
        className="w-full p-2 mb-4 bg-gray-700 rounded"
      />
      <div className="flex justify-end gap-2">
        <Button
          onClick={onClose}
          variant="secondary"
          className="bg-blue-900 hover:bg-blue-950 text-slate-200"
        >
          Cancel
        </Button>
        <Button
          onClick={handleKick} // Use the handler that calls kickmemberout
          variant="destructive"
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-slate-200"
        >
          Kick Member
        </Button>
      </div>
    </div>
  );
};

export default KickMemberForm;
