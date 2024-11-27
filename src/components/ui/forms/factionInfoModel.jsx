import React from 'react';
import { 
  Shield, Users, DollarSign, MapPin, 
  Calendar, Tag, Trophy, Flag 
} from "lucide-react";
import { Card, CardHeader, CardContent } from "../card/Card";
import Modal from "../modal/Modal";

const FactionInfoModal = ({ 
  onClose, 
  factionData 
}) => {
  // Sample default data in case no data is passed
  const defaultFactionData = {
    orgName: "Los Santos Police Department",
    orgType: "Law Enforcement",
    founded: "January 15, 2020",
    headquarters: "Central Los Santos",
    description: "Dedicated to maintaining law and order in Los Santos, protecting citizens and upholding justice.",
    totalMembers: 150,
    activeMembers: 75,
    leaderName: "Chief Michael Roberts",
    rankStructure: [
      { rank: "Cadet", count: 20 },
      { rank: "Officer", count: 50 },
      { rank: "Sergeant", count: 25 },
      { rank: "Lieutenant", count: 10 },
      { rank: "Captain", count: 5 },
      { rank: "Chief", count: 1 }
    ],
    achievements: [
      "City Safety Award 2023",
      "Community Engagement Excellence",
      "Crime Reduction Medal"
    ]
  };

  // Merge passed data with default data
  const displayData = { ...defaultFactionData, ...factionData };

  return (
      <Card className="max-h-[80vh] overflow-y-auto max-w-md mx-auto bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center space-x-4 border-b border-gray-700 pb-4">
          <Shield className="h-10 w-10 text-blue-500" />
          <div>
            <h2 className="text-2xl font-bold">{displayData.orgName}</h2>
            <p className="text-gray-400">{displayData.orgType}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span>Founded: {displayData.founded}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>HQ: {displayData.headquarters}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Members: {displayData.totalMembers}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-blue-400" />
                <span>Faction Funds: ${displayData.funds?.toLocaleString() || '0'}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Tag className="h-5 w-5 mr-2 text-blue-400" />
              Description
            </h3>
            <p className="text-gray-300">{displayData.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-blue-400" />
              Achievements
            </h3>
            <ul className="list-disc pl-5 text-gray-300">
              {displayData.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Flag className="h-5 w-5 mr-2 text-blue-400" />
              Rank Structure
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {displayData.rankStructure.map((rankInfo, index) => (
                <div 
                  key={index} 
                  className="bg-gray-700 p-2 rounded flex justify-between"
                >
                  <span>{rankInfo.rank}</span>
                  <span className="text-gray-400">{rankInfo.count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
  );
};

export default FactionInfoModal;
