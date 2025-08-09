"use client";

import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { playerPool } from "./TeamSelectionInterface";

interface Player {
  id: number;
  name: string;
  role: "Batsman" | "Bowler" | "All-rounder" | "Wicket-keeper" | "";
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
      players: [], // Start with empty players array, owners will be added during draft
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

    // Random delay between 1.5 to 3.5 seconds for more suspense
    const randomDelay = 1500 + Math.random() * 2000;

    setTimeout(() => {
      const availablePlayers = getAvailablePlayersForCategory(category);
      const ownerInCategory = getOwnerInCategory(category);
      const categoryResults: { [teamId: number]: Player } = {};

      // Create a custom random function with timestamp seed for extra entropy
      const timeSeed = Date.now() % 1000;
      const getRandomWithSeed = (seed: number = timeSeed) => {
        const x = Math.sin(seed + Math.random() * 1000) * 10000;
        return x - Math.floor(x);
      };

      // If there's an owner in this category, assign them to their team directly
      if (ownerInCategory) {
        const ownerTeam = teams.find(
          (team) => team.owner.id === ownerInCategory.id
        );
        if (ownerTeam) {
          categoryResults[ownerTeam.id] = ownerInCategory;
        }
      }

      // For remaining teams, randomly assign from available players with enhanced randomness
      const teamsNeedingPlayers = teams.filter(
        (team) => !categoryResults[team.id]
      );
      if (availablePlayers.length > 0 && teamsNeedingPlayers.length > 0) {
        // Multiple rounds of shuffling for better randomness
        let shuffledPlayers = [...availablePlayers];

        // Multiple rounds of Fisher-Yates shuffle for maximum randomness
        for (let round = 0; round < 3; round++) {
          for (let i = shuffledPlayers.length - 1; i > 0; i--) {
            const j = Math.floor(
              getRandomWithSeed(timeSeed + round + i) * (i + 1)
            );
            [shuffledPlayers[i], shuffledPlayers[j]] = [
              shuffledPlayers[j],
              shuffledPlayers[i],
            ];
          }
        }

        // Additional random sorting with custom entropy
        shuffledPlayers = shuffledPlayers.sort(() => getRandomWithSeed() - 0.5);

        // Shuffle teams multiple times for extra randomness
        let shuffledTeams = [...teamsNeedingPlayers];
        for (let round = 0; round < 2; round++) {
          shuffledTeams = shuffledTeams.sort(
            () => getRandomWithSeed(timeSeed + round) - 0.5
          );
        }

        // Create random indices array for even more chaos
        const randomIndices = Array.from(
          { length: shuffledPlayers.length },
          (_, i) => i
        ).sort(() => getRandomWithSeed() - 0.5);

        // Final assignment using random indices for ultimate randomness
        shuffledTeams.forEach((team, index) => {
          const randomIndex = randomIndices[index] || 0;
          if (shuffledPlayers[randomIndex]) {
            categoryResults[team.id] = shuffledPlayers[randomIndex];
            // Remove assigned player to avoid duplicates
            shuffledPlayers.splice(randomIndex, 1);
            randomIndices.forEach((val, idx) => {
              if (val > randomIndex) randomIndices[idx] = val - 1;
            });
          }
        });
      }

      setDraftResults((prev) => ({
        ...prev,
        [category]: categoryResults,
      }));

      // Update teams with new players
      setTeams((prevTeams) =>
        prevTeams.map((team) => {
          const newPlayer = categoryResults[team.id];
          if (!newPlayer) return team;

          // Check if this player is already in the team to avoid duplicates
          const playerExists = team.players.some((p) => p.id === newPlayer.id);
          if (playerExists) return team;

          return {
            ...team,
            players: [...team.players, newPlayer],
          };
        })
      );

      setIsSpinning(false);
    }, randomDelay);
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
                {/* Show owner first if exists in category (for display purposes) - only before drafting */}
                {getOwnerInCategory(currentCategory) &&
                  !draftResults[currentCategory] && (
                    <div className="transform scale-90">
                      <div className="relative">
                        <PlayerCard
                          player={getOwnerInCategory(currentCategory)!}
                          onSelect={() => {}}
                        />
                        <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          AUTO-ASSIGNED
                        </div>
                      </div>
                    </div>
                  )}

                {/* Show regular players available for tossing - only before drafting */}
                {!draftResults[currentCategory] &&
                  getCurrentCategoryPlayers().map((player) => (
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
                        <div className="animate-pulse">🎲</div>
                        <div className="animate-bounce">⚡</div>
                        Tossing with Enhanced Randomness...
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
                    {/* Always show owner first, then drafted players */}
                    <div className="flex justify-between items-center bg-gray-800/30 rounded-lg p-3 border border-yellow-500/30">
                      <div>
                        <span className="text-white font-medium">
                          {team.owner.name}
                        </span>
                        <span className="ml-2 text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
                          👑 OWNER
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-orange-300 text-sm">
                          Cat {team.owner.category}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {team.owner.role}
                        </div>
                      </div>
                    </div>

                    {/* Show drafted players (excluding owner) */}
                    {team.players
                      .filter((p) => !p.isOwner)
                      .map((player) => (
                        <div
                          key={player.id}
                          className="flex justify-between items-center bg-gray-800/30 rounded-lg p-3"
                        >
                          <div>
                            <span className="text-white font-medium">
                              {player.name}
                            </span>
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
