import Button from "../Button";
import { useState } from "react";
import { RANKS } from "../../constants/rank";
import { Card } from "../card/Card";
import { Label } from "../Label";
// import { RadioGroup,RadioGroupItem } from "@radix-ui/react-radio-group";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const PromoteDemoteForm = ({ onClose, members }) => {
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedRank, setSelectedRank] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Rank change:', { member: selectedMember, newRank: selectedRank });
    onClose();
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-gray-300">Select Member</Label>
          <select
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md"
            required
          >
            <option value="">Select a member</option>
            {members.map((member, index) => (
              <option key={index} value={member.name}>{member.name}</option>
            ))}
          </select>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-300 mb-3 block">Select New Rank</Label>
          <div className="max-h-[50vh] overflow-y-auto pr-4">
            <RadioGroup
              value={selectedRank}
              onValueChange={setSelectedRank}
              className="space-y-2"
            >
              {RANKS.map((rank) => (
                <div key={rank} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                  <RadioGroupItem value={rank} id={rank} />
                  <Label htmlFor={rank} className="cursor-pointer w-full">
                    {rank}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button 
            variant="destructive" 
            onClick={onClose} 
            type="button"
            className="bg-blue-900 hover:bg-blue-950"
          >
            Cancel
          </Button>
          <Button 
            variant="default"
            type="submit"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Update Rank
          </Button>
        </div>
      </form>
    </Card>
  );
  };
export default PromoteDemoteForm;