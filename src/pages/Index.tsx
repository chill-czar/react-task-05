import Seo from "@/components/Seo";
import ProfileHeader from "@/components/profile/ProfileHeader";
import Highlights from "@/components/profile/Highlights";
import ProfileTabs from "@/components/profile/ProfileTabs";
import { profileData } from "@/data/photos";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-5xl px-4 py-8">
        <ProfileHeader />
        <Highlights />
        <ProfileTabs />
      </section>
    </main>
  );
};

export default Index;
