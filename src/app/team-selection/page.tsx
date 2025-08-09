import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import TeamSelectionInterface from "@/components/TeamSelectionInterface";

export default function TeamSelection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main className="relative">
        <TeamSelectionInterface />
      </main>
    </div>
  );
}
