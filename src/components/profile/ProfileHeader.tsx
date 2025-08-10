import { Button } from "@/components/ui/button";
import { profileData } from "@/data/photos";

const ProfileHeader = () => {
  const { username, name, bio, website, avatar, counts } = profileData;

  return (
    <header className="w-full">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-4 sm:col-span-3 md:col-span-3 flex justify-center">
          <div className="avatar-gradient-ring hover-tilt" aria-hidden>
            <img src={avatar} alt={`${name} profile picture`} width={128} height={128} loading="eager" />
          </div>
        </div>
        <div className="col-span-8 sm:col-span-9 md:col-span-9">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
            <h1 className="text-2xl font-semibold tracking-tight">{username}</h1>
            <div className="flex gap-2">
              <Button variant="secondary" className="hover-tilt">Follow</Button>
              <Button variant="outline" className="hover-tilt">Message</Button>
              <Button variant="outline" className="hover-tilt">Email</Button>
            </div>
          </div>
          <ul className="flex gap-6 text-sm sm:text-base mb-2">
            <li><strong className="font-semibold">{counts.posts}</strong> posts</li>
            <li><strong className="font-semibold">{counts.followers}</strong> followers</li>
            <li><strong className="font-semibold">{counts.following}</strong> following</li>
          </ul>
          <div>
            <p className="font-medium leading-none">{name}</p>
            <p className="text-muted-foreground whitespace-pre-line mt-1">{bio}</p>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline mt-1 inline-block">{website.replace('https://','')}</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
