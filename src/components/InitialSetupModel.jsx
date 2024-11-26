import { Card, CardContent, CardHeader } from "./ui/card/Card";
import { Label } from "./ui/Label";
import Button from "./ui/button/Button";
import { useState, useEffect } from "react";
import { Input } from "./ui/Input";
import { toast } from "sonner"; // Assuming you're using sonner for notifications

const InitialSetupModal = () => {
  const [orgType, setOrgType] = useState('');
  const [orgName, setOrgName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Set up listeners for server responses
  useEffect(() => {
    // Success handler
    const handleCreateSuccess = (factionId) => {
      setIsLoading(false);
      toast.success('Faction Created', {
        description: `${orgName} has been successfully created.`
      });
      setIsModalOpen(false);
    };

    // Error handler
    const handleCreateError = (errorMsg) => {
      setIsLoading(false);
      toast.error('Faction Creation Failed', {
        description: errorMsg || 'An unexpected error occurred.'
      });
    };

    // Add window.alt:V event listeners
    if (window.alt) {
      window.alt.on('faction:create:success', handleCreateSuccess);
      window.alt.on('faction:create:error', handleCreateError);
    }

    // Cleanup listeners
    return () => {
      if (window.alt) {
        window.alt.off('faction:create:success', handleCreateSuccess);
        window.alt.off('faction:create:error', handleCreateError);
      }
    };
  }, [orgName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!orgType || !orgName) {
      toast.error('Validation Error', {
        description: 'Please fill in all fields.'
      });
      return;
    }

    // Set loading state
    setIsLoading(true);
    
    // window.alt:V client-side emit to server
    if (window.alt && window.alt.emit) {
      window.alt.emit('faction:create', { orgType, orgName });
    }
  };

  // If modal is closed, return null
  if (!isModalOpen) return null;

  return (
    <div id="initialSetupModel" className="fixed inset-0 text-white flex items-center justify-center z-50">
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
              <Button 
                variant="outline" 
                type="button"
                onClick={() => setIsModalOpen(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={!orgType || !orgName || isLoading}
              >
                {isLoading ? 'Creating...' : 'Create Faction'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

// Corresponding server-side example (for reference)
/*
// In your server script
window.alt.on('faction:create', (player, data) => {
  // Validate data
  if (!data.orgType || !data.orgName) {
    window.alt.emitClient(player, 'faction:create:error', 'Invalid faction data');
    return;
  }

  // Check for duplicate faction names
  if (factionAlreadyExists(data.orgName)) {
    window.alt.emitClient(player, 'faction:create:error', 'A faction with this name already exists');
    return;
  }

  try {
    // Create faction
    const factionId = createFaction(player, data.orgType, data.orgName);
    
    // Notify client of successful creation
    window.alt.emitClient(player, 'faction:create:success', factionId);
  } catch (error) {
    window.alt.emitClient(player, 'faction:create:error', 'Failed to create faction');
  }
});
*/

export default InitialSetupModal;