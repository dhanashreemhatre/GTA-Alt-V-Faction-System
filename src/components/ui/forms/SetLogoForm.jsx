import Button from "../Button";
import { useState } from "react";


const SetLogoForm = ({ onClose }) => {
    const [logoUrl, setLogoUrl] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Setting logo:', logoUrl);
      onClose();
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Logo URL
          </label>
          <input
            type="text"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md"
            placeholder="Enter logo URL"
            required
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="danger" className="bg-blue-900 hover:bg-blue-950">Cancel</Button>
          <Button type="submit" variant="primary" className="bg-blue-600 hover:bg-blue-700">Set Logo</Button>
        </div>
      </form>
    );
  };
export default SetLogoForm;