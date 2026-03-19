import Header from "@/components/Header";
import FeaturedProject from "@/components/FeaturedProject";
import TechStack from "@/components/TechStack";
import GithubActivity from "@/components/GithubActivity";
import AboutCard from "@/components/AboutCard";
import ConnectCard from "@/components/ConnectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] p-4 md:p-8 font-sans selection:bg-neon-cyan/30">
      <div className="max-w-6xl mx-auto space-y-6">
        <Header />
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">

          <FeaturedProject />
          <TechStack />


          <GithubActivity />
          
          <div className="grid grid-cols-1 gap-6">
            <AboutCard />
            <ConnectCard />
          </div>
        </div>
      </div>
    </main>
  );
}
