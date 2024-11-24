import { Card, CardContent, CardHeader } from "./ui/card/Card";
import { Label } from "./ui/Label";
import Button from "./ui/Button";
import { useState } from "react";
import { Input } from "./ui/Input";

const InitialSetupModal = ({ onSubmit, onClose }) => {
  const [orgType, setOrgType] = useState('');
  const [orgName, setOrgName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ orgType, orgName });
  };

  return (
    <div className="fixed inset-0 text-white flex items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <h2 className="text-xl font-bold">Create New Faction</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgType">Organization Type</Label>
              <select
                id="orgType"
                value={orgType}
                onChange={(e) => setOrgType(e.target.value)}
                className="w-full h-10 rounded-md border border-gray-600 bg-gray-700 
                          px-3 py-2 text-sm text-white placeholder:text-gray-400 
                          focus:outline-none focus:ring-2 focus:ring-gray-400 
                          focus:border-transparent"
              >
                <option value="" disabled>Select organization type</option>
                <option value="government">Government</option>
                <option value="gang">Gang</option>
                <option value="private">Private</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="orgName">Organization Name</Label>
              <Input
                id="orgName"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Enter organization name"
              />
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={!orgType || !orgName}>
                Create Faction
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InitialSetupModal;