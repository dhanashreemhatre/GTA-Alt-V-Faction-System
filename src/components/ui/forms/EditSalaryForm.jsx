import Button from "../Button";
import { useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import { Card,CardHeader,CardContent } from "../card/Card";
import { Alert, AlertDescription } from './../Alert';

const RankSalaryManager = () => {
  const [ranks, setRanks] = useState([
    { id: 'fmt', rank: 'FMT / SUSPENDED', salary: 500 },
    { id: 'unused', rank: 'UNUSED', salary: 0 },
    { id: 'cadet', rank: 'Cadet', salary: 0 },
    { id: 'academy', rank: 'Academy Student', salary: 0 },
    { id: 'po1', rank: 'Police Officer I', salary: 0 },
    { id: 'po2', rank: 'Police Officer II', salary: 0 },
    { id: 'po3', rank: 'Police Officer III', salary: 0 },
    { id: 'po31', rank: 'Police Officer III+1', salary: 0 },
    { id: 'det1', rank: 'Detective I', salary: 0 },
    { id: 'det2', rank: 'Detective II', salary: 0 },
    { id: 'det3', rank: 'Detective III', salary: 0 },
    { id: 'sgt1', rank: 'Sergeant I', salary: 0 },
    { id: 'sgt2', rank: 'Sergeant II', salary: 0 },
    { id: 'lt1', rank: 'Lieutenant I', salary: 5 },
    { id: 'lt2', rank: 'Lieutenant II', salary: 0 },
    { id: 'cpt', rank: 'Captain I', salary: 0 },
    { id: 'cmd', rank: 'Commander', salary: 0 },
    { id: 'dep', rank: 'Deputy Chief of Police', salary: 0 },
    { id: 'acp', rank: 'Assistant Chief of Police', salary: 0 },
    { id: 'cop', rank: 'Chief of Police', salary: 2000 }
  ]);
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSalaryChange = (id, newSalary) => {
    setRanks(ranks.map(rank => 
      rank.id === id ? { ...rank, salary: parseInt(newSalary) || 0 } : rank
    ));
  };

  const handleRankChange = (id, newRank) => {
    setRanks(ranks.map(rank => 
      rank.id === id ? { ...rank, rank: newRank } : rank
    ));
  };

  const addNewRank = () => {
    const newId = `rank-${ranks.length + 1}`;
    setRanks([...ranks, { id: newId, rank: 'New Rank', salary: 0 }]);
    setIsEditing(true);
  };

  const deleteRank = (id) => {
    setRanks(ranks.filter(rank => rank.id !== id));
  };

  const handleSave = () => {
    setShowSuccess(true);
    setIsEditing(false);
    setTimeout(() => setShowSuccess(false), 2000);
    // Here you would typically save to your backend
    console.log('Saving ranks:', ranks);
  };

  return (
    <Card className="max-h-[80vh] text-white overflow-y-auto">
      <CardContent className="p-2">
        {showSuccess && (
          <Alert className="bg-green-600 text-white mb-4">
            <AlertDescription>Changes saved successfully!</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          {ranks.map((rank) => (
            <div
              key={rank.id}
              className="flex items-center gap-3 p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
            >
              <input
                type="text"
                value={rank.rank}
                onChange={(e) => handleRankChange(rank.id, e.target.value)}
                className="flex-grow px-3 py-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
              />
              <input
                type="number"
                value={rank.salary}
                onChange={(e) => handleSalaryChange(rank.id, e.target.value)}
                className="w-24 px-3 py-1 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                min="0"
              />
              {isEditing && (
                <button
                  onClick={() => deleteRank(rank.id)}
                  className="p-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={addNewRank}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
          >
            <Plus size={18} />
            {/* Add Rank */}
          </button>
          
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              {isEditing ? 'Cancel Edit' : 'Edit Ranks'}
            </button>
            
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition-colors"
            >
              <Save size={18} />
              {/* Save Changes */}
            </button>
          </div>
      </CardContent>
    </Card>
  );
};

export default RankSalaryManager;