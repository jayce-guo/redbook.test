import Header from "@/components/Header";
import FeatureGrid from "@/components/FeatureGrid";
import ActionButtons from "@/components/ActionButtons";
import CreationSection from "@/components/CreationSection";
import HistoryList from "@/components/HistoryList";
import BottomNav from "@/components/BottomNav";
import { AuthProvider } from "@/contexts/AuthContext";

export default function Page() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="px-4 pb-16">
          <ActionButtons />
          <FeatureGrid />
          <CreationSection />
          <HistoryList />
        </main>
        <BottomNav />
      </div>
    </AuthProvider>
  );
}
