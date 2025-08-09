"use client";

import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

interface Player {
  id: number;
  name: string;
  role: "Batsman" | "Bowler" | "All-rounder" | "Wicket-keeper";
  battingAvg: number;
  bowlingAvg?: number;
  matches: number;
  isSelected: boolean;
  category: string;
  isOwner?: boolean;
  teamId?: number;
}

interface Team {
  id: number;
  name: string;
  owner: Player;
  players: Player[];
  color: string;
}

const playerPool: Player[] = [
  // Category A Players
  {
    id: 1,
    name: "Indrajith",
    role: "Batsman",
    battingAvg: 48.5,
    matches: 32,
    isSelected: false,
    category: "A",
  },
  {
    id: 2,
    name: "Sajith",
    role: "All-rounder",
    battingAvg: 42.8,
    bowlingAvg: 24.5,
    matches: 28,
    isSelected: false,
    category: "A",
  },
  {
    id: 3,
    name: "Yadhu",
    role: "Batsman",
    battingAvg: 46.2,
    matches: 25,
    isSelected: false,
    category: "A",
    isOwner: true,
  },
  {
    id: 4,
    name: "Pruthyul",
    role: "All-rounder",
    battingAvg: 41.6,
    bowlingAvg: 26.8,
    matches: 30,
    isSelected: false,
    category: "A",
  },

  // Category B Players
  {
    id: 5,
    name: "Ragesh",
    role: "Bowler",
    battingAvg: 18.5,
    bowlingAvg: 22.3,
    matches: 24,
    isSelected: false,
    category: "B",
    isOwner: true,
  },
  {
    id: 6,
    name: "Kannan (I)",
    role: "All-rounder",
    battingAvg: 34.2,
    bowlingAvg: 28.9,
    matches: 22,
    isSelected: false,
    category: "B",
  },
  {
    id: 7,
    name: "Priyul",
    role: "Batsman",
    battingAvg: 38.4,
    matches: 20,
    isSelected: false,
    category: "B",
  },
  {
    id: 8,
    name: "Arun",
    role: "Bowler",
    battingAvg: 16.8,
    bowlingAvg: 24.1,
    matches: 26,
    isSelected: false,
    category: "B",
  },

  // Category B1 Players
  {
    id: 9,
    name: "Kannan (PK)",
    role: "All-rounder",
    battingAvg: 35.8,
    bowlingAvg: 27.5,
    matches: 23,
    isSelected: false,
    category: "B1",
  },
  {
    id: 10,
    name: "Ibru",
    role: "Batsman",
    battingAvg: 36.5,
    matches: 19,
    isSelected: false,
    category: "B1",
  },
  {
    id: 11,
    name: "Anandu (Gulf)",
    role: "Wicket-keeper",
    battingAvg: 32.8,
    matches: 21,
    isSelected: false,
    category: "B1",
  },
  {
    id: 12,
    name: "Shibu",
    role: "All-rounder",
    battingAvg: 33.9,
    bowlingAvg: 29.2,
    matches: 25,
    isSelected: false,
    category: "B1",
  },

  // Category C Players
  {
    id: 13,
    name: "Jackson",
    role: "Bowler",
    battingAvg: 14.2,
    bowlingAvg: 26.8,
    matches: 18,
    isSelected: false,
    category: "C",
  },
  {
    id: 14,
    name: "Rupesh",
    role: "Batsman",
    battingAvg: 29.5,
    matches: 16,
    isSelected: false,
    category: "C",
  },
  {
    id: 15,
    name: "Bagi",
    role: "All-rounder",
    battingAvg: 28.9,
    bowlingAvg: 32.1,
    matches: 17,
    isSelected: false,
    category: "C",
  },
  {
    id: 16,
    name: "Pyari",
    role: "Bowler",
    battingAvg: 12.8,
    bowlingAvg: 28.5,
    matches: 15,
    isSelected: false,
    category: "C",
  },

  // Category C1 Players
  {
    id: 17,
    name: "Achuttan",
    role: "Batsman",
    battingAvg: 31.2,
    matches: 14,
    isSelected: false,
    category: "C1",
  },
  {
    id: 18,
    name: "Akhil M V",
    role: "All-rounder",
    battingAvg: 27.8,
    bowlingAvg: 33.5,
    matches: 16,
    isSelected: false,
    category: "C1",
  },
  {
    id: 19,
    name: "Arju Ananthan",
    role: "Batsman",
    battingAvg: 26.4,
    matches: 13,
    isSelected: false,
    category: "C1",
  },
  {
    id: 20,
    name: "Sujith Kannan",
    role: "Bowler",
    battingAvg: 11.5,
    bowlingAvg: 30.2,
    matches: 15,
    isSelected: false,
    category: "C1",
  },

  // Category D Players
  {
    id: 21,
    name: "Kirisakh",
    role: "All-rounder",
    battingAvg: 25.6,
    bowlingAvg: 34.8,
    matches: 12,
    isSelected: false,
    category: "D",
  },
  {
    id: 22,
    name: "Dheeraj (Thundan)",
    role: "Batsman",
    battingAvg: 24.2,
    matches: 11,
    isSelected: false,
    category: "D",
    isOwner: true,
  },
  {
    id: 23,
    name: "Sooraj",
    role: "Bowler",
    battingAvg: 9.8,
    bowlingAvg: 32.1,
    matches: 13,
    isSelected: false,
    category: "D",
  },
  {
    id: 24,
    name: "Mohandas Appu",
    role: "Wicket-keeper",
    battingAvg: 22.5,
    matches: 10,
    isSelected: false,
    category: "D",
  },

  // Category D1 Players
  {
    id: 25,
    name: "Adhi",
    role: "Batsman",
    battingAvg: 23.8,
    matches: 9,
    isSelected: false,
    category: "D1",
  },
  {
    id: 26,
    name: "Ambady",
    role: "All-rounder",
    battingAvg: 21.4,
    bowlingAvg: 36.2,
    matches: 11,
    isSelected: false,
    category: "D1",
  },
  {
    id: 27,
    name: "Appus",
    role: "Bowler",
    battingAvg: 8.5,
    bowlingAvg: 34.5,
    matches: 8,
    isSelected: false,
    category: "D1",
  },
  {
    id: 28,
    name: "Sreerag",
    role: "Batsman",
    battingAvg: 20.6,
    matches: 7,
    isSelected: false,
    category: "D1",
  },

  // Category E Players
  {
    id: 29,
    name: "Anandan",
    role: "All-rounder",
    battingAvg: 19.8,
    bowlingAvg: 37.5,
    matches: 6,
    isSelected: false,
    category: "E",
  },
  {
    id: 30,
    name: "Sareeshettan",
    role: "Batsman",
    battingAvg: 18.2,
    matches: 8,
    isSelected: false,
    category: "E",
    isOwner: true,
  },
  {
    id: 31,
    name: "Sanumon",
    role: "Bowler",
    battingAvg: 7.2,
    bowlingAvg: 35.8,
    matches: 5,
    isSelected: false,
    category: "E",
  },
  {
    id: 32,
    name: "Biju",
    role: "Wicket-keeper",
    battingAvg: 16.5,
    matches: 6,
    isSelected: false,
    category: "E",
  },

  // Category E1 Players
  {
    id: 33,
    name: "Hareesh",
    role: "Batsman",
    battingAvg: 17.8,
    matches: 4,
    isSelected: false,
    category: "E1",
  },
  {
    id: 34,
    name: "Haridasan",
    role: "All-rounder",
    battingAvg: 15.2,
    bowlingAvg: 38.9,
    matches: 5,
    isSelected: false,
    category: "E1",
  },
  {
    id: 35,
    name: "Rayan",
    role: "Bowler",
    battingAvg: 6.8,
    bowlingAvg: 36.5,
    matches: 3,
    isSelected: false,
    category: "E1",
  },
  {
    id: 36,
    name: "Raaghu",
    role: "Batsman",
    battingAvg: 14.5,
    matches: 4,
    isSelected: false,
    category: "E1",
  },
];

export default function TeamDraftInterface() {
  const [players, setPlayers] = useState<Player[]>(playerPool);
  const [teams, setTeams] = useState<Team[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("A");
  const [draftPhase, setDraftPhase] = useState<
    "setup" | "drafting" | "completed"
  >("setup");
  const [isSpinning, setIsSpinning] = useState(false);
  const [draftResults, setDraftResults] = useState<{
    [category: string]: { [teamId: number]: Player };
  }>({});

  const categories = ["A", "B", "B1", "C", "C1", "D", "D1", "E", "E1"];
  const teamColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
  ];

  // Initialize teams with owners
  useEffect(() => {
    const owners = players.filter((p) => p.isOwner);
    const initialTeams: Team[] = owners.map((owner, index) => ({
      id: index + 1,
      name: `Team ${owner.name}`,
      owner: owner,
      players: [owner],
      color: teamColors[index],
    }));
    setTeams(initialTeams);
  }, []);

  const getAvailablePlayersForCategory = (category: string) => {
    return players.filter(
      (p) =>
        p.category === category &&
        !p.isOwner &&
        !Object.values(draftResults).some((categoryResults) =>
          Object.values(categoryResults).some((player) => player.id === p.id)
        )
    );
  };

  const getOwnerInCategory = (category: string) => {
    return players.find((p) => p.category === category && p.isOwner);
  };

  const performDraft = (category: string) => {
    setIsSpinning(true);

    setTimeout(() => {
      const availablePlayers = getAvailablePlayersForCategory(category);
      const ownerInCategory = getOwnerInCategory(category);
      const categoryResults: { [teamId: number]: Player } = {};

      // If there's an owner in this category, assign them to their team directly
      if (ownerInCategory) {
        const ownerTeam = teams.find(
          (team) => team.owner.id === ownerInCategory.id
        );
        if (ownerTeam) {
          categoryResults[ownerTeam.id] = ownerInCategory;
        }
      }

      // For remaining teams, randomly assign from available players
      const teamsNeedingPlayers = teams.filter(
        (team) => !categoryResults[team.id]
      );
      if (availablePlayers.length > 0 && teamsNeedingPlayers.length > 0) {
        const shuffledPlayers = [...availablePlayers].sort(
          () => Math.random() - 0.5
        );

        teamsNeedingPlayers.forEach((team, index) => {
          if (shuffledPlayers[index]) {
            categoryResults[team.id] = shuffledPlayers[index];
          }
        });
      }

      setDraftResults((prev) => ({
        ...prev,
        [category]: categoryResults,
      }));

      // Update teams with new players
      setTeams((prevTeams) =>
        prevTeams.map((team) => ({
          ...team,
          players: [
            ...team.players.filter((p) => p.category !== category || p.isOwner),
            ...(categoryResults[team.id] ? [categoryResults[team.id]] : []),
          ],
        }))
      );

      setIsSpinning(false);
    }, 2000);
  };

  const startDraft = () => {
    setDraftPhase("drafting");
    setCurrentCategory("A");
  };

  const nextCategory = () => {
    const currentIndex = categories.indexOf(currentCategory);
    if (currentIndex < categories.length - 1) {
      setCurrentCategory(categories[currentIndex + 1]);
    } else {
      setDraftPhase("completed");
    }
  };

  const getCurrentCategoryPlayers = () => {
    return getAvailablePlayersForCategory(currentCategory);
  };

  const getDraftedPlayer = (teamId: number, category: string) => {
    return draftResults[category]?.[teamId];
  };

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 px-3 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-orange-400">Team Draft</span> System
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            4 teams under owners • One player per category via tossing • Fair
            distribution
          </p>
        </div>

        {draftPhase === "setup" && (
          <div className="text-center">
            <div className="bg-gray-800/30 rounded-lg p-8 mb-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">
                Team Owners
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {teams.map((team) => (
                  <div
                    key={team.id}
                    className={`${team.color}/20 border border-white/20 rounded-lg p-4`}
                  >
                    <div
                      className={`w-16 h-16 ${team.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {team.owner.name.charAt(0)}
                    </div>
                    <h3 className="text-white font-semibold text-lg">
                      {team.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {team.owner.role} • Category {team.owner.category}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={startDraft}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Draft Process
              </button>
            </div>
          </div>
        )}

        {draftPhase === "drafting" && (
          <div>
            {/* Current Category Draft */}
            <div className="bg-gray-800/30 rounded-lg p-6 mb-8 border border-gray-700/50">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Drafting Category {currentCategory}
                </h2>
                <div className="flex justify-center gap-2 mb-4">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        cat === currentCategory
                          ? "bg-orange-500 text-white"
                          : categories.indexOf(cat) <
                            categories.indexOf(currentCategory)
                          ? "bg-green-500/20 text-green-300"
                          : "bg-gray-700/50 text-gray-400"
                      }`}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
                <p className="text-gray-300">
                  {getCurrentCategoryPlayers().length} players available for
                  tossing
                  {getOwnerInCategory(currentCategory) && (
                    <span className="block text-orange-300 text-sm mt-1">
                      👑 {getOwnerInCategory(currentCategory)?.name} (Owner)
                      will be auto-assigned to their team
                    </span>
                  )}
                </p>
              </div>

              {/* Available Players */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {getCurrentCategoryPlayers().map((player) => (
                  <div key={player.id} className="transform scale-90">
                    <PlayerCard player={player} onSelect={() => {}} />
                  </div>
                ))}
              </div>

              {/* Draft Action */}
              <div className="text-center">
                {!draftResults[currentCategory] ? (
                  <button
                    onClick={() => performDraft(currentCategory)}
                    disabled={
                      isSpinning || getCurrentCategoryPlayers().length === 0
                    }
                    className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                      isSpinning
                        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600 text-white hover:scale-105"
                    }`}
                  >
                    {isSpinning ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Tossing...
                      </div>
                    ) : getOwnerInCategory(currentCategory) ? (
                      `🎲 Toss Category ${currentCategory} (Owner Auto-Assigned)`
                    ) : (
                      "🎲 Toss for Category " + currentCategory
                    )}
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="text-green-400 font-semibold">
                      ✅ Category {currentCategory} Draft Completed!
                    </div>
                    <button
                      onClick={nextCategory}
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                    >
                      {categories.indexOf(currentCategory) ===
                      categories.length - 1
                        ? "Complete Draft"
                        : "Next Category"}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Draft Results */}
            {Object.keys(draftResults).length > 0 && (
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">
                  Draft Results
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {teams.map((team) => (
                    <div
                      key={team.id}
                      className={`${team.color}/10 border border-white/20 rounded-lg p-4`}
                    >
                      <div className="text-center mb-4">
                        <div
                          className={`w-12 h-12 ${team.color} rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold`}
                        >
                          {team.owner.name.charAt(0)}
                        </div>
                        <h4 className="text-white font-semibold">
                          {team.name}
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {categories.map((cat) => {
                          const draftedPlayer = getDraftedPlayer(team.id, cat);
                          return (
                            <div
                              key={cat}
                              className="flex justify-between items-center text-sm"
                            >
                              <span className="text-gray-400">Cat {cat}:</span>
                              {draftedPlayer ? (
                                <span className="text-white font-medium">
                                  {draftedPlayer.name}
                                </span>
                              ) : cat === currentCategory &&
                                draftResults[cat] ? (
                                <span className="text-red-400">
                                  Not assigned
                                </span>
                              ) : (
                                <span className="text-gray-500">-</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {draftPhase === "completed" && (
          <div className="text-center">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-4">
                🎉 Draft Completed!
              </h2>
              <p className="text-gray-300 text-lg">
                All teams have been formed with fair distribution
              </p>
            </div>

            {/* Final Teams */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teams.map((team) => (
                <div
                  key={team.id}
                  className={`${team.color}/10 border border-white/20 rounded-lg p-6`}
                >
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 ${team.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl`}
                    >
                      {team.owner.name.charAt(0)}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {team.name}
                    </h3>
                    <p className="text-gray-300">Owner: {team.owner.name}</p>
                  </div>
                  <div className="space-y-3">
                    {team.players.map((player) => (
                      <div
                        key={player.id}
                        className="flex justify-between items-center bg-gray-800/30 rounded-lg p-3"
                      >
                        <div>
                          <span className="text-white font-medium">
                            {player.name}
                          </span>
                          {player.isOwner && (
                            <span className="ml-2 text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
                              👑
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-orange-300 text-sm">
                            Cat {player.category}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {player.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
