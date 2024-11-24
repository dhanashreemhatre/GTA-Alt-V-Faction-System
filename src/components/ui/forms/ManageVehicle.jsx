import React, { useState } from "react";
import Button from "../Button";
import { Car, Truck, Shield, X, Plus, Archive } from "lucide-react";

const VehicleManagementForm = ({ onClose }) => {
  const [logoUrl, setLogoUrl] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    type: "",
    licensePlate: "",
    description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Setting logo:", logoUrl);
    console.log("Current vehicles:", vehicles);
    onClose();
  };

  const handleAddVehicle = (e) => {
    e.preventDefault();
    if (newVehicle.type && newVehicle.licensePlate) {
      setVehicles([...vehicles, newVehicle]);
      setNewVehicle({ type: "", licensePlate: "", description: "" });
    }
  };

  const handleRemoveVehicle = (licensePlate) => {
    setVehicles(vehicles.filter(v => v.licensePlate !== licensePlate));
  };

  return (
    <div className="space-y-6 p-6 bg-gray-900 rounded-lg h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

        {/* Vehicle Stats */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <Car className="w-5 h-5 mr-2" />
            Vehicle Statistics
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-700/50 p-4 rounded-lg">
              <p className="text-indigo-200 text-sm">Total Vehicles</p>
              <p className="text-2xl font-bold text-white">{vehicles.length}</p>
            </div>
            <div className="bg-indigo-700/50 p-4 rounded-lg">
              <p className="text-indigo-200 text-sm">Available</p>
              <p className="text-2xl font-bold text-white">{vehicles.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Vehicle Section */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <Truck className="w-5 h-5 mr-2" />
          Add New Vehicle
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            value={newVehicle.type}
            onChange={(e) => setNewVehicle({...newVehicle, type: e.target.value})}
            className="px-4 py-3 bg-blue-800/50 border border-blue-600/30 rounded-lg text-white placeholder-blue-300/70"
            placeholder="Vehicle Type"
          />
          <input
            type="text"
            value={newVehicle.licensePlate}
            onChange={(e) => setNewVehicle({...newVehicle, licensePlate: e.target.value})}
            className="px-4 py-3 bg-blue-800/50 border border-blue-600/30 rounded-lg text-white placeholder-blue-300/70"
            placeholder="License Plate"
          />
          <input
            type="text"
            value={newVehicle.description}
            onChange={(e) => setNewVehicle({...newVehicle, description: e.target.value})}
            className="px-4 py-3 bg-blue-800/50 border border-blue-600/30 rounded-lg text-white placeholder-blue-300/70"
            placeholder="Description (optional)"
          />
        </div>
        <Button 
          onClick={handleAddVehicle}
          type="button"
          className="mt-4 w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg flex items-center justify-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Vehicle
        </Button>
      </div>

      {/* Vehicle List */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-950 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <Archive className="w-5 h-5 mr-2" />
          Vehicle Fleet
        </h3>
        <div className="space-y-3">
          {vehicles.map((vehicle) => (
            <div 
              key={vehicle.licensePlate}
              className="bg-blue-900/50 border border-blue-700/30 p-4 rounded-lg flex items-center justify-between"
            >
              <div>
                <div className="flex items-center">
                  <Car className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-white font-medium">
                    {vehicle.type} - {vehicle.licensePlate}
                  </span>
                </div>
                {vehicle.description && (
                  <p className="text-sm text-blue-300 mt-1">{vehicle.description}</p>
                )}
              </div>
              <Button
                onClick={() => handleRemoveVehicle(vehicle.licensePlate)}
                variant="danger"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 p-2 rounded-lg"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          ))}
          {vehicles.length === 0 && (
            <div className="text-center py-6 text-blue-300">
              No vehicles added yet
            </div>
          )}
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-4 pt-4">
        <Button 
          onClick={onClose} 
          variant="danger" 
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-lg text-slate-200"
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          variant="primary" 
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 rounded-lg text-slate-200"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default VehicleManagementForm;