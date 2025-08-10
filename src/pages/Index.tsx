import Seo from "@/components/Seo";
import ProfileHeader from "@/components/profile/ProfileHeader";
import Highlights from "@/components/profile/Highlights";
import ProfileTabs from "@/components/profile/ProfileTabs";
import { profileData } from "@/data/photos";

const Index = () => {
  const title = `${profileData.name} (@${profileData.username}) • Instagram Profile`;
  const description = `${profileData.name} — ${profileData.bio.replace(/\n/g, " ")}`.slice(0, 150);

  return (
    <main className="min-h-screen bg-background">
      <Seo title={title} description={description} image={profileData.avatar} />
      <section className="container mx-auto max-w-5xl px-4 py-8">
        <ProfileHeader />
        <Highlights />
        <ProfileTabs />
      </section>
    </main>
  );
};

export default Index;
