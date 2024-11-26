import Button from "../button/Button";

const DeleteFactionConfirm = ({ onClose }) => (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-slate-200">Delete Faction</h2>
      <p className="text-red-400 mb-4">This action cannot be undone. All faction data will be permanently deleted.</p>
      <div className="flex justify-end gap-2">
        <Button onClick={onClose} variant="secondary" className="bg-blue-900 hover:bg-blue-950 text-slate-200">Cancel</Button>
        <Button onClick={onClose} variant="destructive" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-slate-200">Delete Faction</Button>
      </div>
    </div>
  );

  
export default DeleteFactionConfirm;