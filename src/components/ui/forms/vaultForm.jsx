import React, { useState } from 'react';
import { DollarSign } from "lucide-react";
import { Card, CardHeader, CardContent } from "../card/Card";
import ActionButton from '../button/ActionButton';
import Modal from '../modal/Modal';

const VaultManagementForm = ({ 
  onClose, 
  currentVaultBalance, 
  onAddFunds 
}) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleAddFunds = () => {
    // Validate input
    const numAmount = parseFloat(amount);
    
    if (isNaN(numAmount) || numAmount <= 0) {
      setError('Please enter a valid positive number');
      return;
    }

    if (numAmount > 1000000) {  // Prevent unrealistic amounts
      setError('Maximum deposit is $1,000,000');
      return;
    }

    // Call the function to add funds
    onAddFunds(numAmount);
    
    // Close the modal
    onClose();
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800 border-gray-700">
      <CardHeader>
        <h2 className="text-xl font-semibold text-white">Faction Vault Management</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Current Vault Balance
            </label>
            <div className="bg-gray-700 p-3 rounded-lg text-white font-bold">
              ${currentVaultBalance.toLocaleString()}
            </div>
          </div>

          <div>
            <label 
              htmlFor="amount" 
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Add Funds
            </label>
            <input 
              type="number" 
              id="amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setError('');
              }}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount to deposit"
              min="0"
              max="1000000"
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddFunds}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Add to Vault
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// This would be added to your existing FactionSystem component
const VaultManagementButton = ({ 
  currentFunds, 
  onUpdateFunds, 
  isAdmin 
}) => {
  const [isVaultModalOpen, setIsVaultModalOpen] = useState(false);

  const handleAddFunds = (amount) => {
    // This is a placeholder. In a real app, you'd integrate with your backend/game server
    onUpdateFunds(currentFunds + amount);
  };

  if (!isAdmin) return null;  // Only admins can manage vault

  return (
    <>
      <ActionButton
        icon={DollarSign}
        label="Vault Management"
        color="bg-green-600 hover:bg-green-700"
        onClick={() => setIsVaultModalOpen(true)}
      />

      <Modal 
        isOpen={isVaultModalOpen} 
        onClose={() => setIsVaultModalOpen(false)}
      >
        <VaultManagementForm 
          onClose={() => setIsVaultModalOpen(false)}
          currentVaultBalance={currentFunds}
          onAddFunds={handleAddFunds}
        />
      </Modal>
    </>
  );
};

export { VaultManagementButton, VaultManagementForm };