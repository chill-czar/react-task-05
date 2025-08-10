import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Film, Tag } from "lucide-react";
import PhotoGrid from "./PhotoGrid";

const EmptyState = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="mb-4 rounded-full p-4 bg-secondary"><Icon className="h-6 w-6" /></div>
    <h3 className="text-lg font-medium mb-1">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const ProfileTabs = () => (
  <section className="mt-6">
    <Tabs defaultValue="posts" className="w-full">
      <div className="flex items-center justify-center">
        <TabsList>
          <TabsTrigger value="posts" className="flex items-center gap-2"><Camera className="h-4 w-4" /> Posts</TabsTrigger>
          <TabsTrigger value="reels" className="flex items-center gap-2"><Film className="h-4 w-4" /> Reels</TabsTrigger>
          <TabsTrigger value="tagged" className="flex items-center gap-2"><Tag className="h-4 w-4" /> Tagged</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="posts">
        <PhotoGrid />
      </TabsContent>
      <TabsContent value="reels">
        <EmptyState icon={Film} title="No Reels yet" description="When you share reels, they’ll show up here." />
      </TabsContent>
      <TabsContent value="tagged">
        <EmptyState icon={Tag} title="No photos tagged" description="Photos and videos you're tagged in will appear here." />
      </TabsContent>
    </Tabs>
  </section>
);

export default ProfileTabs;
