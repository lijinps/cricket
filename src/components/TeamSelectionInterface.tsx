"use client";

import { useState } from "react";
import PlayerCard from "./PlayerCard";
import CricketField from "./CricketField";
import TeamDraftInterface from "./TeamDraftInterface";

interface Player {
  id: number;
  name: string;
  role: "Batsman" | "Bowler" | "All-rounder" | "Wicket-keeper" | "";
  battingAvg: number;
  bowlingAvg?: number;
  matches: number;
  isSelected: boolean;
  position?: { x: number; y: number };
  category: string;
  isOwner?: boolean;
}

export const playerPool: Player[] = [
  // Category A Players
  {
    id: 1,
    name: "Indrajith",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "A",
  },
  {
    id: 2,
    name: "Sajith",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "A",
  },
  {
    id: 3,
    name: "Yadhu",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "A",
    isOwner: true,
  },
  {
    id: 4,
    name: "Pruthyul",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "A",
  },

  // Category B Players
  {
    id: 5,
    name: "Ragesh",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "B",
    isOwner: true,
  },
  {
    id: 6,
    name: "Kannan (I)",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "B",
  },
  {
    id: 7,
    name: "Priyul",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "B",
  },
  {
    id: 8,
    name: "Arun",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "B",
  },

  // Category B1 Players
  {
    id: 9,
    name: "Kannan (PK)",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "B1",
  },
  {
    id: 10,
    name: "Ibru",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "B1",
  },
  {
    id: 11,
    name: "Anandu (Gulf)",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "B1",
  },
  {
    id: 12,
    name: "Shibu",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "B1",
  },

  // Category C Players
  {
    id: 13,
    name: "Jackson",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "C",
  },
  {
    id: 14,
    name: "Rupesh",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "C",
  },
  {
    id: 15,
    name: "Bagi",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "C",
  },
  {
    id: 16,
    name: "Pyari",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "C",
  },

  // Category C1 Players
  {
    id: 17,
    name: "Achuttan",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "C1",
  },
  {
    id: 18,
    name: "Akhil M V",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "C1",
  },
  {
    id: 19,
    name: "Arju Ananthan",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "C1",
  },
  {
    id: 20,
    name: "Sujith Kannan",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "C1",
  },

  // Category D Players
  {
    id: 21,
    name: "Kirisakh",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "D",
  },
  {
    id: 22,
    name: "Dheeraj (Thundan)",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "D",
    isOwner: true,
  },
  {
    id: 23,
    name: "Sooraj",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "D",
  },
  {
    id: 24,
    name: "Mohandas Appu",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "D",
  },

  // Category D1 Players
  {
    id: 25,
    name: "Adhi",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "D1",
  },
  {
    id: 26,
    name: "Ambady",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "D1",
  },
  {
    id: 27,
    name: "Appus",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "D1",
  },
  {
    id: 28,
    name: "Sreerag",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "D1",
  },

  // Category E Players
  {
    id: 29,
    name: "Anandan",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "E",
  },
  {
    id: 30,
    name: "Sareeshettan",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "E",
    isOwner: true,
  },
  {
    id: 31,
    name: "Sanumon",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "E",
  },
  {
    id: 32,
    name: "Biju",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "E",
  },

  // Category E1 Players
  {
    id: 33,
    name: "Hareesh",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "E1",
  },
  {
    id: 34,
    name: "Haridasan",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "E1",
  },
  {
    id: 35,
    name: "Rayan",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "E1",
  },
  {
    id: 36,
    name: "Raaghu",
    role: "",
    battingAvg: 0,
    matches: 0,
    isSelected: false,
    category: "E1",
  },
];

export default function TeamSelectionInterface() {
  const [players, setPlayers] = useState<Player[]>(playerPool);
  const [selectedTeam, setSelectedTeam] = useState<Player[]>([]);
  const [viewMode, setViewMode] = useState<"selection" | "formation" | "draft">(
    "selection"
  );
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const handlePlayerSelect = (playerId: number) => {
    if (
      selectedTeam.length >= 11 &&
      !players.find((p) => p.id === playerId)?.isSelected
    ) {
      alert("Team is full! Maximum 11 players allowed.");
      return;
    }

    setPlayers((prev) =>
      prev.map((player) =>
        player.id === playerId
          ? { ...player, isSelected: !player.isSelected }
          : player
      )
    );

    const player = players.find((p) => p.id === playerId);
    if (player) {
      if (player.isSelected) {
        setSelectedTeam((prev) => prev.filter((p) => p.id !== playerId));
      } else {
        setSelectedTeam((prev) => [...prev, { ...player, isSelected: true }]);
      }
    }
  };

  const clearSelection = () => {
    setPlayers((prev) =>
      prev.map((player) => ({ ...player, isSelected: false }))
    );
    setSelectedTeam([]);
  };

  const filteredPlayers =
    filterCategory === "all"
      ? players
      : players.filter((player) => player.category === filterCategory);

  const categories = ["all", "A", "B", "B1", "C", "C1", "D", "D1", "E", "E1"];

  const getCategoryStats = () => {
    const stats = categories.slice(1).map((cat) => ({
      category: cat,
      total: players.filter((p) => p.category === cat).length,
      selected: selectedTeam.filter((p) => p.category === cat).length,
    }));
    return stats;
  };

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 px-3 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-orange-400">Onam Premier League</span> Team{" "}
            <span className="text-red-400">Selection</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Select your playing XI from Season-2 registered players
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                }`}
              >
                {category === "all" ? "All Categories" : `Category ${category}`}
              </button>
            ))}
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 rounded-lg p-1 flex">
            <button
              onClick={() => setViewMode("selection")}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                viewMode === "selection"
                  ? "bg-red-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Player Selection
            </button>
            {/* <button
              onClick={() => setViewMode("formation")}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                viewMode === "formation"
                  ? "bg-red-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Field Formation
            </button> */}
            <button
              onClick={() => setViewMode("draft")}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                viewMode === "draft"
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              🎲 Team Draft
            </button>
          </div>
        </div>

        {viewMode === "selection" ? (
          <>
            {/* Selection Summary */}
            {/* <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 mb-8 border border-gray-700/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Selected Team
                  </h3>
                  <p className="text-gray-300">
                    {selectedTeam.length}/11 players selected
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {getCategoryStats()
                      .filter((stat) => stat.selected > 0)
                      .map((stat) => (
                        <span
                          key={stat.category}
                          className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded"
                        >
                          {stat.category}: {stat.selected}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={clearSelection}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    disabled={selectedTeam.length !== 11}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedTeam.length === 11
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-gray-500 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Confirm Team
                  </button>
                </div>
              </div>

              {selectedTeam.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex flex-wrap gap-2">
                    {selectedTeam.map((player) => (
                      <span
                        key={player.id}
                        className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30"
                      >
                        {player.name} ({player.category}) - {player.role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div> */}

            {/* Player Pool */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Available Players{" "}
                  {filterCategory !== "all" && `- Category ${filterCategory}`}
                </h3>
                <span className="text-gray-400 text-sm">
                  {filteredPlayers.length} players
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredPlayers.map((player) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    onSelect={() => handlePlayerSelect(player.id)}
                  />
                ))}
              </div>
            </div>
          </>
        ) : viewMode === "formation" ? (
          <CricketField selectedPlayers={selectedTeam} />
        ) : (
          <TeamDraftInterface />
        )}
      </div>
    </div>
  );
}
